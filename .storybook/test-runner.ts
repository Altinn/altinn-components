import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
import { injectAxe, checkA11y } from 'axe-playwright';

export function logA11yViolationsByImpact(violations: Array<any>) {
  const byImpact: Record<string, any[]> = {};

  for (const v of violations) {
    const impact = v.impact || 'unknown';
    if (!byImpact[impact]) byImpact[impact] = [];
    byImpact[impact].push(v);
  }

  const levels = ['critical', 'serious', 'moderate', 'minor', 'unknown'];
  for (const level of levels) {
    const issues = byImpact[level];
    if (!issues || issues.length === 0) continue;

    console.warn(`\n🔎 Accessibility issues with impact: ${level.toUpperCase()} (${issues.length})`);

    for (const v of issues) {
      console.warn(`- [${v.id}] ${v.help}`);
      console.warn(`  → Affected nodes: ${v.nodes.length}`);
      console.warn(`  → Help URL: ${v.helpUrl}`);
    }
  }
}

const config: TestRunnerConfig = {
  tags: {
    exclude: ['skip-test'],
  },

  async preVisit(page) {
    await injectAxe(page);
  },

  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);

    if (storyContext.parameters?.a11y?.disable) return;

    const element = storyContext.parameters?.a11y?.element ?? 'body';

    await checkA11y(page, element, {
      verbose: false,
      detailedReport: true,
      detailedReportOptions: { html: true },
      axeOptions: {
        runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        resultTypes: ['violations'],
      },
    });

  },
};

export default config;
