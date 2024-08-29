export declare enum Align {
    BottomLeft = "bottom-left",
    BottomRight = "bottom-right",
    TopLeft = "top-left",
    TopRight = "top-right"
}
export declare enum Format {
    Banner = "banner",
    Box = "box"
}
export declare const boolToConsentParams: (bool?: boolean | null) => "denied" | "granted" | undefined, consentParamsToBool: (param?: "granted" | "denied") => boolean | null, getConsent: () => Gtag.ConsentParams, hasKey: <T extends object>(obj: T, key: PropertyKey) => key is keyof T, isServer: () => boolean, useId: (prefix?: string) => string;
