import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { StoryObj } from '@storybook/react';
import { MetaItem } from '../Meta';
import { DsButton, type DsButtonProps } from './DsButton';

const meta = {
  title: 'Atoms/DsButton/DsButtons',
  tags: ['autodocs'],
  parameters: {},
  args: {
    'data-color': 'primary',
  },
  argTypes: {
    'data-color': {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ['sm', 'md', 'lg'] as DsButtonProps['data-size'][];
const variants = ['solid', 'outline', 'dotted', 'text'] as DsButtonProps['variant'][];

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
                <div
                  key={size}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '1rem',
                  }}
                >
                  <DsButton {...args} icon variant={variant} data-size={size}>
                    <XMarkIcon />
                  </DsButton>

                  <DsButton {...args} variant={variant} data-size={size}>
                    <ArrowLeftIcon />
                    DsButton
                  </DsButton>

                  <DsButton {...args} variant={variant} data-size={size}>
                    DsButton <ArrowRightIcon />
                  </DsButton>
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
