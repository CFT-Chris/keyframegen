import Matrix4D from '../math/matrix4d';
import EasingBounce from '../easing/bounce';
import SwayEasing from '../easing/sway';
import HardBounce from '../easing/hardbounce';
import HardSwayEasing from '../easing/hardsway';
class Component {
    constructor(options = {}) {
        this.componentType = 'unknown';
        this.easing = 'bounce';
        this.duration = 1000;
        this.delay = 0;
        this.from = null;
        this.to = null;
        this.getMatrix = (_x, _y) => new Matrix4D().identity();
        this.getEasedMatrix = (_ratio) => this.getMatrix();
        this.serialize = () => Object.assign({
            type: this.componentType,
            easing: this.easing,
            duration: this.duration,
            delay: this.delay,
            from: this.from,
            to: this.to
        }, this.easingObject.serialize());
        this.easing = options.easing || this.easing;
        this.duration = options.duration || this.duration;
        this.delay = options.delay || this.delay;
        this.easingObject = new Component.EasingClasses[this.easing](options);
    }
    calculateEase(ratio) {
        return (this.easingObject.calculate(ratio));
    }
}
Component.EasingClasses = {
    bounce: EasingBounce,
    sway: SwayEasing,
    hardbounce: HardBounce,
    hardsway: HardSwayEasing
};
export { Component };
//# sourceMappingURL=index.js.map