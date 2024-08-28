export default class GTag {
  constructor({
    trackingID,
    config = {},
    consentParams,
  }: {
    trackingID: string
    config?:
      | Gtag.ControlParams
      | Gtag.EventParams
      | Gtag.ConfigParams
      | Gtag.CustomParams
    consentParams: Gtag.ConsentParams
  }) {
    this.trackingID = trackingID
    this.config = config
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

  public initialize() {
    const scriptId = 'ga-gtag'

    if (document.getElementById(scriptId) || this._initialized) {
      return
    }

    try {
      if (!this.trackingID) {
        throw new Error('No Google Tag ID was assigned')
      }

      const script = document.createElement('script')
      script.id = scriptId
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingID}`
      document.head.appendChild(script)
      script.insertAdjacentHTML('beforebegin', '<!-- Google Analytics -->')
      script.insertAdjacentHTML('afterend', '<!-- End Google Analytics -->')

      gtag('js', new Date())
      gtag('config', this.trackingID, this.config)
      gtag('consent', 'default', this.consentParams)

      this._initialized = true
    } catch (err) {
      console.error(err)
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

  public trackingID: string
  public config = {}
  public consentParams
}
