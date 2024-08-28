import Cookies from 'js-cookie'
import styles from './styles/index.scss'
import EnhancedElement from './observeProperties'
import getTranslation from './i18n'
import GTM from './GTM'
import GTag from './GTag'
import miniGDPR from './miniGDPR'
import popUp from './popUp'
import cookieWarning from './cookieWarning'
import switchButton from './switchButton'
import type { Text } from './types'
import { isServer } from './utils'
import icon from './icon'
import loading from './loading'

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

    this.allowStatistical = this._consentParamsToBool(
      this._getConsent().analytics_storage
    )
    this.allowRetargeting = this._consentParamsToBool(
      this._getConsent().ad_storage
    )

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

    if (this.trackingID?.startsWith('GTM-')) {
      this._gtm = new GTM({
        gtmId: this.trackingID,
        consentParams: this._getConsent(),
      })
    } else if (this.trackingID?.startsWith('G-')) {
      this._gTag = new GTag({
        trackingID: this.trackingID,
        consentParams: this._getConsent(),
      })
    }

    this._gtm?.initialize()
    this._gTag?.initialize()

    if (!this._gtm && !this._gTag) {
      console.warn('No tracking is enabled')
    }

    window.addGDPRConsent = (callback: () => void) => {
      this._consentListeners.push(callback)
    }

    const sheet = this.shadowRoot?.adoptedStyleSheets[0]

    setTimeout(() => {
      sheet?.insertRule(/* CSS */ `
        :host{
          --border-width: ${this.borderWidth}px;
          --font-family: ${this.fontFamily};
          --color: ${this.color};
          --background-color: ${this.backgroundColor};
          --accent-color: ${this.accentColor};
        }`)
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
   * Tracking ID
   */
  set trackingID(value: string | null) {
    this.setAttribute('trackingID', value || '')
  }
  get trackingID() {
    return this.getAttribute('trackingID')
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
   * Replace default text
   */
  set text(value: Text | null) {
    this.setText(value)
    this.setAttribute('text', JSON.stringify(value))
  }
  get text() {
    const val: Text | null = JSON.parse(this.getAttribute('text') || 'null')
    return val
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

  private _scrollPos = 0

  private _getConsent(): Gtag.ConsentParams {
    const cookie = Cookies.get('CookieConsent')
    if (cookie) {
      return JSON.parse(decodeURIComponent(cookie))
    }
    return {
      functionality_storage: 'granted',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_storage: 'denied',
      ad_personalization: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
      wait_for_update: 500,
    }
  }

  private _boolToConsentParams(bool?: boolean | null) {
    if (bool === undefined || bool === null) {
      return undefined
    }
    return bool ? 'granted' : 'denied'
  }

  private _consentParamsToBool(param?: 'granted' | 'denied') {
    if (param === undefined || param === null) {
      return null
    }
    return param === 'granted'
  }

  public save() {
    const consent: Gtag.ConsentParams = {
      functionality_storage: 'granted',
      analytics_storage: this._boolToConsentParams(this.allowStatistical),
      ad_user_data: this._boolToConsentParams(this.allowStatistical),
      ad_storage: this._boolToConsentParams(this.allowRetargeting),
      ad_personalization: this._boolToConsentParams(this.allowRetargeting),
      personalization_storage: this._boolToConsentParams(this.allowRetargeting),
      security_storage: 'granted',
    }

    Cookies.set('CookieConsent', encodeURIComponent(JSON.stringify(consent)), {
      sameSite: 'Lax',
      expires: 365,
      secure: process.env.NODE_ENV !== 'development',
    })

    this._gtm?.updateConsent({
      consentParams: this._getConsent(),
    })

    this._gTag?.updateConsent({
      consentParams: this._getConsent(),
    })

    for (const callback of this._consentListeners) {
      callback(consent)
    }
  }

  public acceptAll() {
    const prev = {
      statistical: this.allowStatistical,
      retargeting: this.allowRetargeting,
    }
    this.allowStatistical = true
    this.allowRetargeting = true
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
      if (name in component) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        component[name] = checked
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
      customizeText.innerHTML = text.customize.text
    }

    const customizeLink = this.shadow.querySelector('#customize-link')
    if (customizeLink instanceof HTMLElement) {
      customizeLink.innerHTML = text.customize.link.replace(
        '%URL%',
        this.privacyPolicyURL || text.policyUrl
      )
    }
  }

  private _addEventListeners() {
    document.addEventListener('keydown', this.esc, {
      passive: true,
      capture: true,
    })
    document.addEventListener('scroll', this.hideOnScroll, {
      passive: true,
      capture: true,
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
        trackingID: this.trackingID,
        customize: this.isCustomize,
        statistical: this.allowStatistical,
        retargeting: this.allowRetargeting,
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

export const tagName = 'am-gdpr'

if (!isServer()) {
  customElements.define('am-gdpr', AMGDPR)
}
