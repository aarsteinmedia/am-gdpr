import text from './i18n/en.json'

export type Text = typeof text

export interface DataLayerObject {
  event: DataLayerEventName
  userData?: UserData
  eventData?: EventData
  pageData?: PageData
}

interface UserData {
  userId?: string
}

interface EventData {
  category: string
  action: string
  label?: string
  value?: number
  nonInteraction?: boolean
}

interface PageData {
  path: string
}

export type DataLayerEventName =
  | 'customUser'
  | 'customEvent'
  | 'customPage'
  | 'customEcommerce'

declare global {
  interface Window {
    addGDPRConsent?: (func: () => void) => void
    google_tag_data?: unknown
    dataLayer?: DataLayerObject[]
  }
}
