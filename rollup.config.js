// @ts-check

import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

/**
 * Comment with library information to be appended in the generated bundles.
 */
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${pkg.author.name}
 * Released under the ${pkg.license} License.
 */
`;

/**
 * Creates an output options object for Rollup.js.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
function createOutputOptions(options) {
  return {
    banner,
    name: pkg.name,
    exports: 'named',
    sourcemap: true,
    ...options
  };
}

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/index.ts',
  output: [
    createOutputOptions({
      file: pkg.main,
      format: 'cjs'
    }),
    createOutputOptions({
      file: pkg['main:prod'],
      format: 'cjs',
      plugins: [terser()]
    }),
    createOutputOptions({
      file: pkg.module,
      format: 'es'
    }),
    createOutputOptions({
      file: pkg['module:prod'],
      format: 'es',
      plugins: [terser()]
    }),
    createOutputOptions({
      file: pkg.umd,
      format: 'umd',
      name: 'Helpers'
    }),
    createOutputOptions({
      file: pkg.browser,
      format: 'umd',
      name: 'Helpers',
      plugins: [terser()]
    })
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    del({ targets: 'dist/*' }),
    typescript({
      clean: true,
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.build.json'
    })
  ]
};

export default options;
