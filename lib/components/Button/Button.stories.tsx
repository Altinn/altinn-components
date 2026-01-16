import { ArrowLeftIcon, ArrowRightIcon, PencilIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonSize, type ButtonVariant } from './Button';
import { ButtonGroup } from './ButtonGroup';

const meta = {
  title: 'Button/Button',
  component: Button,
  parameters: {},
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

const sizes = ['xs', 'sm', 'md', 'lg'] as ButtonSize[];
const variants = ['solid', 'tinted', 'outline', 'ghost'] as ButtonVariant[];

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = (args: Story) => {
  return <Button {...args}>Button</Button>;
};

export const Variants = (args: Story) => {
  return (
    <ButtonGroup>
      <Button {...args}>Default</Button>
      <Button {...args} variant="tinted">
        Tinted
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </ButtonGroup>
  );
};

export const Colors = (args: Story) => {
  return (
    <ButtonGroup>
      <Button {...args} color="company">
        Company
      </Button>
      <Button {...args} color="person">
        Person
      </Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
      <Button {...args} color="danger">
        Danger
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
    </ButtonGroup>
  );
};

export const Sizes = (args: Story) => {
  return (
    <ButtonGroup>
      <Button {...args} size="xs">
        XSmall
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </ButtonGroup>
  );
};

export const Icons = (args: Story) => {
  return (
    <ButtonGroup>
      <Button {...args} icon>
        <XMarkIcon />
      </Button>
      <Button {...args} icon rounded>
        <XMarkIcon />
      </Button>
      <Button {...args}>
        <PencilIcon />
        <span>Button</span>
      </Button>
      <Button {...args}>
        <span>Button</span>
        <ArrowRightIcon />
      </Button>
    </ButtonGroup>
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
                  <Button {...args} variant={variant} size={size} icon>
                    <XMarkIcon />
                  </Button>
                  <Button {...args} variant={variant} size={size} rounded icon>
                    <XMarkIcon />
                  </Button>
                  <Button {...args} variant={variant} size={size}>
                    Button
                  </Button>
                  <Button {...args} variant={variant} size={size}>
                    <ArrowLeftIcon />
                    <span>Button</span>
                  </Button>
                  <Button {...args} variant={variant} size={size}>
                    <span>Button</span>
                    <ArrowRightIcon />
                  </Button>
                  <Button {...args} loading={true} variant={variant} size={size}>
                    Loading ...
                  </Button>
                  <Button {...args} disabled variant={variant} size={size}>
                    Disabled
                  </Button>
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
