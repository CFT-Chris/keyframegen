export class KeyframeGenerator {

  private static readonly verbatimTransitions = ['opacity'];
  private static counter: number = 1;
  
  private styleElement: HTMLElement;
  private name: string;
  protected duration: number = 0;

  constructor() {
    // No-op
  }

  protected getWebAPIKeyframes(_options: KeyframeOptions = {}): WebAPIKeyframe[] {
    throw new Error('Not implemented');
  }

  protected updateDuration(duration?: number): void {
    this.duration = duration || this.duration;
  }

  /**
   * Retrieve keyframes to embed as CSS or as an array of Animation Keyframe objects to use with 
   * Web Animation API.
   * @param type Defaults to `'webapi'`
   * @param options Output options. See {@link KeyframeOptions}
   * @returns CSS or array of objects depending on the type given
   */
  get<ReturnType extends keyof KeyframeReturnTypeMap>(type?: ReturnType, options: KeyframeOptions = {}): KeyframeReturnTypeMap[ReturnType] {
    let ret: KeyframeReturnTypeMap[ReturnType] = null;
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

          KeyframeGenerator.verbatimTransitions.forEach(property => {
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

        ret = animations.join('\n\n') as KeyframeReturnTypeMap[ReturnType];
        break;
      }
      case 'webapi':
      default:
        ret = keyframes as KeyframeReturnTypeMap[ReturnType];
        break;
    }

    return(ret);
  }

  /**
   * Apply this animation to an HTML element or array of HTML elements.
   * Embeds a style element in the HTML document with the animations and keyframes,
   * and then sets the CSS of the given HTML elements to use those animations.
   * @param el 
   * @param options 
   * @returns Promise that resolves once the animation is completed.  Infinite animations never resolve.
   */
  applyTo(el: HTMLElement | HTMLElement[], options: ApplyToOptions = {}): Promise<void> {
    const elements: HTMLElement[] = !Array.isArray(el)
      ? [el]
      : el;
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

  private remove(): void {
    if (this.styleElement) {
      if (this.styleElement.remove)
        this.styleElement.remove();
      else if (this.styleElement.parentNode)
        this.styleElement.parentNode.removeChild(this.styleElement);
    }    
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

  /**
   * @returns Does the browser have CSS support for animations?
   */
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

export interface WebAPIKeyframe {
  offset: number,
  easing?: string,
  transform?: string,
  'transform-origin'?: string,
  opacity?: number | string
}

export interface KeyframeOptions {
  /**
   * Alias for CSS keyframes. Defaults to an `animation-` concatenated with an identity counter.
   */
  name?: string,
  /**
   * Include all prefixes supported by the browser (e.g. for WebKit).
   */
  prefix?: boolean,
  /**
   * Force the output to include all prefixes, even if the browser doesn't support it (e.g. for WebKit).
   */
  forcePrefix?: boolean,
  /**
   * Approximates the key points calculated for the easing function in Complex animations reducing
   * the number of returned keyframes.
   */
  optimized?: boolean,
  /**
   * Append a CSS transform clause to each keyframe (useful if you want the target element to have 
   * a constant transform applied on top of the animation transforms).
   */
  transformSuffix?: string
}

interface ApplyToOptions {
  /**
   * Play the animation infinitely.
   */
  loop?: boolean,
  /**
   * Remove the animation property from the element and CSS style element from the document 
   * after the animation is done.
   */
  remove?: boolean,
  /**
   * Callback specified function after the animation is done.
   */
  onComplete?: () => any
}

interface CSSPropPrefixes {
  transform: string[],
  animation: string[]
}

interface KeyframeReturnTypeMap {
  /**
   * Array of [Web Animation API keyframe objects](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
   */
  webapi: WebAPIKeyframe[],
  /**
   * String of [Keyframe CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
   */
  css: string
}