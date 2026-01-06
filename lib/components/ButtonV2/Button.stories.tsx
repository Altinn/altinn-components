import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupDivider } from './ButtonGroupDivider';
import { Button, type ButtonSize, type ButtonVariant } from './Button';

const meta = {
  title: 'Next/Button',
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
                  <Button {...args} variant={variant} size={size}>
                    <XMarkIcon />
                  </Button>
                  <Button {...args} variant={variant} size={size} rounded>
                    <XMarkIcon />
                  </Button>
                  <Button {...args} loading={true} variant={variant} size={size}>
                    Loading ...
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
                  <ButtonGroup variant={variant} size={size}>
                    <Button {...args} variant={variant} size={size}>
                      Button
                    </Button>
                    <ButtonGroupDivider variant={variant} size={size} />
                    <Button {...args} variant={variant} size={size}>
                      <XMarkIcon />
                    </Button>
                  </ButtonGroup>
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
