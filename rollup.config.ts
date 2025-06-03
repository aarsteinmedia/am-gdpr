import type { RollupOptions } from 'rollup'

import layers from '@csstools/postcss-cascade-layers'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import autoprefixer from 'autoprefixer'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import flexbugs from 'postcss-flexbugs-fixes'
import cssMinify from 'postcss-minify'
import { dts } from 'rollup-plugin-dts'
import template from 'rollup-plugin-html-literals'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-opener'
import postcss from 'rollup-plugin-postcss'
import pluginSummary from 'rollup-plugin-summary'
import { swc, minify } from 'rollup-plugin-swc3'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

const isProd = process.env.NODE_ENV !== 'development',
  { url } = import.meta,
  __dirname = path.dirname(fileURLToPath(url)),
  pkgBuffer = await readFile(new URL(path.resolve(__dirname, 'package.json'), url)),
  pkg: typeof import('./package.json') = JSON.parse(pkgBuffer.toString()),
  input = path.resolve(
    __dirname, 'src', 'index.ts'
  ),

  types: RollupOptions = {
    input: path.resolve(
      __dirname, 'types', 'index.d.ts'
    ),
    output: {
      file: pkg.types,
      format: 'esm',
    },
    plugins: [typescriptPaths(),
      json(),
      dts()],
  },
  module: RollupOptions = {
    external: ['js-cookie'],
    input,
    onwarn(warning, warn) {
      if (
        warning.code === 'THIS_IS_UNDEFINED' ||
        warning.code === 'CIRCULAR_DEPENDENCY'
      ) {
        return
      }
      warn(warning)
    },
    output: {
      exports: 'named',
      file: pkg.module,
      format: 'esm',
    },
    plugins: [
      typescriptPaths(),
      postcss({
        inject: false,
        plugins: [
          flexbugs(),
          layers(),
          autoprefixer({ flexbox: 'no-2009' }),
          cssMinify(),
        ],
      }),
      template({
        include: [path.resolve(
          __dirname, 'src', 'templates', '*'
        )],
        options: {
          shouldMinify({ parts }) {
            return parts.some(({ text }) =>
              text.includes('<div') ||
              text.includes('<button') ||
              text.includes('<svg') ||
              text.includes('<label'))
          },
        },
      }),
      json({ compact: true }),
      nodeResolve({
        extensions: ['ts'],
        preferBuiltins: true,
      }),
      commonjs(),
      injectProcessEnv({ NODE_ENV: 'production' }),
      swc(),
      pluginSummary(),
    ],
  },
  unpkg: RollupOptions = {
    input,
    onwarn(warning, warn) {
      if (
        warning.code === 'THIS_IS_UNDEFINED' ||
        warning.code === 'CIRCULAR_DEPENDENCY'
      ) {
        return
      }
      warn(warning)
    },
    output: {
      exports: 'named',
      extend: true,
      file: pkg.main,
      format: 'iife',
      name: pkg.name,
    },
    plugins: [
      typescriptPaths(),
      postcss({
        inject: false,
        plugins: isProd
          ? [
            flexbugs(),
            layers(),
            autoprefixer({ flexbox: 'no-2009' }),
            cssMinify(),
          ]
          : [],
      }),
      template({
        include: [
          // path.resolve(__dirname, 'src', 'elements', 'AMGDPR.ts'),
          path.resolve(
            __dirname, 'src', 'templates', '*'
          ),
        ],
        options: {
          shouldMinify({ parts }) {
            return parts.some(({ text }) =>
              text.includes('<div') ||
              text.includes('<button') ||
              text.includes('<svg') ||
              text.includes('<label'))
          },
        },
      }),
      json({ compact: true }),
      nodeResolve({
        extensions: ['ts'],
        preferBuiltins: false,
      }),
      commonjs(),
      injectProcessEnv({ NODE_ENV: isProd ? 'production' : 'development' }),
      swc(),
      !isProd &&
      serve({ open: true }),
      !isProd && livereload(),
      isProd && minify(),
      isProd && pluginSummary(),
    ],
  }

export default isProd ? [module,
  types,
  unpkg] : unpkg
