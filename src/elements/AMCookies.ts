import Cookies from 'js-cookie'

import type { Text } from '@/types'

import EnhancedElement from '@/elements/helpers/EnhancedElement'
import { Align, Format } from '@/enums'
import getTranslation from '@/i18n'
import cookieWarningStyle from '@/styles/cookieWarning.css'
import defaultStyle from '@/styles/index.css'
import popUpStyle from '@/styles/popUp.css'
import switchStyle from '@/styles/switch.css'
import uiButtonStyle from '@/styles/uiButton.css'
import cookieWarning from '@/templates/cookieWarning'
import loading from '@/templates/loading'
import miniGDPR from '@/templates/miniGDPR'
import popUp from '@/templates/popUp'
import switchButton from '@/templates/switchButton'
import GTag from '@/trackers/GTag'
import GTM from '@/trackers/GTM'
import MetaPixel from '@/trackers/MetaPixel'
import SnapChatPixel from '@/trackers/SnapChatPixel'
import TikTokPixel from '@/trackers/TikTokPixel'
import {
  boolToConsentParams,
  consentParamsToBool,
  getConsent,
  isText,
} from '@/utils'

async function getStyles() {
  const styleSheet = new CSSStyleSheet(),
    styles = [
      defaultStyle,
      cookieWarningStyle,
      popUpStyle,
      switchStyle,
      uiButtonStyle,
    ].join('')

  await styleSheet.replace(styles)

  return styleSheet
}

/**
 * AM GDPR Web Component.
 */
export default class AMCookies extends EnhancedElement {
  /**
   * Properties to observe.
   */
  static get observedProperties() {
    return [
      'allowStatistical',
      'allowRetargeting',
      'isVisible',
      'isCustomize',
      'isSaving',
      '_text',
    ]
  }

  /**
   * Return the styles for the component.
   */
  static get styles() {
    return getStyles
  }

  /**
   * Allow Retargeting.
   */
  public allowRetargeting: boolean | null = null

  /**
   * Allow Statistical.
   */
  public allowStatistical: boolean | null = null
  public hasRetargeting = false

  /**
   * Customize.
   */
  public isCustomize: boolean | null = null

  /**
   * Saving.
   */
  public isSaving = false

  /**
   * Visibility.
   */
  public isVisible = false
  public shadow: undefined | ShadowRoot

  public switchButton = switchButton
  public template: HTMLTemplateElement

  /**
   * Accent color.
   */
  set accentColor(value: string) {
    this.setAttribute('accentColor', value)
  }

  get accentColor() {
    return this.getAttribute('accentColor') || '#FFF'
  }

  /**
   * Align mini GDPR prompt.
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
   * Align GDPR promt.
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
   * Background color.
   */
  set backgroundColor(value: string) {
    this.setAttribute('backgroundColor', value)
  }

  get backgroundColor() {
    return this.getAttribute('backgroundColor') || '#FFF'
  }

  /**
   * Border width.
   */
  set borderWidth(value: number) {
    this.setAttribute('borderWidth', value.toString())
  }

  get borderWidth() {
    return Number(this.getAttribute('borderWidth') ?? 2)
  }

  /**
   * Text color.
   */
  set color(value: string) {
    this.setAttribute('color', value)
  }

  get color() {
    return this.getAttribute('color') || '#000'
  }

  /**
   * Font family.
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
   * GDPR Prompt format.
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
   * Tracking ID for GTM / GTag.
   */
  set googleID(value: string | null) {
    this.setAttribute('googleID', value || '')
  }

  get googleID() {
    return this.getAttribute('googleID')
  }

  /**
   * Meta Pixel.
   */
  set metaPixelID(value: string | null) {
    this.setAttribute('metaPixelID', value || '')
  }

  get metaPixelID() {
    return this.getAttribute('metaPixelID')
  }

  /**
   * Privacy policy URL.
   */
  set privacyPolicyURL(value: string | null) {
    this.setAttribute('privacyPolicyURL', value || 'privacy')
  }

  get privacyPolicyURL() {
    return this.getAttribute('privacyPolicyURL')
  }

  /**
   * Snap Pixel.
   */
  set snapChatPixelID(value: string | null) {
    this.setAttribute('snapChatPixelID', value || '')
  }

  get snapChatPixelID() {
    return this.getAttribute('snapChatPixelID')
  }

  /**
   * TikTok Pixel.
   */
  set tiktokPixelID(value: string | null) {
    this.setAttribute('tiktokPixelID', value || '')
  }

  get tiktokPixelID() {
    return this.getAttribute('tiktokPixelID')
  }

  protected gdprContainer!: null | HTMLSlotElement

  private _consentListeners: ((val?: unknown) => void)[] = []

  private _cookieWarning = cookieWarning

  private _gTag?: GTag

  private _gtm?: GTM

  private _meta?: MetaPixel
  private _miniGDPR = miniGDPR
  private _popUp = popUp
  private _scrollPos = 0
  private _snapChat?: SnapChatPixel

  /**
   * Text object.
   */
  private _text?: Text

  private _tikTok?: TikTokPixel

  constructor() {
    super()
    this.acceptAll = this.acceptAll.bind(this)
    this.declineAll = this.declineAll.bind(this)
    this.esc = this.esc.bind(this)
    this.hideOnScroll = this.hideOnScroll.bind(this)
    this.setVisible = this.setVisible.bind(this)

    this._debug = this._debug.bind(this)

    this._text = getTranslation()

    this.template = document.createElement('template')
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  public acceptAll() {
    const prev = {
      retargeting: this.hasRetargeting ? this.allowRetargeting : false,
      statistical: this.allowStatistical,
    }

    this.allowStatistical = true
    this.allowRetargeting = this.hasRetargeting
    this.isSaving = true
    setTimeout(() => {
      this.isCustomize = false
      this.isVisible = false
      this.isSaving = false
    },
    this.isCustomize && (!prev.statistical || !prev.retargeting) ? 800 : 0)

    if (!window.dataLayer || !window.google_tag_data) {
      this._gtm?.initialize()
      this._gTag?.initialize()
    }

    this.save()

    this._debug()
  }

  /**
   * Initialize everything on component first render.
   */
  override async connectedCallback() {
    await super.connectedCallback()
    await this.render()

    this._addEventListeners()

    this.allowStatistical = consentParamsToBool(getConsent().analytics_storage)
    this.allowRetargeting = consentParamsToBool(getConsent().ad_storage)

    this.gdprContainer = this.shadow?.querySelector('#gdpr-container') ?? null

    if (
      !this.isCustomize &&
      !this.allowStatistical &&
      this.allowStatistical !== false ||
      this.isVisible ||
      !Cookies.get('CookieConsent')
    ) {
      this._cookieWarning()
    } else if (this.isCustomize) {
      this._popUp()
    } else {
      this._miniGDPR()
    }

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
        this._snapChat = new SnapChatPixel({ snapChatPixelID: this.snapChatPixelID })
        this.hasRetargeting = true
      }
      if (this.tiktokPixelID) {
        this._tikTok = new TikTokPixel({ tiktokPixelID: this.tiktokPixelID })
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
        /* CSS */ `:host{--border-width: ${this.borderWidth}px;--font-family: ${this.fontFamily};--color: ${this.color};--background-color: ${this.backgroundColor};--accent-color: ${this.accentColor};}`)
    }, 0)

    this._debug()
  }

  public declineAll() {
    this.isCustomize = false
    this.isVisible = false
    this.allowStatistical = false
    this.allowRetargeting = false

    this._debug()

    this.save()
  }

  disconnectedCallback() {
    this._removeEventListeners()
  }

  public esc({ key }: KeyboardEvent) {
    if (this.isCustomize && key === 'Escape') {
      this.setCustomize(false)
    }
  }

  /**
   * Get text.
   */
  public getText() {
    return this._text ?? getTranslation()
  }

  public handleChange({ target }: Event, component: AMCookies) {
    if (target instanceof HTMLInputElement) {
      const { checked: isChecked, name } = target

      if (
        name in component &&
        typeof component[name as keyof AMCookies] === 'boolean'
      ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        component[name as keyof AMCookies] = isChecked
      }
    }
    this._debug()
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

  override propertyChangedCallback(
    name: string, _oldValue: unknown, value: unknown
  ) {
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
        const input = this.gdprContainer.querySelector('[name="allowStatistical"]')

        if (input instanceof HTMLInputElement) {
          input.checked = Boolean(value)
        }
        break
      }
      case 'allowRetargeting': {
        const input = this.gdprContainer.querySelector('[name="allowRetargeting"]')

        if (input instanceof HTMLInputElement) {
          input.checked = Boolean(value)
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
      // If text is set dynamically initial elements must be reinitialized
      case '_text': {
        if (Cookies.get('CookieConsent')) {
          this._miniGDPR()
        } else {
          this._cookieWarning()
        }
      }
    }
  }

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

    Cookies.set(
      'CookieConsent', encodeURIComponent(JSON.stringify(consent)), {
        expires: 365,
        sameSite: 'Lax',
        secure: process.env.NODE_ENV !== 'development',
      }
    )

    this._gtm?.updateConsent({ consentParams: getConsent() })

    this._gTag?.updateConsent({ consentParams: getConsent() })

    if (this.allowRetargeting) {
      this._meta?.initialize()
      this._snapChat?.initialize()
      this._tikTok?.initialize()
    }

    for (const callback of this._consentListeners) {
      callback(consent)
    }
  }

  public setCustomize(value: boolean) {
    this.isCustomize = value
    this.isVisible = !value
    this.allowStatistical = Boolean(this.allowStatistical)
    this.allowRetargeting = Boolean(this.allowRetargeting)

    this._debug()
  }

  /**
   * Set Text.
   */
  public setText(text: Text) {
    if (!isText(text)) {
      console.warn('Invalid text object')

      return
    }
    this._text = text
  }

  public setVisible() {
    Cookies.remove('CookieConsent')
    this.allowStatistical = null
    this.allowRetargeting = null
    this.isVisible = true

    this._debug()
  }

  protected async render() {
    if (!this.shadow) {
      throw new Error('No Shadow Element')
    }

    this.template.innerHTML = '<slot id="gdpr-container"></slot>'

    const styles = await AMCookies.styles()

    this.shadow.adoptedStyleSheets = [styles]
    this.shadow.appendChild(this.template.content.cloneNode(true))
  }

  private _addEventListeners() {
    document.addEventListener(
      'keydown', this.esc, {
        capture: true,
        passive: true,
      }
    )
    document.addEventListener(
      'scroll', this.hideOnScroll, {
        capture: true,
        passive: true,
      }
    )
  }

  private _debug() {
    if (process.env.NODE_ENV !== 'development') {
      return
    }
    console.debug(
      'For developers: Current cookie values',
      {
        customize: this.isCustomize,
        googleID: this.googleID,
        retargeting: this.allowRetargeting,
        statistical: this.allowStatistical,
        visible: this.isVisible,
      },
      this._gtm ?? this._gTag
    )
  }

  private _removeEventListeners() {
    document.removeEventListener('keydown', this.esc)
    document.removeEventListener('scroll', this.hideOnScroll)
  }
}
