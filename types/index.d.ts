import EnhancedElement from './observeProperties';
import switchButton from './switchButton';
import type { Text } from './types';
export declare class AMGDPR extends EnhancedElement {
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    shadow: ShadowRoot;
    template: HTMLTemplateElement;
    static get observedProperties(): string[];
    propertyChangedCallback(name: string, _oldValue: unknown, value: unknown): void;
    set gtmId(value: string | null);
    get gtmId(): string | null;
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
    set hasRetargeting(value: boolean);
    get hasRetargeting(): boolean;
    set text(value: Text | null);
    get text(): Text | null;
    allowStatistical: boolean | null;
    allowRetargeting: boolean | null;
    isVisible: boolean;
    isCustomize: boolean | null;
    isSaving: boolean;
    protected gdprContainer: null | HTMLSlotElement;
    private _gtm?;
    private _scrollPos;
    private _getConsent;
    private _boolToConsentParams;
    private _consentParamsToBool;
    save(): void;
    acceptAll(): void;
    declineAll(): void;
    esc({ key }: KeyboardEvent): void;
    setCustomize(value: boolean): void;
    handleChange({ target }: Event, component: AMGDPR): void;
    setVisible(): void;
    hideOnScroll(): void;
    private _consentListeners;
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
export declare const tagName = "am-gdpr";
