import { Effect } from ".";
class Passing extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({}, options);
        this.keyframes = [
            { offset: 0, opacity: 0, transform: 'translate(-50%, 0)' },
            { offset: 0.5, opacity: 1, transform: 'translate(0, 0)' },
            { offset: 1, opacity: 0, transform: 'translate(50%, 0)' }
        ];
    }
}
export { Passing };
//# sourceMappingURL=passing.js.map