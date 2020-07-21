import { Effect } from ".";
class Falling extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({}, options);
        this.keyframes = [
            { offset: 0, opacity: 0, transform: 'translate(0, -50%)' },
            { offset: 0.5, opacity: 1, transform: 'translate(0, 0)' },
            { offset: 1, opacity: 0, transform: 'translate(0, 50%)' }
        ];
    }
}
export { Falling };
//# sourceMappingURL=falling.js.map