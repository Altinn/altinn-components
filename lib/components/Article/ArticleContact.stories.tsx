import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArticleContact } from '..';

const meta = {
  title: 'Page/Article/ArticleContact',
  component: ArticleContact,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    title: 'Ta kontakt',
    description:
      'Skatteetaten svarer på spørsmål om melding om aksjonærregisteroppgaven. Åpningstid på telefon er 0900-1500. Hvis du skriver til oss svarer vi vanligvis innen en virkedag.',
  },
} satisfies Meta<typeof ArticleContact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [{ label: 'Chat med en veileder' }, { label: 'Ring 75 00 60 00' }, { label: 'Skriv til Altinn' }],
  },
};
