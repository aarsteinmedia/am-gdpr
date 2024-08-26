import type { DataLayerObject } from './types';
export default class GTM {
    private _initialized;
    gtmId: string | null;
    resetDataLayer: boolean;
    sanitizeDataLayer: boolean;
    serverSideDomain: string | null;
    defer: boolean;
    initialize(): void;
    dataLayerPush(obj: DataLayerObject, reset?: boolean): void;
    private _reset;
    constructor({ gtmId, resetDataLayer, sanitizeDataLayer, serverSideDomain, defer, }: {
        gtmId: string | null;
        resetDataLayer?: boolean;
        sanitizeDataLayer?: boolean;
        serverSideDomain?: string | null;
        defer?: boolean;
    });
}
