import Matrix4D from './math/matrix4d';
import Scale from './components/scale';
import Rotate from './components/rotate';
import Translate from './components/translate';
import Skew from './components/skew';
import { Component, ComponentOptions } from './components';
import { WebAPIKeyframe } from '..';

const ComponentClasses: { [type: string]: any } = {
  scale: Scale,
  rotate: Rotate,
  translate: Translate,
  skew: Skew
};

class Bounce {
  static FPS: number = 30;
  static counter: number = 1;

  components: Component[] = null;
  duration: number = 0;
  name: string;
  styleElement: HTMLElement;
  keys: number[];

  constructor() {
    this.components = [];
  }

  scale = (options?: ComponentOptions): Bounce => this.addComponent(new ComponentClasses.scale(options));
  rotate = (options?: ComponentOptions): Bounce => this.addComponent(new ComponentClasses.rotate(options));
  translate = (options?: ComponentOptions): Bounce => this.addComponent(new ComponentClasses.translate(options));
  skew = (options?: ComponentOptions): Bounce => this.addComponent(new ComponentClasses.skew(options));

  addComponent(component: Component): Bounce {
    this.components.push(component);
    this.updateDuration();

    return(this);
  }

  serialize = (): any[] => this.components.map(component => component.serialize());
  deserialize(serialized: ComponentOptions[]): Bounce {
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

  define(name?: string): Bounce {
    this.name = name || Bounce.generateName();
    this.styleElement = document.createElement('style');
    this.styleElement.innerHTML = this.getKeyframeCSS({ name: this.name, prefix: true });

    document.body.appendChild(this.styleElement);
    return(this);
  }

  remove(): void {
    if (this.styleElement) {
      if (this.styleElement.remove)
        this.styleElement.remove();
      else if (this.styleElement.parentNode)
        this.styleElement.parentNode.removeChild(this.styleElement);
    }    
  }

  getPrefixes(force?: boolean): CSSPropPrefixes {
    const prefixes: CSSPropPrefixes = {
      transform: [''],
      animation: ['']
    };
    const style = document.createElement('dummy').style;

    if (force || (!style.transform && style.webkitTransform))
      prefixes.transform = ['-webkit-', ''];

    if (force || (!style.animation && style.webkitAnimation))
      prefixes.animation = ['-webkit-', ''];

    return(prefixes);
  }

  getKeyframeWebAPI(options: KeyframeOptions = {}): WebAPIKeyframe[] {
    const keyframeList: WebAPIKeyframe[] = [];
    const keyframes = this.getKeyframes(options);
    let matrix: Matrix4D;

    this.name = name || Bounce.generateName();

    this.keys.forEach(key => {
      matrix = keyframes[key];
      keyframeList.push({
        offset: Math.round(key * 1000) / 1000,
        transform: `matrix3d${matrix}`
      });
    });

    return(keyframeList);
  }

  getKeyframeCSS(options: KeyframeOptions = {}): string {
    const prefixes: CSSPropPrefixes = options.prefix || options.forcePrefix
      ? this.getPrefixes(options.forcePrefix)
      : {
          transform: [''],
          animation: ['']
        };
    const keyframeList: string[] = [];
    const keyframes = this.getKeyframes(options);
    let matrix: Matrix4D, transformString: string, transforms: string[], animations: string[];

    this.name = name || Bounce.generateName();

    this.keys.forEach(key => {
      matrix = keyframes[key];
      transformString = `matrix3d${matrix}`;
      transforms = [];
      prefixes.transform.forEach(prefix => { 
        transforms.push(`${prefix}transform: ${transformString};`);
      });

      keyframeList.push(`${Math.round(key * 100 * 100) / 100}% { ${transforms.join(' ')} }`);
    });

    animations = [];
    prefixes.animation.forEach(prefix => {
      animations.push(`@${prefix}keyframes ${this.name} { \n  ${keyframeList.join('\n  ')} \n}`);
    });    

    return(animations.join('\n\n'));
  }

  getKeyframes({ optimized }: KeyframeOptions = {}): BounceKeyframes {
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
      const frames = Math.round((this.duration / 1000) * Bounce.FPS);

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

  applyTo(v: HTMLElement | HTMLElement[], options: ApplyToOptions = {}): Promise<void> {
    const elements: HTMLElement[] = !Array.isArray(v)
      ? [v]
      : v;
    let prefixes: CSSPropPrefixes, css;

    this.define();

    prefixes = this.getPrefixes();

    return (new Promise(resolve => {
      elements.forEach(element => {
        prefixes.animation.forEach(prefix => {
          css = [this.name, `${this.duration}ms`, 'linear', 'both'];

          if (options.loop)
            css.push('infinite');

          element.style[`${prefix}animation` as any] = css.join(' ');
        });
      });

      if (!options.loop) {
        setTimeout(() => {
          if (options.remove)
            this.remove();
          if (options.onComplete)
            options.onComplete();

          resolve();
        }, this.duration);
      }
    }));
  }

  static generateName = (): string => `animation-${Bounce.counter++}`;

  static isSupported(): boolean {
    const style = document.createElement("dummy").style;
    const propertyLists = [
      ['transform', 'webkitTransform'],
      ['animation', 'webkitAnimation']
    ];
    let supported = true;
    let propertyIsSupported: boolean;

    propertyLists.forEach(propertyList => {
      propertyIsSupported = false;

      propertyList.forEach(property => {
        propertyIsSupported = propertyIsSupported || property in style;
      });
        
      supported = supported && propertyIsSupported;
    })

    return(supported);
  }
}

interface CSSPropPrefixes {
  transform: string[],
  animation: string[]
}

interface KeyframeOptions {
  name?: string,
  prefix?: boolean,
  forcePrefix?: boolean,
  optimized?: boolean
}

interface ApplyToOptions {
  loop?: boolean,
  remove?: boolean,
  onComplete?: () => any
}

interface BounceKeyframes {
  [key: number]: Matrix4D
}

export { Bounce };