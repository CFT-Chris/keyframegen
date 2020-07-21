import { Effect } from ".";
class Spinner extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({}, options);
        this.keyframes = [
            { offset: 0, transform: `rotate(0deg)` },
            { offset: 1, transform: `rotate(359deg)` }
        ];
    }
}
export { Spinner };
//# sourceMappingURL=spinner.js.map