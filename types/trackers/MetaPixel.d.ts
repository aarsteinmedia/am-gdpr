export default class MetaPixel {
    locale: string;
    metaPixelID: string;
    private _initialized;
    constructor({ locale, metaPixelID, }: {
        metaPixelID: string;
        locale?: string;
    });
    initialize(): void;
}
