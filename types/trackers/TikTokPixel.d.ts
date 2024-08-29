export default class TikTokPixel {
    constructor({ tiktokPixelID }: {
        tiktokPixelID: string;
    });
    private _initialized;
    initialize(): void;
    tiktokPixelID: string;
}
