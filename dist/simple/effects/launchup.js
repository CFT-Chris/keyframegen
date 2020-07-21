import { Effect } from ".";
class LaunchUp extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ scaleGrow: 1.1 }, options);
        this.keyframes = [
            { offset: 0, opacity: 1, transform: `scale(1, 1) translate(0, 0)` },
            { offset: 0.1, opacity: 1, transform: `scale(${options.scaleGrow}, ${options.scaleGrow}) translate(0, 0)` },
            { offset: 0.2, opacity: 1, transform: `scale(1, 1) translate(0, 0)` },
            { offset: 0.3, opacity: 1, transform: `scale(${options.scaleGrow}, ${options.scaleGrow}) translate(0, 0)` },
            { offset: 0.4, opacity: 1, transform: `scale(1, 1) translate(0, 0)` },
            { offset: 0.5, opacity: 1, transform: `scale(1, 1) translate(0, 0)` },
            { offset: 1, opacity: 0, transform: `scale(${options.scaleGrow}, ${options.scaleGrow}) translate(0, -900%)` }
        ];
    }
}
export { LaunchUp };
//# sourceMappingURL=launchup.js.map