import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import { summary } from 'rollup-plugin-summary'
import { swc, minify } from 'rollup-plugin-swc3'
import template from 'rollup-plugin-html-literals'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import layers from '@csstools/postcss-cascade-layers'
import flexbugs from 'postcss-flexbugs-fixes'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import pkg from './package.json' assert { type: 'json' }

const isProd = process.env.NODE_ENV !== 'development'

export default [
  {
    input: './src/index.ts',
    output: {
      extend: true,
      file: pkg.main,
      format: 'iife',
      name: pkg.name,
    },
    onwarn(warning, warn) {
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return
      }
      warn(warning)
    },
    plugins: [
      postcss({
        inject: false,
        plugins: [
          flexbugs(),
          layers(),
          autoprefixer({
            flexbox: 'no-2009',
          }),
        ],
      }),
      template({
        include: './src/index.ts',
        options: {
          shouldMinify({ parts }) {
            return parts.some(
              ({ text }) =>
                text.includes('<div') ||
                text.includes('<button') ||
                text.includes('<svg') ||
                text.includes('<label')
            )
          },
        },
      }),
      json({
        compact: true,
      }),
      nodeResolve({
        extensions: ['ts'],
        jsnext: true,
        module: true,
        preferBuiltins: false,
      }),
      commonjs(),
      injectProcessEnv({
        NODE_ENV: isProd ? 'production' : 'development',
      }),
      swc(),
      !isProd &&
        serve({
          open: true,
        }),
      !isProd && livereload(),
      isProd && minify(),
      isProd && summary(),
    ],
  },
]
