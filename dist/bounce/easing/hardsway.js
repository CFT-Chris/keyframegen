import SwayEasing from './sway';
class HardSwayEasing extends SwayEasing {
    constructor() {
        super(...arguments);
        this.oscillation = (t) => Math.abs(Math.sin(this.omega * t));
    }
}
export default HardSwayEasing;
//# sourceMappingURL=hardsway.js.map