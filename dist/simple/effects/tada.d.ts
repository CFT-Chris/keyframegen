import { Effect, EffectOptions } from ".";
declare class Tada extends Effect {
    constructor(options?: TadaOptions);
}
interface TadaOptions extends EffectOptions {
    degreesAtRest?: number;
    degreesTwist?: number;
    scaleGrow?: number;
    scaleShrink?: number;
}
export { Tada, TadaOptions };
