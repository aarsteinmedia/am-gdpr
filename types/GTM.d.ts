export default class GTM {
    constructor({ gtmId, resetDataLayer, sanitizeDataLayer, serverSideDomain, consentParams, defer, }: {
        gtmId: string;
        resetDataLayer?: boolean;
        sanitizeDataLayer?: boolean;
        serverSideDomain?: string | null;
        consentParams: Gtag.ConsentParams;
        defer?: boolean;
    });
    private _initialized;
    gtmId: string | null;
    resetDataLayer: boolean;
    sanitizeDataLayer: boolean;
    serverSideDomain: string | null;
    defer: boolean;
    consentParams: Gtag.ConsentParams;
    initialize(): void;
    updateConsent({ consentParams, }: {
        consentParams: Gtag.ConsentParams;
    }): void;
}
