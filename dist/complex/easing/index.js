import MathHelpers from '../math/helpers';
class Easing {
    constructor() {
        this.serialize = () => ({});
        // No-op
    }
    calculate(ratio) {
        return (ratio);
    }
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
    findOptimalKeyPoints(threshold = 1.0, resolution = 1000) {
        const values = Array.from(Array(resolution).keys()).map(i => this.calculate(i / resolution));
        let keyPoints = [0];
        let i = 0;
        let loops = 1000;
        let area, halfway;
        keyPoints = keyPoints.concat(MathHelpers.findTurningPoints(values));
        keyPoints.push(resolution - 1);
        while (loops--) {
            if (i === keyPoints.length - 1)
                break;
            area = MathHelpers.areaBetweenLineAndCurve(values, keyPoints[i], keyPoints[i + 1]);
            if (area <= threshold)
                i++;
            else {
                halfway = Math.round(keyPoints[i] + (keyPoints[i + 1] - keyPoints[i]) / 2);
                keyPoints.splice(i + 1, 0, halfway);
            }
        }
        if (loops === 0)
            return ([]);
        else
            return (keyPoints.map(keyPoint => keyPoint / (resolution - 1)));
    }
}
export { Easing };
//# sourceMappingURL=index.js.map