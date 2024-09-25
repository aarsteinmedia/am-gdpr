export default class MetaPixel {
    constructor({ locale, metaPixelID, }: {
        metaPixelID: string;
        locale?: string;
    });
    private _initialized;
    initialize(): void;
    metaPixelID: string;
    locale: string;
}
