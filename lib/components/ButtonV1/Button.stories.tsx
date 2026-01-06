import { Button as DsButton } from '@digdir/designsystemet-react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  PlusIcon,
  XMarkIcon,
} from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonSize, type ButtonVariant, ComboButton, IconButton } from './';

const meta = {
  title: 'Components/Button',
  component: Button,
  //  tags: ["autodocs"],
  parameters: {},
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

const sizes = ['xs', 'sm', 'md', 'lg'] as ButtonSize[];
const variants = ['solid', 'tinted', 'outline', 'dotted', 'text'] as ButtonVariant[];

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading ...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Sizes = (args: Story) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '1rem',
      }}
    >
      <Button {...args} size="xs">
        Button Xs
      </Button>
      <Button {...args} size="sm">
        Button Sm
      </Button>
      <Button {...args} size="md">
        Button Md
      </Button>
      <Button {...args} size="lg">
        Button Lg
      </Button>
    </div>
  );
};

export const LabelSize = (args: Story) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '1rem',
      }}
    >
      <Button {...args} size="md" icon={PlusIcon}>
        Medium
      </Button>
      <Button {...args} icon={PlusIcon} size="md" labelSize="sm">
        Md/Sm
      </Button>
      <Button {...args} size="lg" icon={PlusIcon}>
        Large
      </Button>
      <Button {...args} icon={PlusIcon} size="lg" labelSize="md">
        Lg/Md
      </Button>
      <ComboButton {...args} icon={XMarkIcon} size="lg" variant="tinted" iconAltText="close">
        Large
      </ComboButton>
      <ComboButton {...args} icon={XMarkIcon} size="lg" labelSize="md" variant="tinted" iconAltText="close">
        Large/Md
      </ComboButton>
      <IconButton {...args} iconAltText="Lg" icon={PlusIcon} size="lg" />
      <IconButton {...args} iconAltText="Lg/Md" icon={PlusIcon} size="lg" iconSize="md" />
    </div>
  );
};

export const Variants = (args: Story) => {
  return (
    <div
      data-size="md"
      style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '1rem',
      }}
    >
      <DsButton>DsButton</DsButton>
      <DsButton variant="secondary">DsButton</DsButton>
      <DsButton variant="tertiary">DsButton</DsButton>
      <Button {...args} variant="solid">
        Solid
      </Button>
      <Button {...args} variant="tinted">
        Tinted
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="dotted">
        Dotted
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </div>
  );
};

export const ToolbarButtons = (args: Story) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '.5rem',
      }}
    >
      <Button {...args} size="xs" icon={ChevronUpDownIcon} reverse variant="solid">
        Button
      </Button>
      <ComboButton {...args} icon={XMarkIcon} size="xs" variant="tinted" iconAltText="close">
        Button
      </ComboButton>
      <Button {...args} size="xs" icon={PlusIcon} variant="dotted">
        Legg til filter
      </Button>
    </div>
  );
};

export const Specimens = (args: Story) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
      {variants.map((variant) => {
        return (
          <div
            key={variant}
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '1rem',
              alignItems: 'start',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <span>{variant}</span>
            {sizes.map((size) => {
              return (
                <div
                  key={size}
                  data-size={size}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '1rem',
                  }}
                >
                  <DsButton>DsButton</DsButton>
                  <IconButton iconAltText={size} {...args} icon={XMarkIcon} variant={variant} size={size} />
                  <Button {...args} variant={variant} size={size}>
                    Button
                  </Button>
                  <Button {...args} variant={variant} icon={ArrowLeftIcon} size={size}>
                    Button
                  </Button>
                  <Button {...args} reverse variant={variant} icon={ArrowRightIcon} size={size}>
                    Button
                  </Button>
                  <ComboButton
                    {...args}
                    variant={variant}
                    icon={ChevronDownIcon}
                    size={size}
                    iconAltText="chevron down"
                    ariaLabel={`ComboButton ${size}`}
                  >
                    ComboButton
                  </ComboButton>
                  <span>{size}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
