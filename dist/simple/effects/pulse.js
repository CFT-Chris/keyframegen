import { Effect } from ".";
class Pulse extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ scaleAtRest: 1, scaleShrink: 0.73 }, options);
        this.keyframes = [
            { offset: 0, transform: `scale(${options.scaleAtRest})` },
            { offset: 0.5, transform: `scale(${options.scaleShrink})` },
            { offset: 1, transform: `scale(${options.scaleAtRest})` }
        ];
    }
}
export { Pulse };
//# sourceMappingURL=pulse.js.map