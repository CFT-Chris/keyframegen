import { Effect, EffectOptions } from ".";
declare class Pulse extends Effect {
    constructor(options?: PulseOptions);
}
interface PulseOptions extends EffectOptions {
    /**
     * Defaults to **1**.
     */
    scaleAtRest?: number;
    /**
     * Specifies the lower limit of the scale transform used for the pulsation effect. Defaults to **0.73**.
     */
    scaleShrink?: number;
}
export { Pulse, PulseOptions };
