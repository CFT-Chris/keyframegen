export class KeyframeGenerator {
    constructor() {
        this.duration = 0;
        // No-op
    }
    getWebAPIKeyframes(_options = {}) {
        throw new Error('Not implemented');
    }
    updateDuration(duration) {
        this.duration = duration || this.duration;
    }
    remove() {
        if (this.styleElement) {
            if (this.styleElement.remove)
                this.styleElement.remove();
            else if (this.styleElement.parentNode)
                this.styleElement.parentNode.removeChild(this.styleElement);
        }
    }
    get(type, options = {}) {
        let ret = null;
        const keyframes = this.getWebAPIKeyframes(options);
        this.name = options.name || KeyframeGenerator.generateName();
        if (options.transformSuffix) {
            keyframes.forEach(keyframe => {
                if ('transform' in keyframe)
                    keyframe.transform += ` ${options.transformSuffix}`;
            });
        }
        switch (type) {
            case 'css': {
                const prefixes = options.prefix || options.forcePrefix
                    ? this.getPrefixes(options.forcePrefix)
                    : {
                        transform: [''],
                        animation: ['']
                    };
                const keyframeList = [];
                let transformString, transforms, transitions, animations;
                keyframes.forEach((keyframe) => {
                    transformString = keyframe.transform;
                    transforms = [];
                    transitions = [];
                    if (transformString) {
                        prefixes.transform.forEach(prefix => {
                            transforms.push(`${prefix}transform: ${transformString};`);
                        });
                    }
                    if (transforms.length > 0)
                        transitions.push(transforms.join(' '));
                    verbatimTransitions.forEach(property => {
                        if (property in keyframe)
                            transitions.push(`${property}: ${keyframe[property]};`);
                    });
                    if (transitions.length > 0)
                        keyframeList.push(`${Math.round(keyframe.offset * 100 * 100) / 100}% { ${transitions.join(' ')} }`);
                });
                animations = [];
                prefixes.animation.forEach(prefix => {
                    animations.push(`@${prefix}keyframes ${this.name} { \n  ${keyframeList.join('\n  ')} \n}`);
                });
                ret = animations.join('\n\n');
                break;
            }
            case 'webapi':
            default:
                ret = keyframes;
                break;
        }
        return (ret);
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
    define(name) {
        this.name = name || KeyframeGenerator.generateName();
        this.styleElement = document.createElement('style');
        this.styleElement.innerHTML = this.get('css', { name: this.name, prefix: true });
        document.body.appendChild(this.styleElement);
        return (this);
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
KeyframeGenerator.counter = 1;
KeyframeGenerator.generateName = () => `animation-${KeyframeGenerator.counter++}`;
const verbatimTransitions = ['opacity'];
//# sourceMappingURL=keyframegen.js.map