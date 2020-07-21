import { Effect, EffectOptions } from ".";
declare class LaunchUp extends Effect {
    constructor(options?: LaunchUpOptions);
}
interface LaunchUpOptions extends EffectOptions {
    /**
     * Specifies the upper limit of the scale transform prior to launch. Defaults to **1.1**.
     */
    scaleGrow?: number;
}
export { LaunchUp, LaunchUpOptions };
