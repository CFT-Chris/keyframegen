import { Effect } from ".";
class OpenRightOut extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({ transformOrigin: 'top right', degreesTwist: -110 }, options);
        this.keyframes = [
            { offset: 0, opacity: 1, 'transform-origin': options.transformOrigin, transform: `rotate(0deg)`, easing: 'ease-out' },
            { offset: 1, opacity: 0, 'transform-origin': options.transformOrigin, transform: `rotate(-110deg)`, easing: 'ease-in-out' }
        ];
    }
}
export { OpenRightOut };
//# sourceMappingURL=openrightout.js.map