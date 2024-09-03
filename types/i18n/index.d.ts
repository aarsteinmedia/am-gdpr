export declare const languages: readonly ["en", "fr", "nb", "no"], fallbackLanguage = "en", browserLanguage: string, translation: "en" | "fr" | "nb" | "no";
export default function getTranslation(): {
    settings: string;
    customize: {
        header: string;
        label: string;
        text: string;
        retargeting: string;
        link: string;
    };
    header: string;
    miniGDPR: string;
    accept: string;
    acceptAll: string;
    decline: string;
    close: string;
    save: string;
    functional: {
        label: string;
    };
    statistical: {
        label: string;
    };
    marketing: {
        label: string;
    };
    policyUrl: string;
};
