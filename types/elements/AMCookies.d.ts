import type { Text } from '../types';
import EnhancedElement from '../elements/EnhancedElement';
import { Align, Format } from '../enums';
import { switchButton } from '../templates';
export default class AMCookies extends EnhancedElement {
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