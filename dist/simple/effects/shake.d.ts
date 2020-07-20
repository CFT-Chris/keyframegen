import { Effect, EffectOptions } from ".";
declare class Shake extends Effect {
    private static readonly dftAngleNumerators;
    private static readonly dftAngleDenominator;
    constructor(options?: ShakeOptions);
}
interface ShakeOptions extends EffectOptions {
    degreesAtRest?: number;
    degreesTwist?: number;
}
export { Shake, ShakeOptions };
