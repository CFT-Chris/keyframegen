import { WebAPIKeyframe } from "../../keyframegen";
declare class Effect {
    keyframes: WebAPIKeyframe[];
    constructor(_options: EffectOptions);
}
interface EffectOptions {
}
export { Effect, EffectOptions };
