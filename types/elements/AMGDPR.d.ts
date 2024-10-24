import { switchButton } from '../templates';
import { Align, Format } from '../utils';
import type { Text } from '../types';
import EnhancedElement from '../elements/EnhancedElement';
export default class AMGDPR extends EnhancedElement {
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
