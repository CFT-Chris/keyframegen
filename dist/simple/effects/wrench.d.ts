import { Effect, EffectOptions } from ".";
declare class Wrench extends Effect {
    constructor(options?: WrenchOptions);
}
interface WrenchOptions extends EffectOptions {
    /**
     * Specifies the rotation before and after the animation. Defaults to **0**.
     */
    degreesAtRest?: number;
    /**
     * Specifies the amount to rotate around *degreesAtRest*. Defaults to **24**.
     */
    degreesTwist?: number;
}
export { Wrench, WrenchOptions };
