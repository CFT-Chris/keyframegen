import Matrix4D from './math/Matrix4D';
import Scale from './components/scale';
import Rotate from './components/rotate';
import Translate from './components/translate';
import Skew from './components/skew';
const ComponentClasses = {
    scale: Scale,
    rotate: Rotate,
    translate: Translate,
    skew: Skew
};
class Bounce {
    constructor() {
        this.components = null;
        this.duration = 0;
        this.scale = (options) => this.addComponent(new ComponentClasses.scale(options));
        this.rotate = (options) => this.addComponent(new ComponentClasses.rotate(options));
        this.translate = (options) => this.addComponent(new ComponentClasses.translate(options));
        this.skew = (options) => this.addComponent(new ComponentClasses.skew(options));
        this.serialize = () => this.components.map(component => component.serialize());
        this.components = [];
    }
    addComponent(component) {
        this.components.push(component);
        this.updateDuration();
        return (this);
    }
    deserialize(serialized) {
        serialized.forEach(options => {
            if (ComponentClasses.hasOwnProperty(options.type))
                this.addComponent(new ComponentClasses[options.type](options));
        });
        return (this);
    }
    updateDuration() {
        this.duration = this.components
            .map(component => component.duration + component.delay)
            .reduce((a, b) => Math.max(a, b), 0);
    }
    define(name) {
        this.name = name || Bounce.generateName();
        this.styleElement = document.createElement('style');
        this.styleElement.innerHTML = this.getKeyframeCSS({ name: this.name, prefix: true });
        document.body.appendChild(this.styleElement);
        return (this);
    }
    remove() {
        if (this.styleElement) {
            if (this.styleElement.remove)
                this.styleElement.remove();
            else if (this.styleElement.parentNode)
                this.styleElement.parentNode.removeChild(this.styleElement);
        }
    }
    getPrefixes(force) {
        const prefixes = {
            transform: [''],
            animation: ['']
        };
        const style = document.createElement('dummy').style;
        if (force || (!style.transform && style.webkitTransform))
            prefixes.transform = ['-webkit-', ''];
        if (force || (!style.animation && style.webkitAnimation))
            prefixes.animation = ['-webkit-', ''];
        return (prefixes);
    }
    getKeyframeWebAPI(options = {}) {
        const keyframeList = [];
        const keyframes = this.getKeyframes(options);
        let matrix;
        this.name = name || Bounce.generateName();
        this.keys.forEach(key => {
            matrix = keyframes[key];
            keyframeList.push({
                offset: Math.round(key * 100 * 100) / 100,
                transform: `matrix3d${matrix}`
            });
        });
        return (keyframeList);
    }
    getKeyframeCSS(options = {}) {
        const prefixes = options.prefix || options.forcePrefix
            ? this.getPrefixes(options.forcePrefix)
            : {
                transform: [''],
                animation: ['']
            };
        const keyframeList = [];
        const keyframes = this.getKeyframes(options);
        let matrix, transformString, transforms, animations;
        this.name = name || Bounce.generateName();
        this.keys.forEach(key => {
            matrix = keyframes[key];
            transformString = `matrix3d${matrix}`;
            transforms = [];
            prefixes.transform.forEach(prefix => {
                transforms.push(`${prefix}transform: ${transformString};`);
            });
            keyframeList.push(`${Math.round(key * 100 * 100) / 100}% { ${transforms.join(' ')} }`);
        });
        animations = [];
        prefixes.animation.forEach(prefix => {
            animations.push(`@${prefix}keyframes ${this.name} { \n  ${keyframeList.join('\n  ')} \n}`);
        });
        return (animations.join('\n\n'));
    }
    getKeyframes({ optimized } = {}) {
        let keys = [0, 1];
        const keyframes = {};
        let matrix, currentTime, ratio;
        if (optimized) {
            this.components.forEach(component => {
                const componentKeys = component.easingObject.findOptimalKeyPoints().map(key => (key * component.duration / this.duration) + (component.delay / this.duration));
                if (component.delay)
                    componentKeys.push((component.delay / this.duration) - 0.001);
                keys = keys.concat(componentKeys);
            });
        }
        else {
            const frames = Math.round((this.duration / 1000) * Bounce.FPS);
            for (let i = 0; i <= frames; i++)
                keys.push(i / frames);
        }
        keys = keys.sort((a, b) => a - b);
        this.keys = [];
        keys.forEach(key => {
            if (!keyframes.hasOwnProperty(key)) {
                matrix = new Matrix4D().identity();
                this.components.forEach(component => {
                    currentTime = key * this.duration;
                    if ((component.delay - currentTime) < 1e-8) {
                        ratio = (key - component.delay / this.duration) / (component.duration / this.duration);
                        matrix.multiply(component.getEasedMatrix(ratio));
                    }
                });
                this.keys.push(key);
                keyframes[key] = matrix.transpose().toFixed(3);
            }
        });
        return (keyframes);
    }
    applyTo(v, options = {}) {
        const elements = !Array.isArray(v)
            ? [v]
            : v;
        let prefixes, css;
        this.define();
        prefixes = this.getPrefixes();
        return (new Promise(resolve => {
            elements.forEach(element => {
                prefixes.animation.forEach(prefix => {
                    css = [this.name, `${this.duration}ms`, 'linear', 'both'];
                    if (options.loop)
                        css.push('infinite');
                    element.style[`${prefix}animation`] = css.join(' ');
                });
            });
            if (!options.loop) {
                setTimeout(() => {
                    if (options.remove)
                        this.remove();
                    if (options.onComplete)
                        options.onComplete();
                    resolve();
                }, this.duration);
            }
        }));
    }
    static isSupported() {
        const style = document.createElement("dummy").style;
        const propertyLists = [
            ['transform', 'webkitTransform'],
            ['animation', 'webkitAnimation']
        ];
        let supported = true;
        let propertyIsSupported;
        propertyLists.forEach(propertyList => {
            propertyIsSupported = false;
            propertyList.forEach(property => {
                propertyIsSupported = propertyIsSupported || property in style;
            });
            supported = supported && propertyIsSupported;
        });
        return (supported);
    }
}
Bounce.FPS = 30;
Bounce.counter = 1;
Bounce.generateName = () => `animation-${Bounce.counter++}`;
export default Bounce;
//# sourceMappingURL=bounce.js.map