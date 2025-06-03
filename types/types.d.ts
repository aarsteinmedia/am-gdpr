import type { Plugin } from '@custom-elements-manifest/analyzer';
import type AMCookies from './elements/AMCookies';
import type text from '@/i18n/en.json';
export type Text = typeof text;
export interface DataLayerObject {
    event: DataLayerEventName;
    eventData?: EventData;
    pageData?: PageData;
    userData?: UserData;
}
interface UserData {
    userId?: string;
}
interface EventData {
    action: string;
    category: string;
    label?: string;
    nonInteraction?: boolean;
    value?: number;
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
    overrideModuleCreation: ({ globs, ts, }: {
        ts: unknown;
        globs: string[];
    }) => unknown[];
    packagejson: boolean;
    plugins: (() => Plugin)[];
    stencil: boolean;
    watch: boolean;
}
export type DataLayerEventName = 'customUser' | 'customEvent' | 'customPage' | 'customEcommerce';
declare global {
    interface Window {
        addGDPRConsent?: (func: () => void) => void;
        dataLayer?: DataLayerObject[];
        google_tag_data?: unknown;
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
