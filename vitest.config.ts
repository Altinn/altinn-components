import { mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import storycapPlugin from '@storycap-testrun/browser/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import type { PluginOption } from 'vite';
import { defineConfig } from 'vitest/config';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
const screenshotMode = !!process.env.SCREENSHOT_MODE; // Enable screenshot capture and comparison
const setupFile = screenshotMode ? '.storybook/vitest.setup.screenshots.ts' : '.storybook/vitest.setup.ts';

/**
 * On macOS 27, Playwright's Firefox uses the same data folder as a regular Firefox
 * (~/Library/Application Support/Firefox). macOS protects that folder, so the browser never starts.
 * Pointing CFFIXED_USER_HOME at an empty folder gives it a folder of its own.
 * Remove when Playwright is 1.65 or newer: https://github.com/microsoft/playwright/issues/42768
 */
const firefoxEnv = (() => {
  if (process.platform !== 'darwin') {
    return undefined;
  }
  const home = path.join(tmpdir(), 'playwright-firefox-home');
  mkdirSync(home, { recursive: true });
  return { ...process.env, CFFIXED_USER_HOME: home };
})();

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
                      // Generate path: lib/components/Button/__screenshots__/Button/Default.png
                      const storyFileDir = path.dirname(context.file);
                      const storyFileName = path.basename(context.file);
                      // Extract component name by removing .stories.tsx/.stories.ts extension
                      const componentName = storyFileName.replace(/\.stories\.(tsx|ts)$/, '');
                      return path.join(
                        storyFileDir,
                        '__screenshots__',
                        componentName, // Use component name instead of full story filename
                        `${context.name}.png`,
                      );
                    },
                  },
                }) as PluginOption,
              ]
            : []),
        ],
        test: {
          environment: 'node',
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            isolate: false,
            provider: playwright({
              launchOptions: {
                args: ['--font-render-hinting=none', '--disable-font-subpixel-positioning'],
                env: firefoxEnv,
              },
            }),
            instances: [{ browser: 'firefox' }],
          },
          setupFiles: [setupFile],
        },
      },
    ],
  },
});
