import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import storycapPlugin from '@storycap-testrun/browser/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
const screenshotMode = !!process.env.SCREENSHOT_MODE; // Enable screenshot capture and comparison
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
                    // Screenshots are captured to .screenshots-temp/actual/ for comparison
                    // If baseline doesn't exist, screenshot-compare.ts auto-creates it in component directory
                    dir: path.join(dirname, '.screenshots-temp/actual'),
                    file: (context) => {
                      // Generate path: lib/components/Button/__screenshots__/Button.stories.tsx/Default.png
                      const storyFileDir = path.dirname(context.file);
                      const storyFileName = path.basename(context.file);
                      return path.join(
                        storyFileDir,
                        '__screenshots__',
                        storyFileName,
                        `${context.name}.png`
                      );
                    },
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
