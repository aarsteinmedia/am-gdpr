import type { Plugin } from '@custom-elements-manifest/analyzer';
import type AMCookies from './elements/AMCookies';
import text from '@/i18n/en.json';
export type Text = typeof text;
export interface DataLayerObject {
    event: DataLayerEventName;
    userData?: UserData;
    eventData?: EventData;
    pageData?: PageData;
}
interface UserData {
    userId?: string;
}
interface EventData {
    category: string;
    action: string;
    label?: string;
    value?: number;
    nonInteraction?: boolean;
}
interface PageData {
    path: string;
}
export interface CEMConfig {
    catalyst: boolean;
    dependencies: boolean;
    dev: boolean;
    exclude: string[];
    fast: boolean;
    globs: ['src/**/*.ts'];
    litelement: boolean;
    outdir: string;
    packagejson: boolean;
    stencil: boolean;
    watch: boolean;
    plugins: Array<() => Plugin>;
    overrideModuleCreation({ globs, ts, }: {
        ts: unknown;
        globs: string[];
    }): unknown[];
}
export type DataLayerEventName = 'customUser' | 'customEvent' | 'customPage' | 'customEcommerce';
declare global {
    interface Window {
        addGDPRConsent?: (func: () => void) => void;
        google_tag_data?: unknown;
        dataLayer?: DataLayerObject[];
    }
    interface HTMLElementTagNameMap {
        'dotlottie-player': AMCookies;
    }
    function amCookies(): AMCookies;
    namespace JSX {
        interface IntrinsicElements {
            'am-cookies': AMCookies;
        }
    }
}
export {};
