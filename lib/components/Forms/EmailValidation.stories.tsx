import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Fieldset,
  Input,
  Label,
  Section,
  Snackbar,
  DsValidationMessage as ValidationMessage,
  type DsValidationMessageProps as ValidationMessageProps,
} from '../';

const isValidEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

interface EmailDetailsProps {
  /** Saved email for the account, if any. */
  email?: string;
}

const EmailDetails = ({ email }: EmailDetailsProps) => {
  const [value, setValue] = useState<string>(email ?? '');
  const [touched, setTouched] = useState<boolean>(false);

  const isShapeValid = isValidEmail(value);
  const isDirty = value.trim() !== (email ?? '').trim();

  const validation: { color: ValidationMessageProps['data-color']; message: string } =
    !value || !touched
      ? { color: 'info', message: 'Enter the e-mail address you want notifications sent to.' }
      : isShapeValid
        ? { color: 'success', message: 'This looks like a valid e-mail address.' }
        : { color: 'danger', message: 'Enter a valid e-mail address, e.g. name@example.com.' };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isDirty) {
      return;
    }
    if (value && !isShapeValid) {
      setTouched(true);
      e.currentTarget.querySelector<HTMLInputElement>('input[name="email"]')?.focus();
      return;
    }
  };

  return (
    <form onSubmit={handleSave}>
      <Section spacing={6}>
        <Fieldset size="sm">
          <Label size="sm">E-mail address</Label>
          <Input
            name="email"
            size="sm"
            type="email"
            value={value}
            inputMode="email"
            autoComplete="email"
            aria-invalid={validation.color === 'danger'}
            placeholder="name@example.com"
            aria-label="E-mail address"
            onChange={(e) => {
              setValue(e.target.value);
              setTouched(false);
            }}
            onBlur={() => setTouched(true)}
          />
          <ValidationMessage data-size="sm" data-color={validation.color}>
            {validation.message}
          </ValidationMessage>
        </Fieldset>
        <ButtonGroup>
          <Button type="submit" variant="solid">
            Save
          </Button>
          <Button type="button" variant="outline">
            Close
          </Button>
        </ButtonGroup>
      </Section>
      <Snackbar />
    </form>
  );
};

const meta = {
  title: 'Forms/ValidationExample',
  component: EmailDetails,
  parameters: {},
} satisfies Meta<typeof EmailDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty field — shows the neutral info hint, prompts to verify once valid. */
export const Empty: Story = {
  args: {},
};
