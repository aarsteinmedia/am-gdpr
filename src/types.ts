import text from './i18n/en.json'

export type Text = typeof text

export interface Consent {
  visible?: boolean
  customize?: boolean
  analytics_storage?: boolean | null
  ad_storage?: boolean | null
  functionality_storage?: boolean
  personalization_storage?: boolean | null
  security_storage?: boolean
}
