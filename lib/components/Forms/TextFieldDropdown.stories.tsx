import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { TextFieldDropdown, type TextFieldDropdownOption, type TextFieldDropdownProps } from './TextFieldDropdown';

const meta: Meta<typeof TextFieldDropdown> = {
  title: 'Forms/TextFieldDropdown',
  component: TextFieldDropdown,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextFieldDropdown>;

const emailOptions: TextFieldDropdownOption[] = [
  { value: 'john@example.com', label: 'john@example.com' },
  { value: 'jane@example.com', label: 'jane@example.com' },
  { value: 'bob@example.com', label: 'bob@example.com' },
  { value: 'alice@company.com', label: 'alice@company.com' },
  { value: 'matias@gmail.com', label: 'matias@gmail.com' },
];

export const Default: Story = {
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter email',
    options: emailOptions,
  },
};

export const WithBadge: Story = {
  args: {
    label: 'E-postadresse',
    value: 'matias@gmail.com',
    options: emailOptions,
    badge: {
      label: 'Verifisert',
      color: 'success',
      variant: 'subtle',
    },
  },
};

export const WithOptionBadges: Story = {
  args: {
    label: 'E-postadresse',
    placeholder: 'Select or enter email',
    options: [
      {
        value: 'verified@example.com',
        label: 'verified@example.com',
        badge: { label: 'Verified', color: 'success', variant: 'subtle' },
      },
      {
        value: 'unverified@example.com',
        label: 'unverified@example.com',
        badge: { label: 'Unverified', color: 'warning', variant: 'subtle' },
      },
      {
        value: 'blocked@example.com',
        label: 'blocked@example.com',
        badge: { label: 'Blocked', color: 'danger', variant: 'subtle' },
      },
      {
        value: 'pending@example.com',
        label: 'pending@example.com',
        badge: { label: 'Pending', color: 'info', variant: 'subtle' },
      },
    ],
  },
};

export const WithValidation: Story = {
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter valid email',
    options: emailOptions,
    helperText: 'Please enter a valid email address',
    validate: (value: string) => {
      if (!value) return 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? true : 'Please enter a valid email address';
    },
  },
};

export const Controlled = (args: TextFieldDropdownProps) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <TextFieldDropdown
        {...args}
        value={value}
        onChange={setValue}
        label="E-postadresse"
        placeholder="Select or enter email"
        options={emailOptions}
        helperText={`Current value: ${value || 'none'}`}
      />
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
        <strong>Selected value:</strong> {value || 'none'}
      </div>
    </div>
  );
};

export const Disabled: Story = {
  args: {
    label: 'E-postadresse',
    value: 'user@example.com',
    options: emailOptions,
    disabled: true,
    helperText: 'This field is disabled',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter or select email',
    options: emailOptions,
    helperText: 'We will send a verification email to this address',
  },
};

export const EmptyOptions: Story = {
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter email',
    options: [],
    helperText: 'No suggestions available - enter your email address',
  },
};

export const ManyOptions: Story = {
  args: {
    label: 'Select User',
    placeholder: 'Search users',
    options: Array.from({ length: 50 }, (_, i) => ({
      value: `user${i}@example.com`,
      label: `user${i}@example.com`,
    })),
    helperText: 'Scroll through the dropdown to see all options',
  },
};
