export default class GTag {
    constructor({ trackingID, config, consentParams, }: {
        trackingID: string;
        config?: Gtag.ControlParams | Gtag.EventParams | Gtag.ConfigParams | Gtag.CustomParams;
        consentParams: Gtag.ConsentParams;
    });
    private _initialized;
    initialize(): void;
    updateConsent({ consentParams, }: {
        consentParams: Gtag.ConsentParams;
    }): void;
    trackingID: string;
    config: {};
    consentParams: Gtag.ConsentParams;
}
