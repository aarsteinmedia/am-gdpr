export default class MetaPixel {
  public locale: string

  public metaPixelID: string

  private _initialized = false

  constructor({
    locale = 'en_US',
    metaPixelID,
  }: {
    metaPixelID: string
    locale?: string
  }) {
    this.metaPixelID = metaPixelID
    this.locale = locale.replaceAll('-', '_')
  }

  public initialize() {
    const scriptID = 'meta-pixel'

    if (document.getElementById(scriptID) || this._initialized) {
      return
    }

    try {
      if (!this.metaPixelID) {
        throw new Error('No Meta Pixel ID was assigned')
      }

      const script = document.createElement('script')

      script.id = scriptID

      script.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/${this.locale}/fbevents.js');fbq('init', '${this.metaPixelID}');fbq('track', 'PageView');`

      document.head.appendChild(script)
      script.insertAdjacentHTML('beforebegin', '<!-- Meta Pixel Code -->')
      script.insertAdjacentHTML('afterend', '<!-- End Meta Pixel Code -->')
    } catch (error) {
      console.error(error)
    }
  }
}
