import { Effect } from ".";
class Vertical extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ pixels: 3 }, options);
        this.keyframes = [
            { offset: 0, transform: `translate(0, ${-options.pixels}px)` },
            { offset: 0.04, transform: `translate(0, ${options.pixels}px)` },
            { offset: 0.08, transform: `translate(0, ${-options.pixels}px)` },
            { offset: 0.12, transform: `translate(0, ${options.pixels}px)` },
            { offset: 0.16, transform: `translate(0, ${-options.pixels}px)` },
            { offset: 0.2, transform: `translate(0, ${options.pixels}px)` },
            { offset: 0.22, transform: `translate(0, 0)` },
            { offset: 1, transform: `translate(0, 0)` }
        ];
    }
}
export { Vertical };
//# sourceMappingURL=vertical.js.map