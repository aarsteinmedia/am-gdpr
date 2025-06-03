import type { Plugin } from '@custom-elements-manifest/analyzer'

import type AMCookies from '@/elements/AMCookies'
import type text from '@/i18n/en.json'

export type Text = typeof text

export interface DataLayerObject {
  event: DataLayerEventName
  eventData?: EventData
  pageData?: PageData
  userData?: UserData
}

interface UserData {userId?: string}

interface EventData {
  action: string
  category: string
  label?: string
  nonInteraction?: boolean
  value?: number
}

interface PageData {path: string}

export interface CEMConfig {
  /** Enable special handling for catalyst. */
  catalyst: boolean
  /** Include third party custom elements manifests. */
  dependencies: boolean
  /** Run in dev mode, provides extra logging. */
  dev: boolean
  /** Globs to exclude. */
  exclude: string[]
  /** Enable special handling for fast. */
  fast: boolean
  /** Globs to analyze.*/
  globs: ['src/**/*.ts']
  /** Enable special handling for litelement. */
  litelement: boolean
  /** Directory to output CEM to. */
  outdir: string
  overrideModuleCreation: ({
    globs,
    ts,
  }: {
    /**
     * TypeScrip.
     */
    ts: unknown
    globs: string[]
  }) => unknown[]
  /** Output CEM path to `package.json`, defaults to true. */
  packagejson: boolean
  /** Provide custom plugins. */
  plugins: (() => Plugin)[]
  /** Enable special handling for stencil.*/
  stencil: boolean
  /** Run in watch mode, runs on file changes. */
  watch: boolean
}

export type DataLayerEventName =
  | 'customUser'
  | 'customEvent'
  | 'customPage'
  | 'customEcommerce'

declare global {
  interface Window {
    addGDPRConsent?: (func: () => void) => void
    dataLayer?: DataLayerObject[]
    google_tag_data?: unknown
  }
  interface HTMLElementTagNameMap {'dotlottie-player': AMCookies}
  function amCookies(): AMCookies
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {'am-cookies': AMCookies}
  }
}
