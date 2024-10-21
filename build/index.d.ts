import text from '@/i18n/en.json';

declare function switchButton(this: AMGDPR, { disabled, label, name, value, }: {
    disabled?: boolean;
    name: string;
    label?: string;
    value: boolean;
}): string;

declare enum Align {
    BottomLeft = "bottom-left",
    BottomRight = "bottom-right",
    TopLeft = "top-left",
    TopRight = "top-right"
}
declare enum Format {
    Banner = "banner",
    Box = "box"
}

type Text = typeof text;
interface DataLayerObject {
    event: DataLayerEventName;
    userData?: UserData;
    eventData?: EventData;
    pageData?: PageData;
}
interface UserData {
    userId?: string;
}
interface EventData {
    category: string;
    action: string;
    label?: string;
    value?: number;
    nonInteraction?: boolean;
}
interface PageData {
    path: string;
}
type DataLayerEventName = 'customUser' | 'customEvent' | 'customPage' | 'customEcommerce';
declare global {
    interface Window {
        addGDPRConsent?: (func: () => void) => void;
        google_tag_data?: unknown;
        dataLayer?: DataLayerObject[];
    }
}

declare class EnhancedElement extends HTMLElement {
    constructor();
    connectedCallback(): void;
}

declare class AMGDPR extends EnhancedElement {
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    shadow: ShadowRoot;
    template: HTMLTemplateElement;
    static get observedProperties(): string[];
    propertyChangedCallback(name: string, _oldValue: unknown, value: unknown): void;
    set googleID(value: string | null);
    get googleID(): string | null;
    set metaPixelID(value: string | null);
    get metaPixelID(): string | null;
    set snapChatPixelID(value: string | null);
    get snapChatPixelID(): string | null;
    set tiktokPixelID(value: string | null);
    get tiktokPixelID(): string | null;
    set color(value: string);
    get color(): string;
    set backgroundColor(value: string);
    get backgroundColor(): string;
    set accentColor(value: string);
    get accentColor(): string;
    set fontFamily(value: string);
    get fontFamily(): string;
    set borderWidth(value: number);
    get borderWidth(): number;
    set alignPrompt(value: Align);
    get alignPrompt(): Align;
    set alignMiniPrompt(value: Align);
    get alignMiniPrompt(): Align;
    set format(value: Format);
    get format(): Format;
    set text(value: Text | null);
    get text(): Text | null;
    set privacyPolicyURL(value: string | null);
    get privacyPolicyURL(): string | null;
    allowStatistical: boolean | null;
    allowRetargeting: boolean | null;
    isVisible: boolean;
    isCustomize: boolean | null;
    isSaving: boolean;
    protected gdprContainer: null | HTMLSlotElement;
    private _gtm?;
    private _gTag?;
    private _meta?;
    private _snapChat?;
    private _tikTok?;
    private _scrollPos;
    save(): void;
    acceptAll(): void;
    declineAll(): void;
    esc({ key }: KeyboardEvent): void;
    setCustomize(value: boolean): void;
    handleChange({ target }: Event, component: AMGDPR): void;
    setVisible(): void;
    hideOnScroll(): void;
    private _consentListeners;
    hasRetargeting: boolean;
    private _popUp;
    private _cookieWarning;
    private _miniGDPR;
    switchButton: typeof switchButton;
    setText(text: Text | null): void;
    private _addEventListeners;
    private _removeEventListeners;
    static get styles(): CSSStyleSheet;
    debug(): void;
    protected render(): void;
}

declare const tagName = "am-gdpr";

export { AMGDPR as default, tagName };