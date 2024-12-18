import type { Meta, StoryObj } from '@storybook/react';
import { MetaItem } from '../Meta';
import type { ButtonSize, ButtonVariant } from './ButtonBase.tsx';
import { IconButton, type IconButtonProps } from './IconButton';

const meta = {
  title: 'Atoms/Button/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {},
  args: {
    icon: 'x-mark',
    size: 'sm',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

const sizes = ['sm', 'md', 'lg'] as ButtonSize[];
const variants = ['outline', 'solid', 'dotted', 'text'] as ButtonVariant[];

export const Sizes = (args: IconButtonProps) => {
  return (
    <div style={{ display: 'flex', columnGap: '1rem', justifyContent: 'space-between', width: '100%' }}>
      {variants.map((variant) => {
        return (
          <div key={variant} style={{ display: 'flex', flexDirection: 'column', columnGap: '1rem' }}>
            <MetaItem>{variant}</MetaItem>
            {sizes.map((size) => {
              return (
                <div key={size}>
                  <IconButton {...args} variant={variant} size={size} />
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
