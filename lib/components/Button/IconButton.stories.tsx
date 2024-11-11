import type { Meta, StoryObj } from '@storybook/react';
import { MetaItem } from '../Meta';
import { IconButton } from './IconButton';

const meta = {
  title: 'Atoms/Button/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: 'IconButton',
    icon: 'x-mark',
    size: 'sm',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

const sizes = ['sm', 'md', 'lg'];
const variants = ['outline', 'solid', 'dotted', 'text'];

export const Sizes = (args) => {
  return (
    <div style={{ display: 'flex', columnGap: '1rem', justifyContent: 'space-between', width: '100%' }}>
      {variants?.map((variant) => {
        return (
          <div key={variant} style={{ display: 'flex', flexDirection: 'column', columnGap: '1rem' }}>
            <MetaItem>{variant}</MetaItem>
            {sizes?.map((size) => {
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
