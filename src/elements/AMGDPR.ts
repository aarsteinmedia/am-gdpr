import Cookies from 'js-cookie'
import getTranslation from '@/i18n'
import {
  cookieWarning,
  icon,
  loading,
  miniGDPR,
  popUp,
  switchButton,
} from '@/templates'
import {
  boolToConsentParams,
  consentParamsToBool,
  getConsent,
  Align,
  Format,
} from '@/utils'
import type { Text } from '@/types'
import styles from '@/styles/index.scss'
import EnhancedElement from '@/elements/EnhancedElement'
import { GTM, GTag, MetaPixel, SnapChatPixel, TikTokPixel } from '@/trackers'

/**
 * AM GDPR Web Component
 * @exports
 * @class AMGDPR
 * @extends { EnhancedElement }
 */
export class AMGDPR extends EnhancedElement {
  constructor() {
    super()
    this.acceptAll = this.acceptAll.bind(this)
    this.declineAll = this.declineAll.bind(this)
    this.esc = this.esc.bind(this)
    this.hideOnScroll = this.hideOnScroll.bind(this)
    this.setVisible = this.setVisible.bind(this)

    // this.debug = this.debug.bind(this)

    this.template = document.createElement('template')
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  /**
   * Initialize everything on component first render
   */
  override connectedCallback() {
    super.connectedCallback()
    this.render()

    this._addEventListeners()

    this.allowStatistical = consentParamsToBool(getConsent().analytics_storage)
    this.allowRetargeting = consentParamsToBool(getConsent().ad_storage)

    this.gdprContainer = this.shadow.querySelector('#gdpr-container')

    if (
      (!this.isCustomize &&
        !this.allowStatistical &&
        this.allowStatistical !== false) ||
      !!this.isVisible ||
      !Cookies.get('CookieConsent')
    ) {
      this._cookieWarning()
    } else if (this.isCustomize) {
      this._popUp()
    } else {
      this._miniGDPR()
    }

    this.text = getTranslation()

    if (this.googleID?.startsWith('GTM-')) {
      this._gtm = new GTM({
        consentParams: getConsent(),
        gtmId: this.googleID,
      })
      this.hasRetargeting = true
    } else if (this.googleID?.startsWith('G-')) {
      this._gTag = new GTag({
        consentParams: getConsent(),
        googleID: this.googleID,
      })
      if (this.metaPixelID) {
        this._meta = new MetaPixel({
          locale: navigator.language,
          metaPixelID: this.metaPixelID,
        })
        this.hasRetargeting = true
      }
      if (this.snapChatPixelID) {
        this._snapChat = new SnapChatPixel({
          snapChatPixelID: this.snapChatPixelID,
        })
        this.hasRetargeting = true
      }
      if (this.tiktokPixelID) {
        this._tikTok = new TikTokPixel({
          tiktokPixelID: this.tiktokPixelID,
        })
        this.hasRetargeting = true
      }
    }

    this._gtm?.initialize()
    this._gTag?.initialize()

    if (this.allowRetargeting) {
      this._meta?.initialize()
      this._snapChat?.initialize()
      this._tikTok?.initialize()
    }

    if (
      !this._gtm &&
      !this._gTag &&
      !this._meta &&
      !this._snapChat &&
      !this._tikTok
    ) {
      console.warn('No tracking is enabled')
    }

    if (this._gtm && (this._meta || this._snapChat || this._tikTok)) {
      console.warn('Consider moving tags into Google Tag Manager')
    }

    window.addGDPRConsent = (callback: () => void) => {
      this._consentListeners.push(callback)
    }

    const sheet = this.shadowRoot?.adoptedStyleSheets[0]

    setTimeout(() => {
      sheet?.insertRule(
        /* CSS */ `:host{--border-width: ${this.borderWidth}px;--font-family: ${this.fontFamily};--color: ${this.color};--background-color: ${this.backgroundColor};--accent-color: ${this.accentColor};}`
      )
    }, 0)

    this.debug()
  }

  disconnectedCallback() {
    this._removeEventListeners()
  }

  public shadow: ShadowRoot
  public template: HTMLTemplateElement

  /**
   * Properties to observe
   */
  static get observedProperties() {
    return [
      'allowStatistical',
      'allowRetargeting',
      'isVisible',
      'isCustomize',
      'isSaving',
    ]
  }

  propertyChangedCallback(name: string, _oldValue: unknown, value: unknown) {
    if (!this.shadow || !this.gdprContainer) {
      return
    }

    switch (name) {
      case 'isCustomize': {
        if (value) {
          this._popUp()
        }
        break
      }
      case 'isSaving': {
        const button = this.gdprContainer.querySelector('.accept-all')
        if (value && button instanceof HTMLButtonElement) {
          button.innerHTML = loading
        }
        break
      }
      case 'allowStatistical': {
        const input = this.gdprContainer.querySelector(
          '[name="allowStatistical"]'
        )
        if (input instanceof HTMLInputElement) {
          input.checked = !!value
        }
        break
      }
      case 'allowRetargeting': {
        const input = this.gdprContainer.querySelector(
          '[name="allowRetargeting"]'
        )
        if (input instanceof HTMLInputElement) {
          input.checked = !!value
        }
        break
      }
      case 'isVisible': {
        if (this.isCustomize) {
          break
        }
        if (value) {
          this._cookieWarning()
        } else {
          this._miniGDPR()
        }
        break
      }
    }
  }

  /**
   * Tracking ID for GTM / GTag
   */
  set googleID(value: string | null) {
    this.setAttribute('googleID', value || '')
  }
  get googleID() {
    return this.getAttribute('googleID')
  }

  /**
   * Meta Pixel
   */
  set metaPixelID(value: string | null) {
    this.setAttribute('metaPixelID', value || '')
  }
  get metaPixelID() {
    return this.getAttribute('metaPixelID')
  }

  /**
   * Snap Pixel
   */
  set snapChatPixelID(value: string | null) {
    this.setAttribute('snapChatPixelID', value || '')
  }
  get snapChatPixelID() {
    return this.getAttribute('snapChatPixelID')
  }

  /**
   * TikTok Pixel
   */
  set tiktokPixelID(value: string | null) {
    this.setAttribute('tiktokPixelID', value || '')
  }
  get tiktokPixelID() {
    return this.getAttribute('tiktokPixelID')
  }

  /**
   * Text color
   */
  set color(value: string) {
    this.setAttribute('color', value)
  }
  get color() {
    return this.getAttribute('color') || '#000'
  }

  /**
   * Background color
   */
  set backgroundColor(value: string) {
    this.setAttribute('backgroundColor', value)
  }
  get backgroundColor() {
    return this.getAttribute('backgroundColor') || '#FFF'
  }

  /**
   * Accent color
   */
  set accentColor(value: string) {
    this.setAttribute('accentColor', value)
  }
  get accentColor() {
    return this.getAttribute('accentColor') || '#FFF'
  }

  /**
   * Font family
   */
  set fontFamily(value: string) {
    this.setAttribute('fontFamily', value)
  }
  get fontFamily() {
    return (
      this.getAttribute('fontFamily') ||
      '"Helvetica Neue", Helvetica, sans-serif'
    )
  }

  /**
   * Border width
   */
  set borderWidth(value: number) {
    this.setAttribute('borderWidth', value.toString())
  }
  get borderWidth() {
    return Number(this.getAttribute('borderWidth') ?? 2)
  }

  /**
   * Align GDPR promt
   */
  set alignPrompt(value: Align) {
    this.setAttribute('alignPrompt', value)
  }
  get alignPrompt() {
    const value = this.getAttribute('alignPrompt')
    if (value && Object.values(Align).includes(value as Align)) {
      return value as Align
    }
    return Align.BottomLeft
  }

  /**
   * Align mini GDPR prompt
   */
  set alignMiniPrompt(value: Align) {
    this.setAttribute('alignMiniPrompt', value)
  }
  get alignMiniPrompt() {
    const value = this.getAttribute('alignMiniPrompt')
    if (value && Object.values(Align).includes(value as Align)) {
      return value as Align
    }
    return Align.BottomLeft
  }

  /**
   * GDPR Prompt format
   */
  set format(value: Format) {
    this.setAttribute('format', value)
  }
  get format() {
    const value = this.getAttribute('format')
    if (value && Object.values(Format).includes(value as Format)) {
      return value as Format
    }
    return Format.Box
  }

  /**
   * Replace default text
   */
  set text(value: Text | null) {
    this.setText(value)
    this.setAttribute('text', JSON.stringify(value))
  }
  get text() {
    const value: Text | null = JSON.parse(this.getAttribute('text') || 'null')
    return value
  }

  /**
   * Privacy policy URL
   */
  set privacyPolicyURL(value: string | null) {
    this.setAttribute('privacyPolicyURL', value || 'privacy')
  }
  get privacyPolicyURL() {
    return this.getAttribute('privacyPolicyURL')
  }

  /**
   * @state
   * Allow Statistical
   */
  public allowStatistical: boolean | null = null

  /**
   * @state
   * Allow Retargeting
   */
  public allowRetargeting: boolean | null = null

  /**
   * @state
   * Visibility
   */
  public isVisible = false

  /**
   * @state
   * Customize
   */
  public isCustomize: boolean | null = null

  /**
   * @state
   * Saving
   */
  public isSaving = false

  protected gdprContainer!: null | HTMLSlotElement

  private _gtm?: GTM
  private _gTag?: GTag
  private _meta?: MetaPixel
  private _snapChat?: SnapChatPixel
  private _tikTok?: TikTokPixel

  private _scrollPos = 0

  public save() {
    const consent: Gtag.ConsentParams = {
      ad_personalization: boolToConsentParams(this.allowRetargeting),
      ad_storage: boolToConsentParams(this.allowRetargeting),
      ad_user_data: boolToConsentParams(this.allowStatistical),
      analytics_storage: boolToConsentParams(this.allowStatistical),
      functionality_storage: 'granted',
      personalization_storage: boolToConsentParams(this.allowRetargeting),
      security_storage: 'granted',
    }

    Cookies.set('CookieConsent', encodeURIComponent(JSON.stringify(consent)), {
      expires: 365,
      sameSite: 'Lax',
      secure: process.env.NODE_ENV !== 'development',
    })

    this._gtm?.updateConsent({
      consentParams: getConsent(),
    })

    this._gTag?.updateConsent({
      consentParams: getConsent(),
    })

    if (this.allowRetargeting) {
      this._meta?.initialize()
      this._snapChat?.initialize()
      this._tikTok?.initialize()
    }

    for (const callback of this._consentListeners) {
      callback(consent)
    }
  }

  public acceptAll() {
    const prev = {
      retargeting: this.hasRetargeting ? this.allowRetargeting : false,
      statistical: this.allowStatistical,
    }
    this.allowStatistical = true
    this.allowRetargeting = this.hasRetargeting
    this.isSaving = true
    setTimeout(
      () => {
        this.isCustomize = false
        this.isVisible = false
        this.isSaving = false
      },
      this.isCustomize && (!prev.statistical || !prev.retargeting) ? 800 : 0
    )

    if (!window.dataLayer || !window.google_tag_data) {
      this._gtm?.initialize()
      this._gTag?.initialize()
    }

    this.save()

    this.debug()
  }

  public declineAll() {
    this.isCustomize = false
    this.isVisible = false
    this.allowStatistical = false
    this.allowRetargeting = false

    this.debug()

    if (!!window.dataLayer || !!window.google_tag_data) {
      location.reload()
    }
    this.save()
  }

  public esc({ key }: KeyboardEvent) {
    if (this.isCustomize && key === 'Escape') {
      this.setCustomize(false)
    }
  }

  public setCustomize(value: boolean) {
    this.isCustomize = !!value
    this.isVisible = !value
    this.allowStatistical = !!this.allowStatistical
    this.allowRetargeting = !!this.allowRetargeting

    this.debug()
  }

  public handleChange({ target }: Event, component: AMGDPR) {
    if (target instanceof HTMLInputElement) {
      const { checked, name } = target
      if (
        name in component &&
        typeof component[name as keyof AMGDPR] === 'boolean'
      ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        component[name as keyof AMGDPR] = checked
      }
    }
    this.debug()
  }

  public setVisible() {
    Cookies.remove('CookieConsent')
    this.allowStatistical = null
    this.allowRetargeting = null
    this.isVisible = true

    this.debug()
  }

  public hideOnScroll() {
    const bcr = document.body.getBoundingClientRect(),
      mini = this.gdprContainer?.querySelector('.mini-gdpr')
    if (!(mini instanceof HTMLButtonElement)) {
      return
    }
    mini.dataset.hide = (bcr.top < this._scrollPos && bcr.top < -20).toString()

    this._scrollPos = bcr.top
  }

  private _consentListeners: ((val?: unknown) => void)[] = []

  public hasRetargeting = false

  private _popUp = popUp
  private _cookieWarning = cookieWarning
  private _miniGDPR = miniGDPR
  public switchButton = switchButton

  public setText(text: Text | null) {
    if (!text) {
      return
    }
    const cookieWarningText = this.shadow.querySelector('#cookie-warning-text')
    if (cookieWarningText) {
      cookieWarningText.innerHTML = `${text.header} ${icon}`
    }

    const customizeLabel = this.shadow.querySelector('.customize')
    if (customizeLabel instanceof HTMLButtonElement) {
      customizeLabel.ariaLabel = text.customize.label
      customizeLabel.innerText = text.customize.label
    }

    const accept = this.shadow.querySelector('.accept')
    if (accept instanceof HTMLButtonElement) {
      accept.ariaLabel = text.accept
      accept.innerText = text.accept
    }

    const acceptAll = this.shadow.querySelector('.accept-all')
    if (acceptAll instanceof HTMLButtonElement) {
      acceptAll.ariaLabel = text.acceptAll
      acceptAll.innerText = text.acceptAll
    }

    const settings = this.shadow.querySelector('.settings')
    if (settings instanceof HTMLElement) {
      settings.ariaLabel = text.settings
    }

    const decline = this.shadow.querySelector('.decline-all')
    if (decline instanceof HTMLButtonElement) {
      decline.ariaLabel = text.decline
      decline.innerText = text.decline
    }

    const customizeHeader = this.shadow.querySelector('#customize-header')
    if (customizeHeader instanceof HTMLSlotElement) {
      customizeHeader.innerText = text.customize.header
    }

    const customizeText = this.shadow.querySelector('#customize-text')
    if (customizeText instanceof HTMLElement) {
      customizeText.innerHTML = `${text.customize.text}${
        this.hasRetargeting ? ` ${text.customize.retargeting}` : ''
      }`
    }

    const customizeLink = this.shadow.querySelector('#customize-link')
    if (customizeLink instanceof HTMLElement) {
      customizeLink.innerHTML = text.customize.link.replace(
        '%URL%',
        this.privacyPolicyURL || text.policyUrl
      )
    }

    const miniGDPR = this.shadow.querySelector('.mini-gdpr')
    if (miniGDPR instanceof HTMLButtonElement) {
      miniGDPR.ariaLabel = text.miniGDPR
    }
  }

  private _addEventListeners() {
    document.addEventListener('keydown', this.esc, {
      capture: true,
      passive: true,
    })
    document.addEventListener('scroll', this.hideOnScroll, {
      capture: true,
      passive: true,
    })
  }

  private _removeEventListeners() {
    document.removeEventListener('keydown', this.esc)
    document.removeEventListener('scroll', this.hideOnScroll)
  }

  /**
   * Return the styles for the component
   */
  static get styles() {
    const styleSheet = new CSSStyleSheet()
    styleSheet.replace(styles)
    return styleSheet
  }

  public debug() {
    if (process.env.NODE_ENV !== 'development') {
      return
    }
    console.debug(
      {
        customize: this.isCustomize,
        googleID: this.googleID,
        retargeting: this.allowRetargeting,
        statistical: this.allowStatistical,
        visible: this.isVisible,
      },
      this._gtm || this._gTag
    )
  }

  protected render() {
    this.template.innerHTML = '<slot id="gdpr-container"></slot>'

    this.shadow.adoptedStyleSheets = [AMGDPR.styles]
    this.shadow.appendChild(this.template.content.cloneNode(true))
  }
}
