export default class GTag {
    constructor({ config, consentParams, googleID, }: {
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
