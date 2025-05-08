import type { Meta, StoryObj } from '@storybook/react';
import { TextareaField } from './TextareaField.tsx';

const meta = {
  title: 'Forms/TextAreaField',
  component: TextareaField,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof TextareaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
