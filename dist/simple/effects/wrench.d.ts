import { Effect, EffectOptions } from ".";
declare class Wrench extends Effect {
    constructor(options: WrenchOptions);
}
interface WrenchOptions extends EffectOptions {
}
export { Wrench, WrenchOptions };
