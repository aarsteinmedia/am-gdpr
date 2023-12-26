import {
  LitElement,
  type CSSResult
} from 'lit'
import {
  customElement,
  property,
  state,
  query
} from 'lit/decorators.js'
import Cookies from 'js-cookie'
import GTM from 'gtm-module'

import styles from './styles/index.scss'
import getTranslation from './i18n'
import miniGDPR from './miniGDPR'
import popUp from './popUp'
import cookieWarning from './cookieWarning'
import switchButton from './switchButton'

import type { Consent, Text } from './types'

/**
 * AM GDPR Web Component
 */
@customElement('am-gdpr')
export class AMGDPR extends LitElement {

  /**
   * Google Tag Manager ID
   */
  @property()
  gtmId!: string

  /**
   * Text color
   */
  @property()
  color?: string = '#000'

  /**
   * Background color
   */
  @property()
  backgroundColor?: string = '#FFF'

  /**
   * Accent color
   */
  @property()
  accentColor?: string = '#FFF'

  /**
   * Font family
   */
  @property()
  fontFamily?: string = '"Helvetica Neue", Helvetica, sans-serif'

  /**
   * Border width
   */
  @property({ type: Number })
  borderWidth?: number = 2

  /** Whether to include marketing/retargeting cookie */
  @property({ type: Boolean })
  hasRetargeting = false

  /**
   * Replace default text
   */
  @property({ type: Object })
  text?: Text

  @state()
  public statistical: boolean | null = null

  @state()
  public retargeting: boolean | null = null

  @query('dialog')
  protected dialog!: null | HTMLDialogElement

  @query('.dialog-inner-box')
  protected dialogInner!: null | HTMLDivElement

  @query('.miniGDPR')
  protected mini!: null | HTMLDivElement

  // @state()
  // public dialogHeight = 80

  @state()
  private _visible = false

  @state()
  public customize: boolean | null = null

  private _gtm?: GTM

  private _scrollPos = 0

  private _getConsent(): Consent | undefined {
    const cookie = Cookies.get('CookieConsent')
    if (cookie)
      return JSON.parse(decodeURIComponent(cookie))
    return
  }

  public save() {
    Cookies.set(
      'CookieConsent',
      encodeURIComponent(JSON.stringify({
        statistical: this.statistical,
        retargeting: this.retargeting
      })),
      {
        sameSite: 'lax',
        expires: 365,
        secure: process.env.NODE_ENV !== 'development'
      }
    )
  }

  public acceptAll() {
    const prev = {
      statistical: this.statistical,
      retargeting: this.retargeting
    }
    this.statistical = true
    this.retargeting = true
    setTimeout(() => {
      this._visible = false
      this.customize = false
    }, this.customize && (!prev.statistical || !prev.retargeting) ? 800 : 0)

    if (!window.dataLayer || !window.google_tag_data) {
      this._gtm?.initialize()
    }

    this.save()

    // this.debug()
  }

  public declineAll() {
    this._visible = false
    this.customize = false
    this.statistical = false
    this.retargeting = false

    // this.debug()

    if (!!window.dataLayer || !!window.google_tag_data) {
      location.reload()
    }
    this.save()
  }

  public esc({ key }: KeyboardEvent) {
    if (this.customize && key === 'Escape')
      this.setCustomize(false)
  }

  public setCustomize(value: boolean) {
    this.customize = !!value
    this._visible = !value
    this.statistical = !!this.statistical
    this.retargeting = !!this.retargeting

    if (value) {
      setTimeout(() => {
        const height = `${(this.dialogInner?.offsetHeight ?? 0) + 80}px`
        if (this.dialog)
          Object.assign(this.dialog.style, {
            minHeight: height,
            maxHeight: height
          })
      }, 10)
    }

    // this.debug()
  }

  public handleChange({ target }: Event) {
    if (target instanceof HTMLInputElement) {
      const { checked, name } = target
      if (name in this)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this[name] = checked
    }
    // this.debug()
  }

  public setVisible() {
    Cookies.remove('CookieConsent')
    this.statistical = null
    this.retargeting = null
    this._visible = !this._visible

    // this.debug()
  }

  public hideOnScroll() {
    const bcr = document.body.getBoundingClientRect()
    if (this.mini) {
      this.mini.dataset.hide =
        (bcr.top < this._scrollPos && bcr.top < -20).toString()
    }

    this._scrollPos = bcr.top
  }

  private _popUp = popUp
  private _cookieWarning = cookieWarning
  private _miniGDPR = miniGDPR
  public switchButton = switchButton

  /**
   * Return the styles for the component
   * @returns { CSSResult }
   */
  static override get styles(): CSSResult {
    return styles
  }

  // public debug() {
  //   console.log({
  //     gtmId: this.gtmId,
  //     customize: this.customize,
  //     statistical: this.statistical,
  //     retargeting: this.retargeting,
  //     visible: this._visible
  //   }, this._gtm)
  // }

  constructor() {
    super()
    this.esc = this.esc.bind(this)
    this.hideOnScroll = this.hideOnScroll.bind(this)

    // this.debug = this.debug.bind(this)
  }

  /**
   * Initialize everything on component first render
   */
  override connectedCallback() {
    super.connectedCallback()

    this.statistical = this._getConsent()?.statistical ?? null
    this.retargeting = this._getConsent()?.retargeting ?? null

    this.text = getTranslation()

    const sheet = this.shadowRoot?.adoptedStyleSheets[0]
    if (sheet) {
      sheet.insertRule(
        `
          :host {
            --border-width: ${this.borderWidth}px;
            h1,
            .h1,
            h2,
            .h2,
            h3,
            .h3 {
              font-family:${this.fontFamily};
            }
          }
        `
      )
    }

    this._gtm = new GTM({
      gtmId: this.gtmId,
    })

    if (this.statistical || this.retargeting) {
      this._gtm.initialize()
    }

    document.addEventListener('keydown', this.esc, { passive: true, capture: true })
    document.addEventListener('scroll', this.hideOnScroll, { passive: true, capture: true })

    // this.debug()
  }

  override disconnectedCallback() {
    super.disconnectedCallback()

    document.removeEventListener('keydown', this.esc)
    document.removeEventListener('scroll', this.hideOnScroll)
  }

  protected override render() {
    return !this.customize &&
      ((!this.statistical && this.statistical !== false)) ||
      !!this._visible ?

      this._cookieWarning()

      :

      !this.customize ?

      this._miniGDPR()

      :

      this._popUp()
  }
}