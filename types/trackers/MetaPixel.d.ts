export default class MetaPixel {
    constructor({ metaPixelID, locale, }: {
        metaPixelID: string;
        locale?: string;
    });
    private _initialized;
    initialize(): void;
    metaPixelID: string;
    locale: string;
}
