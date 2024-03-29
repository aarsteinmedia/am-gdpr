export const gtmCode = (gtmId: string, defer: boolean, domain: string) => `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.id='gtm-snippet';j.${defer ? 'defer' : 'async'}=true;j.src=\n'https://${domain}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','${gtmId}');`,

  hasKey = <T extends Object>(obj: T, key: PropertyKey): key is keyof T => {
    return key in obj
  },

  resetDataLayer = (obj: dataLayerObj) => {
    try {
      if (!(obj instanceof Object)) {
        return false
      }
      for (const key of Object.keys(obj)) {
        if (obj[key] instanceof Object) {
          resetDataLayer(obj[key] as dataLayerObj)
          continue
        }
        obj[key] = null
      }

      return true

    } catch (err) {
      console.warn('Could not reset dataLayer')
      return false
    }
  },

  sanitize = (str: string) =>
    str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Replace special characters
      .trim() // Remove whitespace around string
      .replace(/\s/g, '-') // Replace spaces inside string
      .replace(/\n/gm, '-') // Replace line-breaks
      .toLowerCase(),

  sanitizeObject = (obj: object) => {
    try {
      for (const key of Object.keys(obj)) {
        if (hasKey(obj, key)) {
          if (typeof obj[key] === 'string') {
            (obj[key] as String) = sanitize(obj[key])
            continue
          }
          sanitizeObject(obj[key])
        }
      }
    } catch (err) {
      console.error('Could not sanitize dataLayer properties')
    }
  },

  useId = (prefix?: string) => {
    const s4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (`${prefix ?? `:${s4()}`}-${s4()}`)
  }