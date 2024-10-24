import type { Plugin } from '@custom-elements-manifest/analyzer'
import type AMCookies from '@/elements/AMCookies'
import text from '@/i18n/en.json'

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

export interface CEMConfig {
  /** Enable special handling for catalyst */
  catalyst: boolean
  /** Include third party custom elements manifests */
  dependencies: boolean
  /** Run in dev mode, provides extra logging */
  dev: boolean
  /** Globs to exclude */
  exclude: string[]
  /** Enable special handling for fast */
  fast: boolean
  /** Globs to analyze */
  globs: ['src/**/*.ts']
  /** Enable special handling for litelement */
  litelement: boolean
  /** Directory to output CEM to */
  outdir: string
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: boolean
  /** Enable special handling for stencil */
  stencil: boolean
  /** Run in watch mode, runs on file changes */
  watch: boolean
  /** Provide custom plugins */
  plugins: Array<() => Plugin>
  /** Overrides default module creation: */
  overrideModuleCreation({
    globs,
    ts,
  }: {
    ts: unknown // TypeScrip
    globs: string[]
  }): unknown[] // SourceFile[]
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
  interface HTMLElementTagNameMap {
    'dotlottie-player': AMCookies
  }
  function amCookies(): AMCookies
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'am-cookies': AMCookies
    }
  }
}
