import labels from './labels.json'

export type Labels = typeof labels

export interface Consent {
  visible?: boolean
  customize?: boolean
  statistical?: boolean | null
  retargeting?: boolean | null
}

declare global {
  module '*.scss' {
    const content: Record<string, string>
    export default content
  }
}