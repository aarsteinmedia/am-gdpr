import Cookies from 'js-cookie'

import type { Text } from '@/types'

const _isServer = () => !(typeof window !== 'undefined' && window.document),
  s4 = () =>
    ((1 + Math.random()) * 0x10000 | 0).toString(16).slice(1)

export const boolToConsentParams = (bool?: boolean | null) => {
    if (bool === undefined || bool === null) {
      return undefined
    }

    return bool ? 'granted' : 'denied'
  },
  consentParamsToBool = (param?: null | 'granted' | 'denied') => {
    if (param === undefined || param === null) {
      return null
    }

    return param === 'granted'
  },
  getConsent = (): Gtag.ConsentParams => {
    const cookie = Cookies.get('CookieConsent')

    if (cookie) {
      return JSON.parse(decodeURIComponent(cookie)) as Gtag.ConsentParams
    }

    return {
      ad_personalization: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted',
      wait_for_update: 500,
    }
  },
  hasKey = <T extends object>(obj: T, key: PropertyKey): key is keyof T =>
    key in obj,
  isServer = _isServer(),
  isText = (text?: unknown): text is Text => {
    return !(!text ||
      typeof text !== 'object' ||
      !('settings' in text) ||
      !('customize' in text) ||
      !('header' in text))
  },
  useId = (prefix?: string) => {

    return prefix ?? `:${s4()}-${s4()}`
  }
