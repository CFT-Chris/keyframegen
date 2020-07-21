import { KeyframeGenerator } from '../keyframegen';
import { Wrench } from './effects/wrench';
import { Tada } from './effects/tada';
import { Shake } from './effects/shake';
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
    constructor() {
        super();
    }
    /**
     * Sets the simple effect to use.
     * @param effect Name of the effect
     * @param options Specific effect options
     */
    set(effect, options) {
        this.effect = new Simple.EffectClasses[effect](options);
        return (this);
    }
    getWebAPIKeyframes(_options = {}) {
        const keyframes = [];
        if (this.effect) {
            this.effect.keyframes.forEach(keyframe => {
                keyframes.push(Object.assign({}, keyframe));
            });
        }
        return (keyframes);
    }
}
Simple.EffectClasses = Object.freeze({
    shake: Shake,
    tada: Tada,
    wrench: Wrench
});
export { Simple };
//# sourceMappingURL=simple.js.map