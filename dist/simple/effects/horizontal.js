import { Effect } from ".";
class Horizontal extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ pixels: 3 }, options);
        this.keyframes = [
            { offset: 0, transform: `translate(${-options.pixels}px, 0)` },
            { offset: 0.04, transform: `translate(${options.pixels}px, 0)` },
            { offset: 0.08, transform: `translate(${-options.pixels}px, 0)` },
            { offset: 0.12, transform: `translate(${options.pixels}px, 0)` },
            { offset: 0.16, transform: `translate(${-options.pixels}px, 0)` },
            { offset: 0.2, transform: `translate(${options.pixels}px, 0)` },
            { offset: 0.22, transform: `translate(0, 0)` },
            { offset: 1, transform: `translate(0, 0)` }
        ];
    }
}
export { Horizontal };
//# sourceMappingURL=horizontal.js.map