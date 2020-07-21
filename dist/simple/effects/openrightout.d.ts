import { Effect, EffectOptions } from ".";
declare class OpenRightOut extends Effect {
    constructor(options?: OpenRightOutOptions);
}
interface OpenRightOutOptions extends EffectOptions {
    /**
     * Specifies the point to rotate around. Defaults to **top right**.
     */
    transformOrigin?: string;
    /**
     * Specifies the amount to rotate. Defaults to **-110**.
     */
    degreesTwist?: number;
}
export { OpenRightOut, OpenRightOutOptions };
