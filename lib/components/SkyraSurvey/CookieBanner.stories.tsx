import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import type { LanguageCode } from '../../types';
import { RootProvider } from '../RootProvider';
import { CookieBanner } from './CookieBanner';

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

/** Only the two handlers are required. The text follows the language set on RootProvider. */
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

/** Every string can be replaced, for an application that brings its own translations. */
export const CustomText: Story = {
  args: {
    heading: 'Kan vi bruke informasjonskapsler?',
    description: 'Vi bruker dem til statistikk, og til å huske språkvalget ditt.',
    necessaryText: (
      <>
        Noen informasjonskapsler er nødvendige for at nettsiden skal fungere.{' '}
        <a href="https://info.altinn.no/om-altinn/personvern/">Les mer om personvern.</a>
      </>
    ),
    acceptLabel: 'Godta',
    rejectLabel: 'Avslå',
  },
};
