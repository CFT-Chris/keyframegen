import { KeyframeGenerator } from '../keyframegen';
import { Wrench } from './effects/wrench';
import { Tada } from './effects/tada';
const EffectClasses = Object.freeze({
    Wrench,
    Tada
});
class Simple extends KeyframeGenerator {
    constructor(effect, options) {
        super();
        this.effect = new EffectClasses[effect](options);
    }
    getWebAPIKeyframes(_options = {}) {
        const keyframes = [];
        this.effect.keyframes.forEach(keyframe => {
            keyframes.push(Object.assign({}, keyframe));
        });
        return (this.effect.keyframes);
    }
}
export { Simple };
//# sourceMappingURL=simple.js.map