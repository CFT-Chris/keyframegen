export class KeyframeGenerator {
  static counter: number = 1;
  
  styleElement: HTMLElement;
  name: string;
  duration: number = 0;

  constructor() {
    // No-op
  }

  protected getWebAPIKeyframes(_options: KeyframeOptions = {}): WebAPIKeyframe[] {
    throw new Error('Not implemented');
  }

  updateDuration(duration?: number): void {
    this.duration = duration || this.duration;
  }

  remove(): void {
    if (this.styleElement) {
      if (this.styleElement.remove)
        this.styleElement.remove();
      else if (this.styleElement.parentNode)
        this.styleElement.parentNode.removeChild(this.styleElement);
    }    
  }

  get(type?: KeyframeReturnType, options: KeyframeOptions = {}): WebAPIKeyframe[] | string {
    let ret: WebAPIKeyframe[] | string = null;
    const keyframes: WebAPIKeyframe[] = this.getWebAPIKeyframes(options);

    this.name = options.name || KeyframeGenerator.generateName();

    if (options.transformSuffix) {
      keyframes.forEach(keyframe => {
        if ('transform' in keyframe)
          keyframe.transform += ` ${options.transformSuffix}`;
      });
    }

    switch (type) {
      case 'css': {
        const prefixes: CSSPropPrefixes = options.prefix || options.forcePrefix
          ? this.getPrefixes(options.forcePrefix)
          : {
              transform: [''],
              animation: ['']
            };
        const keyframeList: string[] = [];
        let transformString: string, transforms: string[], transitions: string[], animations: string[];

        keyframes.forEach((keyframe: WebAPIKeyframe) => {
          transformString = keyframe.transform;
          transforms = [];
          transitions = [];

          if (transformString) {
            prefixes.transform.forEach(prefix => { 
              transforms.push(`${prefix}transform: ${transformString};`);
            });
          }

          if (transforms.length > 0)
            transitions.push(transforms.join(' '));

          verbatimTransitions.forEach(property => {
            if (property in keyframe)
              transitions.push(`${property}: ${ (keyframe as any)[property] };`);
          });            

          if (transitions.length > 0)
            keyframeList.push(`${Math.round(keyframe.offset * 100 * 100) / 100}% { ${transitions.join(' ')} }`);
        });

        animations = [];
        prefixes.animation.forEach(prefix => {
          animations.push(`@${prefix}keyframes ${this.name} { \n  ${keyframeList.join('\n  ')} \n}`);
        });    

        ret = animations.join('\n\n');
        break;
      }
      case 'webapi':
      default:
        ret = keyframes;
        break;
    }

    return(ret);
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

  private define(name?: string): KeyframeGenerator {
    this.name = name || KeyframeGenerator.generateName();
    this.styleElement = document.createElement('style');
    this.styleElement.innerHTML = this.get('css', { name: this.name, prefix: true }) as string;

    document.body.appendChild(this.styleElement);
    return(this);
  }

  protected getPrefixes(force?: boolean): CSSPropPrefixes {
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

  protected static generateName = (): string => `animation-${KeyframeGenerator.counter++}`;

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

const verbatimTransitions = ['opacity'];
export interface WebAPIKeyframe {
  offset: number,
  transform?: string,
  opacity?: number | string
}

export interface KeyframeOptions {
  name?: string,
  prefix?: boolean,
  forcePrefix?: boolean,
  optimized?: boolean,
  transformSuffix?: string
}

interface ApplyToOptions {
  loop?: boolean,
  remove?: boolean,
  onComplete?: () => any
}

interface CSSPropPrefixes {
  transform: string[],
  animation: string[]
}

type KeyframeReturnType = 'webapi' | 'css';