import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import summary from 'rollup-plugin-summary'
import { swc, minify } from 'rollup-plugin-swc3'
import template from 'rollup-plugin-html-literals'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import postcssLit from 'rollup-plugin-postcss-lit'
import layers from '@csstools/postcss-cascade-layers'
import flexbugs from 'postcss-flexbugs-fixes'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

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
      if (warning.code === 'THIS_IS_UNDEFINED') return;
      warn(warning);
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
      postcssLit({
        importPackage: 'lit',
      }),
      template(),
      replace({
        preventAssignment: false,
        'Reflect.decorate': 'undefined',
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      json(),
      nodeResolve({
        extensions: ['ts'],
        jsnext: true,
        module: true,
        preferBuiltins: false,
      }),
      commonjs(),
      swc(),
      !isProd && serve(),
      !isProd && livereload(),
      isProd && minify(),
      isProd && summary(),
    ],
  },
];