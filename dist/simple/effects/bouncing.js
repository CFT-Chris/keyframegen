import { Effect } from ".";
class Bouncing extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ pixels: -15 }, options);
        this.keyframes = [
            { offset: 0, transform: `translate(0, 0)` },
            { offset: 0.1, transform: `translate(0, 0)` },
            { offset: 0.2, transform: `translate(0, 0)` },
            { offset: 0.4, transform: `translate(0, ${options.pixels}px)` },
            { offset: 0.5, transform: `translate(0, 0)` },
            { offset: 0.6, transform: `translate(0, ${options.pixels}px)` },
            { offset: 0.8, transform: `translate(0, 0)` },
            { offset: 1, transform: `translate(0, 0)` }
        ];
    }
}
export { Bouncing };
//# sourceMappingURL=bouncing.js.map