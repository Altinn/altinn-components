import { create } from 'storybook/theming';
import { version } from '../package.json';

export default create({
    base: 'light',
    brandTitle: `Altinn components v${version}`,
    fontBase: '"Inter", sans-serif',
});