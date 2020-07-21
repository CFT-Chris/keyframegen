import { Effect } from ".";
class Wrench extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ degreesAtRest: 0, degreesTwist: 24 }, options);
        this.keyframes = [
            { offset: 0, transform: `rotate(${options.degreesAtRest - options.degreesTwist / 2}deg)` },
            { offset: 0.08, transform: `rotate(${options.degreesAtRest + options.degreesTwist / 2}deg)` },
            { offset: 0.1, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
            { offset: 0.18, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
            { offset: 0.2, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
            { offset: 0.28, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
            { offset: 0.38, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
            { offset: 0.48, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
            { offset: 0.5, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
            { offset: 0.58, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
            { offset: 0.6, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
            { offset: 0.68, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
            { offset: 0.75, transform: `rotate(${options.degreesAtRest}deg)` },
            { offset: 1.0, transform: `rotate(${options.degreesAtRest}deg)` }
        ];
    }
}
export { Wrench };
//# sourceMappingURL=wrench.js.map