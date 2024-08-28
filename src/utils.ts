import Cookies from 'js-cookie'

export const boolToConsentParams = (bool?: boolean | null) => {
    if (bool === undefined || bool === null) {
      return undefined
    }
    return bool ? 'granted' : 'denied'
  },
  consentParamsToBool = (param?: 'granted' | 'denied') => {
    if (param === undefined || param === null) {
      return null
    }
    return param === 'granted'
  },
  getConsent = (): Gtag.ConsentParams => {
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
  },
  hasKey = <T extends object>(obj: T, key: PropertyKey): key is keyof T =>
    key in obj,
  isServer = () => !(typeof window !== 'undefined' && window.document),
  useId = (prefix?: string) => {
    const s4 = () =>
      (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    return `${prefix ?? `:${s4()}`}-${s4()}`
  }
