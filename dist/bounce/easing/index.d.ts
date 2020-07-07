declare class Easing {
    constructor();
    calculate(ratio: number): number;
    serialize: () => any;
    /**
     * Find the optimal keypoints to approximate the easing curve with
     * line segments. This is done in two steps:
     *
     *   1. Set keypoints at the start, end and turning points of the curve
     *
     *   2. For each pair of subsequent keypoints, compare the area between
     *      the curve and a straight line between these keypoints. If it is above
     *      a given threshold, insert a new keypoint in the middle of these two.
     *      This process is repeated until the area has been reduced below the
     *      threshold for all pairs of subsequent keypoints.
     */
    findOptimalKeyPoints(threshold?: number, resolution?: number): number[];
}
interface EasingOptions {
    bounces?: number;
    stiffness?: number;
}
export { Easing, EasingOptions };
