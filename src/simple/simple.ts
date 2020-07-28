import { KeyframeGenerator, WebAPIKeyframe, KeyframeOptions } from '../keyframegen';
import { Effect } from './effects';
import { Bouncing, BouncingOptions } from './effects/bouncing';
import { Burst, BurstOptions } from './effects/burst';
import { Falling, FallingOptions } from './effects/falling';
import { Flashing, FlashingOptions } from './effects/flashing';
import { Floating, FloatingOptions } from './effects/floating';
import { Horizontal, HorizontalOptions } from './effects/horizontal';
import { LaunchRight, LaunchRightOptions } from './effects/launchright';
import { LaunchUp, LaunchUpOptions } from './effects/launchup';
import { OpenRightOut, OpenRightOutOptions } from './effects/openrightout';
import { Passing, PassingOptions } from './effects/passing';
import { Pulse, PulseOptions } from './effects/pulse';
import { Ringing, RingingOptions } from './effects/ringing';
import { Shake, ShakeOptions } from './effects/shake';
import { Spinner, SpinnerOptions } from './effects/spinner';
import { Tada, TadaOptions } from './effects/tada';
import { Wrench, WrenchOptions } from './effects/wrench';
import { Vertical, VerticalOptions } from './effects/vertical';

interface SimpleEffects {
  bouncing: BouncingOptions,
  burst: BurstOptions,
  falling: FallingOptions,
  flashing: FlashingOptions,
  floating: FloatingOptions,
  horizontal: HorizontalOptions,
  launchright: LaunchRightOptions,
  launchup: LaunchUpOptions,
  openrightout: OpenRightOutOptions,
  passing: PassingOptions,
  pulse: PulseOptions,
  ringing: RingingOptions,
  shake: ShakeOptions,
  spinner: SpinnerOptions,
  tada: TadaOptions,
  wrench: WrenchOptions,
  vertical: VerticalOptions
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
    bouncing: Bouncing,
    burst: Burst,
    falling: Falling,
    flashing: Flashing,
    floating: Floating,
    horizontal: Horizontal,
    launchright: LaunchRight,
    launchup: LaunchUp,
    openrightout: OpenRightOut,
    passing: Passing,
    pulse: Pulse,
    ringing: Ringing,
    shake: Shake,
    spinner: Spinner,
    tada: Tada,
    wrench: Wrench,
    vertical: Vertical
  });
  private effect: Effect;

  constructor() {
    super();
    
    this.updateDuration(1000);
  }

  /**
   * Sets the simple effect to use.
   * @param effect Name of the effect
   * @param options Specific effect options
   */
  set<K extends keyof SimpleEffects>(effect: K, options?: SimpleEffects[K]): this {
    this.effect = new Simple.EffectClasses[effect](options);
    
    if ('duration' in options)
      this.updateDuration(options.duration);

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