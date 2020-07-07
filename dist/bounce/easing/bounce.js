import { Easing } from './index';
class BounceEasing extends Easing {
    constructor(options = {}) {
        super();
        this.bounces = 4;
        this.stiffness = 3;
        this.calculateOmega = (bounces, limit) => ((bounces + 0.5) * Math.PI / limit);
        this.exponent = (t) => (Math.pow(Math.E, -this.alpha * t));
        this.oscillation = (t) => (Math.cos(this.omega * t));
        this.serialize = () => ({
            stiffness: this.stiffness,
            bounces: this.bounces
        });
        let threshold;
        Object.assign(this, options);
        this.alpha = this.stiffness / 100;
        threshold = 0.005 / Math.pow(10, this.stiffness);
        this.limit = Math.floor(Math.log(threshold) / -this.alpha);
        this.omega = this.calculateOmega(this.bounces, this.limit);
    }
    calculate(ratio) {
        if (ratio >= 1)
            return 1;
        const t = ratio * this.limit;
        return (1 - this.exponent(t) * this.oscillation(t));
    }
}
export default BounceEasing;
//# sourceMappingURL=bounce.js.map