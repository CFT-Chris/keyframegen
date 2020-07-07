import BounceEasing from './bounce';
declare class SwayEasing extends BounceEasing {
    calculate(ratio: number): number;
    calculateOmega: (bounces: number, limit: number) => number;
    oscillation: (t: number) => number;
}
export default SwayEasing;
