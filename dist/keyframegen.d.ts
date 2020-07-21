export declare class KeyframeGenerator {
    private static readonly verbatimTransitions;
    private static counter;
    private styleElement;
    private name;
    protected duration: number;
    constructor();
    protected getWebAPIKeyframes(_options?: KeyframeOptions): WebAPIKeyframe[];
    protected updateDuration(duration?: number): void;
    /**
     * Retrieve keyframes to embed as CSS or as an array of Animation Keyframe objects to use with
     * Web Animation API.
     * @param type Defaults to `'webapi'`
     * @param options Output options. See {@link KeyframeOptions}
     * @returns CSS or array of objects depending on the type given
     */
    get<ReturnType extends keyof KeyframeReturnTypeMap>(type?: ReturnType, options?: KeyframeOptions): KeyframeReturnTypeMap[ReturnType];
    /**
     * Apply this animation to an HTML element or array of HTML elements.
     * Embeds a style element in the HTML document with the animations and keyframes,
     * and then sets the CSS of the given HTML elements to use those animations.
     * @param el
     * @param options
     * @returns Promise that resolves once the animation is completed.  Infinite animations never resolve.
     */
    applyTo(el: HTMLElement | HTMLElement[], options?: ApplyToOptions): Promise<void>;
    private remove;
    private define;
    protected getPrefixes(force?: boolean): CSSPropPrefixes;
    protected static generateName: () => string;
    /**
     * @returns Does the browser have CSS support for animations?
     */
    static isSupported(): boolean;
}
export interface WebAPIKeyframe {
    offset: number;
    transform?: string;
    opacity?: number | string;
}
export interface KeyframeOptions {
    /**
     * Alias for CSS keyframes. Defaults to an `animation-` concatenated with an identity counter.
     */
    name?: string;
    /**
     * Include all prefixes supported by the browser (e.g. for WebKit).
     */
    prefix?: boolean;
    /**
     * Force the output to include all prefixes, even if the browser doesn't support it (e.g. for WebKit).
     */
    forcePrefix?: boolean;
    /**
     * Approximates the key points calculated for the easing function in Complex animations reducing
     * the number of returned keyframes.
     */
    optimized?: boolean;
    /**
     * Append a CSS transform clause to each keyframe (useful if you want the target element to have
     * a constant transform applied on top of the animation transforms).
     */
    transformSuffix?: string;
}
interface ApplyToOptions {
    /**
     * Play the animation infinitely.
     */
    loop?: boolean;
    /**
     * Remove the animation property from the element and CSS style element from the document
     * after the animation is done.
     */
    remove?: boolean;
    /**
     * Callback specified function after the animation is done.
     */
    onComplete?: () => any;
}
interface CSSPropPrefixes {
    transform: string[];
    animation: string[];
}
interface KeyframeReturnTypeMap {
    /**
     * Array of [Web Animation API keyframe objects](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
     */
    webapi: WebAPIKeyframe[];
    /**
     * String of [Keyframe CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
     */
    css: string;
}
export {};
