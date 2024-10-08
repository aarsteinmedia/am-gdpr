export default class GTM {
    constructor({ consentParams, defer, gtmId, serverSideDomain, }: {
        gtmId: string;
        serverSideDomain?: string | null;
        consentParams: Gtag.ConsentParams;
        defer?: boolean;
    });
    private _initialized;
    gtmId: string | null;
    serverSideDomain: string | null;
    defer: boolean;
    consentParams: Gtag.ConsentParams;
    initialize(): void;
    updateConsent({ consentParams, }: {
        consentParams: Gtag.ConsentParams;
    }): void;
}
