import Matrix4D from '../math/matrix4d';
import { Component } from './index';
class Rotate extends Component {
    constructor(options = {}) {
        super(options);
        this.from = 0;
        this.to = 90;
        this.getMatrix = (degrees) => {
            const radians = (degrees / 180) * Math.PI;
            const c = Math.cos(radians);
            const s = Math.sin(radians);
            return (new Matrix4D([
                c, -s, 0, 0,
                s, c, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ]));
        };
        this.getEasedMatrix = (ratio) => {
            const easedRatio = this.calculateEase(ratio);
            const easedAngle = this.from + this.diff * easedRatio;
            return (this.getMatrix(easedAngle));
        };
        this.from = options.from || this.from;
        this.to = options.to || this.to;
        this.diff = this.to - this.from;
    }
}
export default Rotate;
//# sourceMappingURL=rotate.js.map