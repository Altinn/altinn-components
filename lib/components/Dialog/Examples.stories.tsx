import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogListItem, ListBase, MetaItem } from '../';

const meta = {
  title: 'Dialog/Examples',
  component: DialogListItem,
  tags: ['autodocs'],
  decorators: [
    withThemeByDataAttribute({
      themes: {
        company: 'company',
        person: 'person',
      },
      defaultTheme: 'company',
    }),
  ],
  argTypes: {},
} satisfies Meta<typeof DialogListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RequiresAttention = (args) => {
  return (
    <ListBase>
      <DialogListItem {...args} status={status} />
      <MetaItem>{status?.value}</MetaItem>
    </ListBase>
  );
};
