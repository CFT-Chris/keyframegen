import Matrix4D from '../math/matrix4d';
import { Component, ComponentOptions } from './index';
declare class Rotate extends Component {
    protected readonly componentType: string;
    from: number;
    to: number;
    diff: number;
    constructor(options?: ComponentOptions);
    getMatrix: (degrees: number) => Matrix4D;
    getEasedMatrix: (ratio: number) => Matrix4D;
}
export default Rotate;
