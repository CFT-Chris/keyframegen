declare class MathHelpers {
    constructor();
    sign(value: number): number;
    /**
     * Find the turning points in a curve defined
     * by the given set of values
     */
    findTurningPoints(values: number[]): number[];
    /**
     * Calculate the area between a curve defined
     * by a list of values, and a line between a given
     * start and end point on that curve.
     */
    areaBetweenLineAndCurve(values: number[], start: number, end: number): number;
}
declare const _default: MathHelpers;
export default _default;
