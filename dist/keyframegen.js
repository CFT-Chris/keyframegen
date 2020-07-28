export class KeyframeGenerator {
    constructor() {
        this.unfinishedAnimations = [];
        this.duration = 0;
        // No-op
    }
    getWebAPIKeyframes(_options = {}) {
        throw new Error('Not implemented');
    }
    updateDuration(duration) {
        this.duration = duration || this.duration;
    }
    /**
     * Retrieve keyframes to embed as CSS or as an array of Animation Keyframe objects to use with
     * Web Animation API.
     * @param type Defaults to `'webapi'`
     * @param options Output options. See {@link KeyframeOptions}
     * @returns CSS or array of objects depending on the type given
     */
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
                    KeyframeGenerator.verbatimTransitions.forEach(property => {
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
    /**
     * Apply this animation to an HTML element or array of HTML elements.
     * Embeds a style element in the HTML document with the animations and keyframes,
     * and then sets the CSS of the given HTML elements to use those animations.
     * @param el
     * @param options
     * @returns Promise that resolves once the animation is completed.  Infinite animations never resolve.
     */
    applyTo(el, options = {}) {
        let elements = !Array.isArray(el)
            ? [el]
            : el;
        let prefixes;
        let css;
        this.define();
        prefixes = this.getPrefixes();
        return (new Promise(resolve => {
            const finish = () => {
                elements.forEach(element => {
                    prefixes.animation.forEach(prefix => {
                        element.style.removeProperty(`${prefix}animation`);
                    });
                });
                if (options.onComplete)
                    options.onComplete();
                resolve();
            };
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
                    const index = this.unfinishedAnimations.indexOf(finish);
                    if (index >= 0) {
                        this.unfinishedAnimations.splice(index, 1);
                        finish();
                        this.cleanup();
                    }
                }, this.duration);
            }
            this.unfinishedAnimations.push(finish);
        }));
    }
    /**
     * Stop all animations that were created with applyTo.
     */
    abort() {
        let finish;
        while (finish = this.unfinishedAnimations.shift()) {
            finish();
        }
        ;
        this.cleanup();
    }
    cleanup() {
        if (this.unfinishedAnimations.length === 0 && this.styleElement) {
            if (this.styleElement.remove)
                this.styleElement.remove();
            else if (this.styleElement.parentNode)
                this.styleElement.parentNode.removeChild(this.styleElement);
            this.styleElement = null;
        }
    }
    define(name) {
        const appendToBody = !this.styleElement;
        if (appendToBody)
            this.styleElement = document.createElement('style');
        this.name = name || KeyframeGenerator.generateName();
        this.styleElement.innerHTML = this.get('css', { name: this.name, prefix: true });
        if (appendToBody)
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
    /**
     * @returns Does the browser have CSS support for animations?
     */
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
KeyframeGenerator.verbatimTransitions = ['opacity'];
KeyframeGenerator.counter = 1;
KeyframeGenerator.generateName = () => `animation-${KeyframeGenerator.counter++}`;
//# sourceMappingURL=keyframegen.js.map