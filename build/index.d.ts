declare let settings: string;
declare namespace customize {
    let header: string;
    let label: string;
    let text: string;
    let retargeting: string;
    let link: string;
}
declare let miniGDPR: string;
declare let accept: string;
declare let acceptAll: string;
declare let decline: string;
declare let close: string;
declare let save: string;
declare namespace functional {
    let label_1: string;
    export { label_1 as label };
}
declare namespace statistical {
    let label_2: string;
    export { label_2 as label };
}
declare namespace marketing {
    let label_3: string;
    export { label_3 as label };
}
declare let policyUrl: string;


declare const export_default: {
  settings: typeof settings;
  customize: typeof customize;
  miniGDPR: typeof miniGDPR;
  accept: typeof accept;
  acceptAll: typeof acceptAll;
  decline: typeof decline;
  close: typeof close;
  save: typeof save;
  functional: typeof functional;
  statistical: typeof statistical;
  marketing: typeof marketing;
  policyUrl: typeof policyUrl;
};

type Text = typeof export_default;
interface DataLayerObject {
    event: DataLayerEventName;
    eventData?: EventData;
    pageData?: PageData;
    userData?: UserData;
}
interface UserData {
    userId?: string;
}
interface EventData {
    action: string;
    category: string;
    label?: string;
    nonInteraction?: boolean;
    value?: number;
}
interface PageData {
    path: string;
}
type DataLayerEventName = 'customUser' | 'customEvent' | 'customPage' | 'customEcommerce';
declare global {
    interface Window {
        addGDPRConsent?: (func: () => void) => void;
        dataLayer?: DataLayerObject[];
        google_tag_data?: unknown;
    }
    interface HTMLElementTagNameMap {
        'dotlottie-player': AMCookies;
    }
    function amCookies(): AMCookies;
    namespace JSX {
        interface IntrinsicElements {
            'am-cookies': AMCookies;
        }
    }
}

declare abstract class PropertyCallbackElement extends HTMLElement {
    constructor();
    connectedCallback(): Promise<void>;
    propertyChangedCallback(_name: string, _oldValue: unknown, _value: unknown): void;
}

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

interface Props {
    disabled?: boolean;
    label?: string;
    name: string;
    value: boolean;
}
declare function switchButton(this: AMCookies, { disabled, label, name, value, }: Props): string;

declare function getStyles(): Promise<CSSStyleSheet>;
declare class AMCookies extends PropertyCallbackElement {
    static get observedProperties(): string[];
    static get styles(): typeof getStyles;
    allowRetargeting: boolean | null;
    allowStatistical: boolean | null;
    hasRetargeting: boolean;
    isCustomize: boolean | null;
    isSaving: boolean;
    isVisible: boolean;
    shadow: undefined | ShadowRoot;
    switchButton: typeof switchButton;
    template: HTMLTemplateElement;
    set accentColor(value: string);
    get accentColor(): string;
    set alignMiniPrompt(value: Align);
    get alignMiniPrompt(): Align;
    set alignPrompt(value: Align);
    get alignPrompt(): Align;
    set backgroundColor(value: string);
    get backgroundColor(): string;
    set borderWidth(value: number);
    get borderWidth(): number;
    set color(value: string);
    get color(): string;
    set fontFamily(value: string);
    get fontFamily(): string;
    set format(value: Format);
    get format(): Format;
    set googleID(value: string | null);
    get googleID(): string | null;
    set metaPixelID(value: string | null);
    get metaPixelID(): string | null;
    set privacyPolicyURL(value: string | null);
    get privacyPolicyURL(): string | null;
    set snapChatPixelID(value: string | null);
    get snapChatPixelID(): string | null;
    set tiktokPixelID(value: string | null);
    get tiktokPixelID(): string | null;
    protected gdprContainer: null | HTMLSlotElement;
    private _consentListeners;
    private _cookieWarning;
    private _gTag?;
    private _gtm?;
    private _meta?;
    private _miniGDPR;
    private _popUp;
    private _scrollPos;
    private _snapChat?;
    private _text?;
    private _tikTok?;
    constructor();
    acceptAll(): void;
    connectedCallback(): Promise<void>;
    declineAll(): void;
    disconnectedCallback(): void;
    esc({ key }: KeyboardEvent): void;
    getText(): {
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
    handleChange({ target }: Event, component: AMCookies): void;
    hideOnScroll(): void;
    propertyChangedCallback(name: string, _oldValue: unknown, value: unknown): void;
    save(): void;
    setCustomize(value: boolean): void;
    setText(text: Text): void;
    setVisible(): void;
    protected render(): Promise<void>;
    private _addEventListeners;
    private _debug;
    private _removeEventListeners;
}

declare const tagName = "am-cookies";

export { AMCookies as default, tagName };
