import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
      // We exclude spec/test files and node_modules from rollup typescript
      exclude: ['**/__tests__/**', '**/*.test.ts', 'node_modules'],
    }),
    terser({
      compress: {
        passes: 2,
      },
      format: {
        comments: false,
      },
    }),
  ],
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
  ],
};
