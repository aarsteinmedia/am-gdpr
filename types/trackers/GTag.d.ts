export default class GTag {
    constructor({ googleID, config, consentParams, }: {
        googleID: string;
        config?: Gtag.ControlParams | Gtag.EventParams | Gtag.ConfigParams | Gtag.CustomParams;
        consentParams: Gtag.ConsentParams;
    });
    private _initialized;
    initialize(): void;
    updateConsent({ consentParams, }: {
        consentParams: Gtag.ConsentParams;
    }): void;
    googleID: string;
    config: {};
    consentParams: Gtag.ConsentParams;
}
