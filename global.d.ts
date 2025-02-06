declare module '*.css' {
  const content: string
  export default content
}

// declare namespace NodeJS {
//   interface ProcessEnv {
//     NODE_ENV: 'production' | 'development' | 'debug'
//   }
// }

declare module 'rollup-plugin-serve'
