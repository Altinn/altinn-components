import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import storycapPlugin from '@storycap-testrun/browser/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
const screenshotMode = process.env.SCREENSHOT_MODE; // 'generate' | 'test' | undefined
const outputDir = screenshotMode === 'generate' ? '__screenshots__' : '.screenshots-temp/actual';
const setupFile = screenshotMode ? '.storybook/vitest.setup.screenshots.ts' : '.storybook/vitest.setup.ts';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: { reporter: ['text', 'json'] },
    projects: [
      {
        test: {
          name: 'unit',
          include: ['**/*.spec.ts', '**/*.test.ts'],
        },
      },
      {
        optimizeDeps: {
          include: ['react', 'react-dom', 'react/jsx-dev-runtime'],
        },
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
          ...(screenshotMode
            ? [
                storycapPlugin({
                  output: {
                    dir: path.join(dirname, outputDir),
                    file: path.join('[file]', '[name].png'),
                  },
                }),
              ]
            : []),
        ],
        test: {
          environment: 'node',
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: [setupFile],
        },
      },
    ],
  },
});
