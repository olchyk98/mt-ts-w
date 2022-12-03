import { sync as glob } from 'glob'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const files = glob('lib/**/*.ts')

export default [ {
  input: files,
  treeshake: {
    moduleSideEffects: false,
  },
  plugins: [
    esbuild(),
  ],
  output: [ {
    dir: 'dist/es',
    format: 'es',
    sourcemap: true,
  }, {
    dir: 'dist/cjs',
    format: 'cjs',
    exports: 'auto',
    sourcemap: true,
  } ],
}, {
  input: files,
  treeshake: {
    moduleSideEffects: false,
  },
  plugins: [
    dts(),
  ],
  output: [ {
    dir: 'dist/es',
    format: 'es',
  }, {
    dir: 'dist/cjs',
    format: 'cjs',
    exports: 'auto',
  } ],
} ]
