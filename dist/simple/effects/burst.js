import { Effect } from ".";
class Burst extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ opacityStart: 0.6, scaleGrow: 1.8 }, options);
        this.keyframes = [
            { offset: 0, opacity: options.opacityStart },
            { offset: 0.5, opacity: 0, transform: `scale(${options.scaleGrow})` },
            { offset: 1, opacity: 0 }
        ];
    }
}
export { Burst };
//# sourceMappingURL=burst.js.map