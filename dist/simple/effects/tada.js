import { Effect } from ".";
class Tada extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ degreesAtRest: 0, degreesTwist: 4, scaleGrow: 1.1, scaleShrink: 0.95 }, options);
        this.keyframes = [
            { offset: 0, transform: `scale(1) rotate(${options.degreesAtRest}deg)` },
            { offset: 0.1, transform: `scale(${options.scaleShrink}) rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
            { offset: 0.2, transform: `scale(${options.scaleShrink}) rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
            { offset: 0.3, transform: `scale(${options.scaleGrow}) rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
            { offset: 0.4, transform: `scale(${options.scaleGrow}) rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
            { offset: 0.5, transform: `scale(${options.scaleGrow}) rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
            { offset: 0.6, transform: `scale(${options.scaleGrow}) rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
            { offset: 0.7, transform: `scale(${options.scaleGrow}) rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
            { offset: 0.8, transform: `scale(1) rotate(${options.degreesAtRest}deg)` },
            { offset: 1, transform: `scale(1) rotate(${options.degreesAtRest}deg)` }
        ];
    }
}
export { Tada };
//# sourceMappingURL=tada.js.map