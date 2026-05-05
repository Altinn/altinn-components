import type { Meta, StoryObj } from '@storybook/react-vite';
import { PhoneField } from './PhoneField';

const meta = {
  title: 'Forms/PhoneField',
  component: PhoneField,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'phone',
    label: 'Telefonnummer',
    countryCodeOptions: [
      { label: '+47', value: '+47' },
      { label: '+46', value: '+46' },
      { label: '+45', value: '+45' },
      { label: '+358', value: '+358' },
      { label: '+44', value: '+44' },
      { label: '+1', value: '+1' },
      { label: '+49', value: '+49' },
      { label: '+33', value: '+33' },
      { label: '+34', value: '+34' },
      { label: '+39', value: '+39' },
      { label: '+48', value: '+48' },
      { label: '+31', value: '+31' },
    ],
    placeholder: 'Telefonnummer',
  },
} satisfies Meta<typeof PhoneField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
