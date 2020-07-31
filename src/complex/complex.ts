import Matrix4D from './math/matrix4d';
import Scale from './components/scale';
import Rotate from './components/rotate';
import Translate from './components/translate';
import Skew from './components/skew';
import { Component, ComponentOptions } from './components';
import { KeyframeGenerator, WebAPIKeyframe, KeyframeOptions } from '../keyframegen';

/**
 * Construct a complex 2D animation using a chained composition of any number of the following transforms:
 * * scale
 * * rotate
 * * translate
 * * skew
 * 
 * See {@link ComponentOptions} for a list of options that can be applied per transformation component.
 * 
 * ## Basic Usage
 * ```ts
 * new Complex()
 *   .scale({ from: 0.5, to: 1, duration: 250 })
 *   .rotate({ from: -90, to: 0, delay: 250, duration: 500 })
 *   .get();
 * ```
 */
class Complex extends KeyframeGenerator {

  protected static readonly ComponentClasses: { [type: string]: any } = {
    scale: Scale,
    rotate: Rotate,
    translate: Translate,
    skew: Skew
  };
  protected static FPS: number = 30;

  protected components: Component[] = [];
  protected keys: number[];

  constructor() {
    super();
  }

  scale = (options?: ComponentOptions): this => this.addComponent(new Complex.ComponentClasses.scale(options));
  rotate = (options?: ComponentOptions): this => this.addComponent(new Complex.ComponentClasses.rotate(options));
  translate = (options?: ComponentOptions): this => this.addComponent(new Complex.ComponentClasses.translate(options));
  skew = (options?: ComponentOptions): this => this.addComponent(new Complex.ComponentClasses.skew(options));

  private addComponent(component: Component): this {
    this.components.push(component);
    this.updateDuration();

    return(this);
  }

  /**
   * Removes a component from the transformation chain.
   * @param index Remove transformation component at index; if omitted, all components are removed
   */
  remove(index?: number): this {
    if (index === undefined)
      this.components = [];
    else
      this.components.splice(index, 1);
      
    return(this);
  }

  /**
   * Clears all components from the transformation chain.
   */
  clear(): this {
    return(this.remove());
  }

  /**
   * Outputs the Complex composition to an array of component options that can be 
   * reloaded via {@link deserialize}. Useful for saving preset animations.
   */
  serialize = (): any[] => this.components.map(component => component.serialize());

  /**
   * Reload a Complex composition from a {@link serialize}d operation.
   * @param serialized Array of ComponentOptions objects from {@link serialize}
   */
  deserialize(serialized: ComponentOptions[]): this {
    serialized.forEach(options => {
      if (Complex.ComponentClasses.hasOwnProperty(options.type))
        this.addComponent(new Complex.ComponentClasses[options.type](options));
    });
    return(this);
  }

  protected updateDuration(): void {
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