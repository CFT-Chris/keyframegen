import BounceEasing from './bounce';
class HardBounceEasing extends BounceEasing {
    constructor() {
        super(...arguments);
        this.oscillation = (t) => Math.abs(Math.cos(this.omega * t));
    }
}
export default HardBounceEasing;
//# sourceMappingURL=hardbounce.js.map