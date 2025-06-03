export default class GTag {
    config: {};
    consentParams: Gtag.ConsentParams;
    googleID: string;
    private _initialized;
    constructor({ config, consentParams, googleID, }: {
        googleID: string;
        config?: Gtag.ControlParams | Gtag.EventParams | Gtag.ConfigParams | Gtag.CustomParams;
        consentParams: Gtag.ConsentParams;
    });
    initialize(): void;
    updateConsent({ consentParams }: {
        consentParams: Gtag.ConsentParams;
    }): void;
}
