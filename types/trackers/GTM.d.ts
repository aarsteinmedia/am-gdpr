export default class GTM {
    consentParams: Gtag.ConsentParams;
    defer: boolean;
    gtmId: string | null;
    serverSideDomain: string | null;
    private _initialized;
    constructor({ consentParams, defer, gtmId, serverSideDomain, }: {
        gtmId: string;
        serverSideDomain?: string | null;
        consentParams: Gtag.ConsentParams;
        defer?: boolean;
    });
    initialize(): void;
    updateConsent({ consentParams }: {
        consentParams: Gtag.ConsentParams;
    }): void;
}
