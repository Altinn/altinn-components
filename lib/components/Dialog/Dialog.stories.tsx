import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogContact, DialogHistory, DialogSection } from '..';
import {
  dialog,
  dialogActivityLog,
  dialogContact,
  dialogInfo,
  dialogTabs,
  transmissionHistory,
} from '../../../examples';

const meta: Meta<typeof Dialog> = {
  title: 'Inbox/Dialog',
  component: Dialog,
  tags: ['autodocsi', 'beta'],
  parameters: {},
  argTypes: { body: { control: 'text' } },
  args: dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: {
      ...dialogTabs,
      items: dialogTabs?.items?.map((item, index) => {
        return {
          ...item,
          selected: !index,
        };
      }),
    },
    children: <DialogHistory {...transmissionHistory} collapsible={true} />,
  },
};

export const ActivityLog: Story = {
  args: {
    tabs: {
      ...dialogTabs,
      items: dialogTabs?.items?.map((item) => {
        return {
          ...item,
          selected: item.id === 'activity-log',
        };
      }),
    },
    children: <DialogHistory {...dialogActivityLog} />,
  },
};

export const AdditionalInfo: Story = {
  args: {
    tabs: {
      ...dialogTabs,
      items: dialogTabs?.items?.map((item) => {
        return {
          ...item,
          selected: item.id === 'info',
        };
      }),
    },
    children: <DialogSection {...dialogInfo} />,
  },
};

export const Contact: Story = {
  args: {
    tabs: {
      ...dialogTabs,
      items: dialogTabs?.items?.map((item) => {
        return {
          ...item,
          selected: item.id === 'contact',
        };
      }),
    },
    children: <DialogContact {...dialogContact} />,
  },
};
