import { KeyframeGenerator, WebAPIKeyframe, KeyframeOptions } from '../keyframegen';
import { Effect } from './effects';
import { Wrench, WrenchOptions } from './effects/wrench';
import { Tada, TadaOptions } from './effects/tada';
import { Shake, ShakeOptions } from './effects/shake';

interface SimpleEffects {
  shake: ShakeOptions,
  tada: TadaOptions,
  wrench: WrenchOptions
}

/**
 * Choose from a variety of basic 2D animations.
 * 
 * See {@link SimpleEffects} for a list of effects to choose from and their options.
 * 
 * ## Basic Usage
 * ```ts
 * new Simple()
 *   .set('shake')
 *   .get();
 * ```
 */
class Simple extends KeyframeGenerator {

  private static readonly EffectClasses = Object.freeze({
    shake: Shake,
    tada: Tada,
    wrench: Wrench 
  });
  private effect: Effect;

  constructor() {
    super();    
  }

  /**
   * Sets the simple effect to use.
   * @param effect Name of the effect
   * @param options Specific effect options
   */
  set<K extends keyof SimpleEffects>(effect: K, options?: SimpleEffects[K]): this {
    this.effect = new Simple.EffectClasses[effect](options);

    return(this);
  }

  protected getWebAPIKeyframes(_options: KeyframeOptions = {}): WebAPIKeyframe[] {
    const keyframes: WebAPIKeyframe[] = [];

    if (this.effect) {
      this.effect.keyframes.forEach(keyframe => {
        keyframes.push({ ...keyframe });
      });
    }

    return(keyframes);
  }

}

export { Simple };