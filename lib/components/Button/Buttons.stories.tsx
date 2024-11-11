import type { Meta, StoryObj } from '@storybook/react';
import { Button, ComboButton, IconButton, MetaItem } from '../';

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

const sizes = ['sm', 'md', 'lg'];
const variants = ['solid', 'outline', 'dotted', 'text'];

export const VariantsAndSizes = (args: Story) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
      {variants?.map((variant) => {
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
            {sizes?.map((size) => {
              return (
                <div key={size} style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
                  <IconButton {...args} icon="x-mark" variant={variant} size={size} />
                  <Button {...args} reverse variant={variant} icon="arrow-left" size={size}>
                    Button
                  </Button>
                  <Button {...args} variant={variant} icon="arrow-right" size={size}>
                    Button
                  </Button>
                  <ComboButton {...args} variant={variant} icon="chevron-down" size={size}>
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