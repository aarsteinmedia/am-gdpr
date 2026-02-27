declare module '*.css' {
  const content: string

  export default content
}

// declare namespace NodeJS {
//   interface ProcessEnv {
//     NODE_ENV: 'production' | 'development' | 'debug'
//   }
// }

declare module 'postcss-minify' {
  export default function cssMinify(): unknown
}

declare module 'stylelint-config-recommended' {
  import type { Config } from 'stylelint'

  const config: Config

  export default config
}

