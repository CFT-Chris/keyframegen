import { Effect, EffectOptions } from ".";
declare class LaunchRight extends Effect {
    constructor(options?: LaunchRightOptions);
}
interface LaunchRightOptions extends EffectOptions {
    /**
     * Specifies the upper limit of the scale transform prior to launch. Defaults to **1.1**.
     */
    scaleGrow?: number;
}
export { LaunchRight, LaunchRightOptions };
