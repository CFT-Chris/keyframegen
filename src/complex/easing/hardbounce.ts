import BounceEasing from './bounce';

class HardBounceEasing extends BounceEasing {
  oscillation = (t: number): number => Math.abs(Math.cos(this.omega * t));
}

export default HardBounceEasing;