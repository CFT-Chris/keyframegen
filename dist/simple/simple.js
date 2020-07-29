import { KeyframeGenerator } from '../keyframegen';
import { Bouncing } from './effects/bouncing';
import { Burst } from './effects/burst';
import { Falling } from './effects/falling';
import { Flashing } from './effects/flashing';
import { Floating } from './effects/floating';
import { Horizontal } from './effects/horizontal';
import { LaunchRight } from './effects/launchright';
import { LaunchUp } from './effects/launchup';
import { OpenRightOut } from './effects/openrightout';
import { Passing } from './effects/passing';
import { Pulse } from './effects/pulse';
import { Ringing } from './effects/ringing';
import { Shake } from './effects/shake';
import { Spinner } from './effects/spinner';
import { Tada } from './effects/tada';
import { Wrench } from './effects/wrench';
import { Vertical } from './effects/vertical';
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
        this.updateDuration(1000);
    }
    /**
     * Sets the simple effect to use.
     * @param effect Name of the effect
     * @param options Specific effect options
     */
    set(effect, options) {
        this.effect = new Simple.EffectClasses[effect](options);
        if ('duration' in options)
            this.updateDuration(options.duration);
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
export { Simple };
//# sourceMappingURL=simple.js.map