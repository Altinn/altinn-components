import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './preview';
import { afterEach } from 'vitest';
import { page } from 'vitest/browser';
import { screenshot } from '@storycap-testrun/browser';

setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);

// Capture screenshots after each test
afterEach(async (context) => {
  await screenshot(page, context);
});
