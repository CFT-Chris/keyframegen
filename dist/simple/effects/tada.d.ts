import { Effect, EffectOptions } from ".";
declare class Tada extends Effect {
    constructor(options?: TadaOptions);
}
interface TadaOptions extends EffectOptions {
    /**
     * Specifies the rotation before and after the animation. Defaults to **0**.
     */
    degreesAtRest?: number;
    /**
     * Specifies the amount to rotate around *degreesAtRest*. Defaults to **4**.
     */
    degreesTwist?: number;
    /**
     * Specifies the upper limit of the scale transform used for the pulsation effect. Defaults to **1.1**.
     */
    scaleGrow?: number;
    /**
     * Specifies the lower limit of the scale transform used for the pulsation effect. Defaults to **0.95**.
     */
    scaleShrink?: number;
}
export { Tada, TadaOptions };
