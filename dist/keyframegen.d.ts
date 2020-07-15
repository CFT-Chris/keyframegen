export declare class KeyframeGenerator {
    static counter: number;
    styleElement: HTMLElement;
    name: string;
    duration: number;
    constructor();
    protected getWebAPIKeyframes(_options?: KeyframeOptions): WebAPIKeyframe[];
    updateDuration(duration?: number): void;
    remove(): void;
    get(type?: KeyframeReturnType, options?: KeyframeOptions): WebAPIKeyframe[] | string;
    applyTo(v: HTMLElement | HTMLElement[], options?: ApplyToOptions): Promise<void>;
    private define;
    protected getPrefixes(force?: boolean): CSSPropPrefixes;
    protected static generateName: () => string;
    static isSupported(): boolean;
}
export interface WebAPIKeyframe {
    offset: number;
    transform?: string;
    opacity?: number | string;
}
export interface KeyframeOptions {
    name?: string;
    prefix?: boolean;
    forcePrefix?: boolean;
    optimized?: boolean;
    transformSuffix?: string;
}
interface ApplyToOptions {
    loop?: boolean;
    remove?: boolean;
    onComplete?: () => any;
}
interface CSSPropPrefixes {
    transform: string[];
    animation: string[];
}
declare type KeyframeReturnType = 'webapi' | 'css';
export {};
