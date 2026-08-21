import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import type { LanguageCode } from '../../types';
import { RootProvider } from '../RootProvider';
import { CookieBanner } from './CookieBanner.tsx';

const meta = {
  title: 'Surveys and consent/CookieBanner',
  component: CookieBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onAccept: () => console.log('Consent granted'),
    onReject: () => console.log('Consent denied'),
  },
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

const withLanguage =
  (languageCode: LanguageCode): Decorator =>
  (Story) => (
    <RootProvider languageCode={languageCode}>
      <Story />
    </RootProvider>
  );

/** The two handlers are the only props. The text follows the language set on RootProvider. */
export const Default: Story = {
  args: {},
};

export const Nynorsk: Story = {
  args: {},
  decorators: [withLanguage('nn')],
};

export const English: Story = {
  args: {},
  decorators: [withLanguage('en')],
};
