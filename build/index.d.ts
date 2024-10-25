declare function switchButton(this: AMCookies, { disabled, label, name, value, }: {
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

var settings = "Cookie Settings";
var customize = {
	header: "Your data, your choice",
	label: "Customize",
	text: "We use <strong>functional cookies</strong> for navigation, etc. In addition, we use <strong>statistical cookies</strong> to see how users interact with the website.",
	retargeting: "We also use <strong>cookies for marketing.</strong>",
	link: "See our <a href=\"/%URL%\">privacy policy</a>"
};
var header = "This website uses";
var miniGDPR = "Cookie settings";
var accept = "I understand";
var acceptAll = "Accept all";
var decline = "Only functional";
var close = "Close";
var save = "Save preferences";
var functional = {
	label: "Functional"
};
var statistical = {
	label: "Statistical"
};
var marketing = {
	label: "Marketing"
};
var policyUrl = "privacy";
var text = {
	settings: settings,
	customize: customize,
	header: header,
	miniGDPR: miniGDPR,
	accept: accept,
	acceptAll: acceptAll,
	decline: decline,
	close: close,
	save: save,
	functional: functional,
	statistical: statistical,
	marketing: marketing,
	policyUrl: policyUrl
};

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

declare class EnhancedElement extends HTMLElement {
    constructor();
    connectedCallback(): void;
}

declare class AMCookies extends EnhancedElement {
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
    set privacyPolicyURL(value: string | null);
    get privacyPolicyURL(): string | null;
    private _text?;
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
    setText(text: Text): void;
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
    handleChange({ target }: Event, component: AMCookies): void;
    setVisible(): void;
    hideOnScroll(): void;
    private _consentListeners;
    hasRetargeting: boolean;
    private _popUp;
    private _cookieWarning;
    private _miniGDPR;
    switchButton: typeof switchButton;
    private _addEventListeners;
    private _removeEventListeners;
    static get styles(): CSSStyleSheet;
    private _debug;
    protected render(): void;
}

declare const tagName = "am-cookies";

export { AMCookies as default, tagName };
