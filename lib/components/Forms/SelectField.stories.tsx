import type { Meta, StoryObj } from '@storybook/react-vite';
import { SelectField } from './SelectField';

const meta = {
  title: 'Forms/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  parameters: {},
  args: {
    label: 'Select something',
    children: [
      <option key="1" value="1">
        Option 1
      </option>,
      <option key="2" value="2">
        Option 2
      </option>,
      <option key="3" value="3">
        Option 3
      </option>,
    ],
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
