import { gtmCode /* resetDataLayer, sanitizeObject */ } from './utils'
// import type { DataLayerObject } from './types'

export default class GTM {
  constructor({
    gtmId,
    resetDataLayer = false,
    sanitizeDataLayer = false,
    serverSideDomain = null,
    consentParams,
    defer = false,
  }: {
    gtmId: string
    resetDataLayer?: boolean
    sanitizeDataLayer?: boolean
    serverSideDomain?: string | null
    consentParams: Gtag.ConsentParams
    defer?: boolean
  }) {
    this.gtmId = gtmId ? gtmId.trim() : null
    this.resetDataLayer = !!resetDataLayer
    this.sanitizeDataLayer = !!sanitizeDataLayer
    this.serverSideDomain = serverSideDomain ? serverSideDomain.trim() : null
    this.defer = !!defer

    this.consentParams = consentParams

    if (!window.gtag) {
      window.gtag = function () {
        window.dataLayer = window.dataLayer || []
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.dataLayer.push(arguments) // eslint-disable-line
      }
    }
  }

  private _initialized = false

  public gtmId: string | null = null
  public resetDataLayer = false
  public sanitizeDataLayer = false
  public serverSideDomain: string | null = null
  public defer = false
  public consentParams

  public initialize() {
    if (this._initialized) {
      console.warn('Google Tag Manager is already loaded')
      return
    }
    if (!this.gtmId) {
      console.error('No Google Tag Manager ID was assigned')
      return
    }

    const isAlreadyLoaded = document.getElementById('gtm-snippet')

    if (
      !(
        isAlreadyLoaded &&
        'src' in isAlreadyLoaded &&
        typeof isAlreadyLoaded.src === 'string' &&
        isAlreadyLoaded.src.includes(`id=${this.gtmId}`)
      )
    ) {
      const script = document.createElement('script'),
        innerHTML = gtmCode(
          this.gtmId,
          this.defer,
          this.serverSideDomain
            ? this.serverSideDomain.replace(/http(|s):\/\/|\/$/g, '')
            : 'www.googletagmanager.com'
        )

      script.innerHTML = innerHTML
      document.head.appendChild(script)

      gtag('consent', 'default', this.consentParams)

      this._initialized = true
    }
  }

  public updateConsent({
    consentParams,
  }: {
    consentParams: Gtag.ConsentParams
  }) {
    try {
      window.gtag('consent', 'update', consentParams)
    } catch (err) {
      console.error(err)
    }
  }

  // public dataLayerPush(obj: DataLayerObject, reset = false) {
  //   window.dataLayer = window.dataLayer || []
  //   if (this.sanitizeDataLayer) {
  //     sanitizeObject(obj)
  //   }
  //   window.dataLayer.push(obj)
  //   if (reset || this.resetDataLayer) {
  //     this._reset(JSON.parse(JSON.stringify(obj)))
  //   }
  // }

  // private _reset(obj: DataLayerObject) {
  //   window.dataLayer = window.dataLayer || []
  //   if (resetDataLayer(obj)) {
  //     window.dataLayer.push(obj)
  //   }
  // }
}
