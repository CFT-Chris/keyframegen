import { Effect } from ".";
class Flashing extends Effect {
    constructor(options = {}) {
        super(options);
        options = Object.assign({}, options);
        this.keyframes = [
            { offset: 0, opacity: 1 },
            { offset: 0.25, opacity: 0 },
            { offset: 0.5, opacity: 1 },
            { offset: 0.75, opacity: 0 },
            { offset: 1, opacity: 1 }
        ];
    }
}
export { Flashing };
//# sourceMappingURL=flashing.js.map