import { extname, relative } from 'node:path';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import pkg from './package.json';

const dependencies = [
  ...Object.keys({
    ...(pkg.devDependencies || {}),
    ...(pkg.peerDependencies || {}),
  }),
  'react',
  'react-dom',
];

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'lib/css/*.css',
            dest: path.resolve(__dirname, 'dist/'),
          },
          {
            src: 'lib/tokens/**/*',
            dest: path.resolve(__dirname, 'dist/tokens/'),
          },
        ],
      }),
      react(),
      libInjectCss(),
      dts({
        root: 'dist',
        outDir: 'types',
      }),
      preserveDirectives(),
    ],
    build: {
      lib: {
        entry: [path.resolve(__dirname, 'lib/index.ts')],
        formats: ['es'],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: [...dependencies, 'react/jsx-runtime'],
        input: Object.fromEntries(
          glob
            .sync('lib/**/*.{ts,tsx}', {
              ignore: ['lib/**/*.d.ts'],
            })
            .filter((file) => !file.match(/\.stories\.tsx?$/))
            .map((file) => {
              return [
                // The name of the entry point
                // lib/nested/foo.ts becomes nested/foo
                relative('lib', file.slice(0, file.length - extname(file).length)),
                // The absolute path to the entry file
                // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                fileURLToPath(new URL(file, import.meta.url)),
              ];
            }),
        ),
        output: {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js',
        },
      },
    },
  });
};
