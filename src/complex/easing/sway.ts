import BounceEasing from './bounce';

class SwayEasing extends BounceEasing {
  calculate(ratio: number): number {
    if (ratio >= 1)
      return 0;

    const t = ratio * this.limit;
    return(this.exponent(t) * this.oscillation(t));
  }

  calculateOmega = (bounces: number, limit: number): number => (bounces * Math.PI / limit);
  oscillation = (t: number): number => Math.sin(this.omega * t);
}

export default SwayEasing;