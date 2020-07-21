import { KeyframeGenerator, WebAPIKeyframe, KeyframeOptions } from '../keyframegen';
import { BouncingOptions } from './effects/bouncing';
import { BurstOptions } from './effects/burst';
import { FallingOptions } from './effects/falling';
import { FlashingOptions } from './effects/flashing';
import { FloatingOptions } from './effects/floating';
import { HorizontalOptions } from './effects/horizontal';
import { LaunchRightOptions } from './effects/launchright';
import { LaunchUpOptions } from './effects/launchup';
import { OpenRightOutOptions } from './effects/openrightout';
import { PassingOptions } from './effects/passing';
import { PulseOptions } from './effects/pulse';
import { RingingOptions } from './effects/ringing';
import { ShakeOptions } from './effects/shake';
import { SpinnerOptions } from './effects/spinner';
import { TadaOptions } from './effects/tada';
import { WrenchOptions } from './effects/wrench';
import { VerticalOptions } from './effects/vertical';
interface SimpleEffects {
    bouncing: BouncingOptions;
    burst: BurstOptions;
    falling: FallingOptions;
    flashing: FlashingOptions;
    floating: FloatingOptions;
    horizontal: HorizontalOptions;
    launchright: LaunchRightOptions;
    launchup: LaunchUpOptions;
    openrightout: OpenRightOutOptions;
    passing: PassingOptions;
    pulse: PulseOptions;
    ringing: RingingOptions;
    shake: ShakeOptions;
    spinner: SpinnerOptions;
    tada: TadaOptions;
    wrench: WrenchOptions;
    vertical: VerticalOptions;
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
declare class Simple extends KeyframeGenerator {
    private static readonly EffectClasses;
    private effect;
    constructor();
    /**
     * Sets the simple effect to use.
     * @param effect Name of the effect
     * @param options Specific effect options
     */
    set<K extends keyof SimpleEffects>(effect: K, options?: SimpleEffects[K]): this;
    protected getWebAPIKeyframes(_options?: KeyframeOptions): WebAPIKeyframe[];
}
export { Simple };
