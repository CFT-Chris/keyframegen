import { Effect } from ".";
class Floating extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ pixels: -6 }, options);
        this.keyframes = [
            { offset: 0, transform: `translate(0, 0)` },
            { offset: 0.5, transform: `translate(0, ${options.pixels}px)` },
            { offset: 1, transform: `translate(0, 0)` }
        ];
    }
}
export { Floating };
//# sourceMappingURL=floating.js.map