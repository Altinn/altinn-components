import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { StoryObj } from '@storybook/react';
import { Button, type ButtonSize, type ButtonVariant, ComboButton, IconButton, MetaItem } from '../';

const meta = {
  title: 'Atoms/Button/Buttons',
  tags: ['autodocs'],
  parameters: {},
  args: {
    color: 'primary',
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ['sm', 'md', 'lg'] as ButtonSize[];
const variants = ['solid', 'outline', 'dotted', 'text'] as ButtonVariant[];

export const VariantsAndSizes = (args: Story) => {
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
            <MetaItem>{variant}</MetaItem>
            {sizes.map((size) => {
              return (
                <div key={size} style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
                  <IconButton iconAltText={size} {...args} icon={XMarkIcon} variant={variant} size={size} />
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
                  <MetaItem>{size}</MetaItem>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
