import { resolve } from 'path'

export const config = {
  webpack: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@labels': resolve(__dirname, 'src/labels.json'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@types': resolve(__dirname, 'global.d')
    },
  },
}
