import { WebAPIKeyframe } from "../../keyframegen";
declare class Effect {
    keyframes: WebAPIKeyframe[];
    constructor(_options: EffectOptions);
}
interface EffectOptions {
    /**
     * Specify the duration in milliseconds for one animation iteration. Default: **500**
     */
    duration?: number;
}
export { Effect, EffectOptions };
