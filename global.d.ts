declare module '*.scss' {
  import type { CSSResult } from 'lit'
  const content: CSSResult
  export default content
}

interface Window {
  dataLayer?: unknown[]
  google_tag_data?: unknown
}