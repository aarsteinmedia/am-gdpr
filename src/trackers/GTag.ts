export default class GTag {
  constructor({
    googleID,
    config = {},
    consentParams,
  }: {
    googleID: string
    config?:
      | Gtag.ControlParams
      | Gtag.EventParams
      | Gtag.ConfigParams
      | Gtag.CustomParams
    consentParams: Gtag.ConsentParams
  }) {
    this.googleID = googleID
    this.config = config
    this.consentParams = consentParams

    if (!window.gtag) {
      window.gtag = function () {
        window.dataLayer = window.dataLayer || []
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.dataLayer.push(arguments) // eslint-disable-line prefer-rest-params
      }
    }
  }

  private _initialized = false

  public initialize() {
    gtag('consent', 'default', this.consentParams)

    const scriptID = 'ga-gtag'

    if (document.getElementById(scriptID) || this._initialized) {
      return
    }

    try {
      if (!this.googleID) {
        throw new Error('No Google Tag ID was assigned')
      }

      const script = document.createElement('script')
      script.id = scriptID
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.googleID}`
      document.head.appendChild(script)
      script.insertAdjacentHTML('beforebegin', '<!-- Google Analytics -->')
      script.insertAdjacentHTML('afterend', '<!-- End Google Analytics -->')

      gtag('js', new Date())
      gtag('config', this.googleID, this.config)

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

  public googleID: string
  public config = {}
  public consentParams
}
