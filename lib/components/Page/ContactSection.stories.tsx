import { EnvelopeOpenIcon, PersonChatIcon, PhoneIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { ContactSection } from './ContactSection';

const meta: Meta<typeof ContactSection> = {
  title: 'Page/ContactSection',
  component: ContactSection,
  tags: ['autodocs', 'deprecated'],
  parameters: {},
  args: {
    title: 'Trenger du hjelp?',
    description:
      'Spør et ekte menneske i Norge.no sin brukerservice. Vi hjelper deg å finne frem i det offentlige. Telefon og chat hverdager 08.00-15.30. Hvis du skriver til oss svarer vi vanligvis innen en virkedag.',
    items: [
      {
        icon: PersonChatIcon,
        label: 'Chat med en veileder',
      },
      {
        icon: PhoneIcon,
        label: 'Ring 75 00 60 00',
      },
      {
        icon: EnvelopeOpenIcon,
        label: 'Skriv til oss',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Card: Story = {
  args: { variant: 'card', color: 'company', theme: 'surface' },
};
