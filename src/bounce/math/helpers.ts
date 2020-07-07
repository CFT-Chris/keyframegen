class MathHelpers {
  constructor() {
    // No-op
  }

  sign(value: number): number {
    return(value < 0
      ? -1
      : 1  
    );
  }

  /**
   * Find the turning points in a curve defined
   * by the given set of values
   */
  findTurningPoints(values: number[]): number[] {
    const turningPoints = [];
    let signA, signB;

    for (let i = 0; i < values.length - 1; i++) {
      signA = this.sign(values[i] - values[i - 1]);
      signB = this.sign(values[i + 1] - values[i]);

      if (signA !== signB)
        turningPoints.push(i);
    }

    return(turningPoints);
  }

  /**
   * Calculate the area between a curve defined
   * by a list of values, and a line between a given
   * start and end point on that curve.
   */
  areaBetweenLineAndCurve(values: number[], start: number, end: number): number {
    const length = end - start;
    const yStart = values[start];
    const yEnd = values[end];
    let area = 0;
    let curveValue, lineValue;

    for (let i = 0; i <= length; i++) {
      curveValue = values[start + i];
      lineValue = yStart + (i / length) * (yEnd - yStart);

      area += Math.abs(lineValue - curveValue);
    }

    return(area);
  }
}

export default new MathHelpers;