declare module '*.scss' {
  import type { CSSResult } from 'lit'
  const content: CSSResult
  export default content
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'production' | 'development' | 'debug'
  }
}

// type DataLayerObject = Record<string, unknown>[]

// interface Window {
//   addGDPRConsent?: (func: () => void) => void
//   google_tag_data?: unknown
//   dataLayer?: DataLayerObject
// }