import { Effect, EffectOptions } from ".";
declare class Burst extends Effect {
    constructor(options?: BurstOptions);
}
interface BurstOptions extends EffectOptions {
    /**
     * Specifies the starting opacity. Defaults to **0.6**.
     */
    opacityStart?: number;
    /**
     * Specifies the upper limit of the scale transform. Defaults to **1.8**.
     */
    scaleGrow?: number;
}
export { Burst, BurstOptions };
