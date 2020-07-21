import { Effect, EffectOptions } from ".";
declare class Ringing extends Effect {
    private static readonly dftAngleNumerators;
    private static readonly dftAngleDenominator;
    constructor(options?: RingingOptions);
}
interface RingingOptions extends EffectOptions {
    /**
     * Specifies the rotation before and after the animation. Defaults to **0**.
     */
    degreesAtRest?: number;
    /**
     * Specifies the amount to rotate around *degreesAtRest*. Defaults to **22**.
     */
    degreesTwist?: number;
}
export { Ringing, RingingOptions };
