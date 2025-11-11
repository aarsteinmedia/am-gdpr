const gtmCode = (
  gtmId: string, defer: boolean, domain: string
) =>
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.id='gtm-snippet';j.${defer ? 'defer' : 'async'}=true;j.src='https://${domain}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`
// resetDataLayer = (obj: DataLayerObject) => {
//   try {
//     if (!(obj instanceof Object)) {
//       return false
//     }
//     for (const key of Object.keys(obj)) {
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       if (obj[key] instanceof Object) {
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         resetDataLayer(obj[key] as DataLayerObject)
//         continue
//       }
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       obj[key] = null
//     }

//     return true
//   } catch (_err) {
//     console.warn('Could not reset dataLayer')
//     return false
//   }
// },
// sanitize = (str: string) =>
//   str
//     .normalize('NFD')
//     .replace(/[\u0300-\u036f]/g, '') // Replace special characters
//     .trim() // Remove whitespace around string
//     .replace(/\s/g, '-') // Replace spaces inside string
//     .replace(/\n/gm, '-') // Replace line-breaks
//     .toLowerCase(),
// sanitizeObject = (obj: object) => {
//   try {
//     for (const key of Object.keys(obj)) {
//       if (hasKey(obj, key)) {
//         if (typeof obj[key] === 'string') {
//           ;(obj[key] as string) = sanitize(obj[key])
//           continue
//         }
//         sanitizeObject(obj[key])
//       }
//     }
//   } catch (_err) {
//     console.error('Could not sanitize dataLayer properties')
//   }
// }

export default class GTM {
  public consentParams

  public defer = false

  public gtmId: string | null = null
  // public resetDataLayer = false
  /**
   * Public sanitizeDataLayer = false.
   */
  public serverSideDomain: string | null = null
  private _initialized = false
  constructor({
    consentParams,
    defer = false,
    gtmId,
    // resetDataLayer = false,
    // sanitizeDataLayer = false,
    serverSideDomain = null,
  }: {
    gtmId: string
    // resetDataLayer?: boolean
    /**
     * SanitizeDataLayer?: boolean.
     */
    serverSideDomain?: string | null
    consentParams: Gtag.ConsentParams
    defer?: boolean
  }) {
    this.gtmId = gtmId ? gtmId.trim() : null
    // this.resetDataLayer = !!resetDataLayer
    // this.sanitizeDataLayer = !!sanitizeDataLayer
    this.serverSideDomain = serverSideDomain ? serverSideDomain.trim() : null
    this.defer = defer

    this.consentParams = consentParams

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!window.gtag) {
      window.gtag = function () {
        window.dataLayer = window.dataLayer ?? []
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.dataLayer.push(arguments) // eslint-disable-line prefer-rest-params
      }
    }
  }

  public initialize() {
    gtag(
      'consent', 'default', this.consentParams
    )
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
            ? this.serverSideDomain.replaceAll(/https?:\/\/|\/$/g, '')
            : 'www.googletagmanager.com'
        )

      script.innerHTML = innerHTML
      document.head.appendChild(script)
      script.insertAdjacentHTML('beforebegin', '<!-- Google Tag Manager -->')
      script.insertAdjacentHTML('afterend', '<!-- End Google Tag Manager -->')

      this._initialized = true
    }
  }

  public updateConsent({ consentParams }: { consentParams: Gtag.ConsentParams }) {
    try {
      window.gtag(
        'consent', 'update', consentParams
      )
    } catch (error) {
      console.error(error)
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
