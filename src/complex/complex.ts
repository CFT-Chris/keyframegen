import Matrix4D from './math/matrix4d';
import Scale from './components/scale';
import Rotate from './components/rotate';
import Translate from './components/translate';
import Skew from './components/skew';
import { Component, ComponentOptions } from './components';
import { KeyframeGenerator, WebAPIKeyframe, KeyframeOptions } from '../keyframegen';

const ComponentClasses: { [type: string]: any } = {
  scale: Scale,
  rotate: Rotate,
  translate: Translate,
  skew: Skew
};

class Complex extends KeyframeGenerator {
  static FPS: number = 30;

  components: Component[] = null;
  keys: number[];

  constructor() {
    super();
    this.components = [];
  }

  scale = (options?: ComponentOptions): Complex => this.addComponent(new ComponentClasses.scale(options));
  rotate = (options?: ComponentOptions): Complex => this.addComponent(new ComponentClasses.rotate(options));
  translate = (options?: ComponentOptions): Complex => this.addComponent(new ComponentClasses.translate(options));
  skew = (options?: ComponentOptions): Complex => this.addComponent(new ComponentClasses.skew(options));

  private addComponent(component: Component): Complex {
    this.components.push(component);
    this.updateDuration();

    return(this);
  }

  serialize = (): any[] => this.components.map(component => component.serialize());
  deserialize(serialized: ComponentOptions[]): Complex {
    serialized.forEach(options => {
      if (ComponentClasses.hasOwnProperty(options.type))
        this.addComponent(new ComponentClasses[options.type](options));
    });
    return(this);
  }

  updateDuration(): void {
    this.duration = this.components
      .map(component => component.duration + component.delay)
      .reduce((a, b) => Math.max(a, b), 0);
  }

  protected getWebAPIKeyframes(options: KeyframeOptions = {}): WebAPIKeyframe[] {
    const keyframeList: WebAPIKeyframe[] = [];
    const keyframes = this.getKeyframes(options);
    let matrix: Matrix4D;

    this.keys.forEach(key => {
      matrix = keyframes[key];
      keyframeList.push({
        offset: Math.round(key * 10000) / 10000,
        transform: `matrix3d${matrix}`
      });
    });

    return(keyframeList);
  }

  private getKeyframes({ optimized }: KeyframeOptions = {}): ComplexKeyframes {
    let keys = [0, 1];
    const keyframes: { [key: number]: Matrix4D } = {};
    let matrix: Matrix4D, currentTime, ratio;

    if (optimized) {
      this.components.forEach(component => {
        const componentKeys = component.easingObject.findOptimalKeyPoints().map(key => 
          (key * component.duration / this.duration) + (component.delay / this.duration));
        if (component.delay)
          componentKeys.push((component.delay / this.duration) - 0.001);
        keys = keys.concat(componentKeys);
      });
    }
    else {
      const frames = Math.round((this.duration / 1000) * Complex.FPS);

      for (let i = 0; i <= frames; i++)
        keys.push(i / frames);
    }

    keys = keys.sort((a, b) => a - b);
    this.keys = [];
    
    keys.forEach(key => {    
      if (!keyframes.hasOwnProperty(key)) {
        matrix = new Matrix4D().identity();

        this.components.forEach(component => {
          currentTime = key * this.duration;

          if ((component.delay - currentTime) < 1e-8) {
            ratio = (key - component.delay / this.duration) / (component.duration / this.duration);
            matrix.multiply(component.getEasedMatrix(ratio));
          }
        });

        this.keys.push(key);
        keyframes[key] = matrix.transpose().toFixed(3);
      }
    });

    return(keyframes);
  }  
}

interface ComplexKeyframes {
  [key: number]: Matrix4D
}

export { Complex };