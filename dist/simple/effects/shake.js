import { Effect } from ".";
class Shake extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ degreesAtRest: 0, degreesTwist: 22 }, options);
        this.keyframes = [
            { offset: 0, transform: `rotate(${options.degreesAtRest - Shake.dftAngleNumerators[1] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
            { offset: 0.1, transform: `rotate(${options.degreesAtRest + Shake.dftAngleNumerators[1] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
            { offset: 0.2, transform: `rotate(${options.degreesAtRest - Shake.dftAngleNumerators[2] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
            { offset: 0.3, transform: `rotate(${options.degreesAtRest + Shake.dftAngleNumerators[2] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
            { offset: 0.4, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
            { offset: 0.5, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
            { offset: 0.6, transform: `rotate(${options.degreesAtRest - Shake.dftAngleNumerators[2] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
            { offset: 0.7, transform: `rotate(${options.degreesAtRest + Shake.dftAngleNumerators[2] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
            { offset: 0.8, transform: `rotate(${options.degreesAtRest - Shake.dftAngleNumerators[0] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
            { offset: 0.9, transform: `rotate(${options.degreesAtRest + Shake.dftAngleNumerators[0] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
            { offset: 1, transform: `rotate(${options.degreesAtRest})` }
        ];
    }
}
Shake.dftAngleNumerators = [12, 15, 18];
Shake.dftAngleDenominator = 22;
export { Shake };
//# sourceMappingURL=shake.js.map