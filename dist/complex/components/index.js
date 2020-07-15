import Matrix4D from '../math/matrix4d';
import EasingBounce from '../easing/bounce';
import SwayEasing from '../easing/sway';
import HardBounce from '../easing/hardbounce';
import HardSwayEasing from '../easing/hardsway';
const EasingClasses = {
    bounce: EasingBounce,
    sway: SwayEasing,
    hardbounce: HardBounce,
    hardsway: HardSwayEasing
};
class Component {
    constructor(options = {}) {
        this.easing = 'bounce';
        this.duration = 1000;
        this.delay = 0;
        this.from = null;
        this.to = null;
        this.getMatrix = (_x, _y) => new Matrix4D().identity();
        this.getEasedMatrix = (_ratio) => this.getMatrix();
        this.serialize = () => Object.assign({
            type: this.constructor.name.toLowerCase(),
            easing: this.easing,
            duration: this.duration,
            delay: this.delay,
            from: this.from,
            to: this.to
        }, this.easingObject.serialize());
        Object.assign(this, options);
        this.easingObject = new EasingClasses[this.easing](options);
    }
    calculateEase(ratio) {
        return (this.easingObject.calculate(ratio));
    }
}
export { Component };
//# sourceMappingURL=index.js.map