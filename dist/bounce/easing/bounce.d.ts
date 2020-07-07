import { Easing, EasingOptions } from './index';
declare class BounceEasing extends Easing {
    bounces: number;
    stiffness: number;
    alpha: number;
    limit: number;
    omega: number;
    constructor(options?: EasingOptions);
    calculate(ratio: number): number;
    calculateOmega: (bounces: number, limit: number) => number;
    exponent: (t: number) => number;
    oscillation: (t: number) => number;
    serialize: () => {
        stiffness: number;
        bounces: number;
    };
}
export default BounceEasing;
