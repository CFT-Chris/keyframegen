import SwayEasing from './sway';

class HardSwayEasing extends SwayEasing {
  oscillation = (t: number): number => Math.abs(Math.sin(this.omega * t));
}

export default HardSwayEasing;
