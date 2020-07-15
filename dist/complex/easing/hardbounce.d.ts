import BounceEasing from './bounce';
declare class HardBounceEasing extends BounceEasing {
    oscillation: (t: number) => number;
}
export default HardBounceEasing;
