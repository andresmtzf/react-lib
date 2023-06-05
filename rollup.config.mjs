import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import sass from 'rollup-plugin-sass'
import packageJson from './package.json' assert { type: 'json' }
//import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      //peerDepsExternal(),
      resolve(),
      commonjs({ include: 'src/**' }),
      typescript({ tsconfig: './tsconfig.json' }),
      sass({ insert: false, output: 'dist/main.scss', options: { includePaths: ['src'] } }),
      //sass(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.scss$/],
  },
]
