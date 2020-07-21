import { KeyframeGenerator, WebAPIKeyframe, KeyframeOptions } from '../keyframegen';
import { WrenchOptions } from './effects/wrench';
import { TadaOptions } from './effects/tada';
import { ShakeOptions } from './effects/shake';
interface SimpleEffects {
    shake: ShakeOptions;
    tada: TadaOptions;
    wrench: WrenchOptions;
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
