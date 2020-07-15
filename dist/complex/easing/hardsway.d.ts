import SwayEasing from './sway';
declare class HardSwayEasing extends SwayEasing {
    oscillation: (t: number) => number;
}
export default HardSwayEasing;
