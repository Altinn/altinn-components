import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner'; 
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';

const config: TestRunnerConfig = {
  tags:{
    exclude: ['skip-test']
  },
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);

    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    await configureAxe(page, {
      rules: [...storyContext.parameters?.a11y?.config?.rules],
    });
 
    const element = storyContext.parameters?.a11y?.element ?? 'body';
    
    await checkA11y(page, element, {
      verbose: false,
      detailedReport: true,
      detailedReportOptions: { html: true },
      axeOptions: { 
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        },
        resultTypes: ['violations'],
        //@ts-ignore Object literal may only specify known properties, and 'includedImpacts' does not exist in type 'RunOptions'.
        includedImpacts: ['critical', 'serious'],
      }
    });
  },
};
 
export default config;