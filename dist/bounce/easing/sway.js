import BounceEasing from './bounce';
class SwayEasing extends BounceEasing {
    constructor() {
        super(...arguments);
        this.calculateOmega = (bounces, limit) => (bounces * Math.PI / limit);
        this.oscillation = (t) => Math.sin(this.omega * t);
    }
    calculate(ratio) {
        if (ratio >= 1)
            return 0;
        const t = ratio * this.limit;
        return (this.exponent(t) * this.oscillation(t));
    }
}
export default SwayEasing;
//# sourceMappingURL=sway.js.map