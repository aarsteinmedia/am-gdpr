import text from './text.json'

export type Text = typeof text

export interface Consent {
  visible?: boolean
  customize?: boolean
  statistical?: boolean | null
  retargeting?: boolean | null
}
