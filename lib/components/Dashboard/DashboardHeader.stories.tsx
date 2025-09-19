import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardHeader, type DashboardHeaderProps } from '../';

const meta = {
  title: 'Page/Dashboard/DashboardHeader',
  component: DashboardHeader,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {},
} satisfies Meta<typeof DashboardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Company: Story = {
  args: {
    title: 'Bergen Bar',
    description: 'Org nr: XXXXXXXXX',
    icon: {
      type: 'company',
      name: 'Bergen Bar',
    },
  } as DashboardHeaderProps,
};

export const CompanySubunit: Story = {
  args: {
    title: 'Bergen Bar',
    description: 'Org nr: XXXXXXXXX',
    icon: {
      type: 'company',
      variant: 'outline',
      name: 'Bergen Bar',
    },
  } as DashboardHeaderProps,
};

export const Person: Story = {
  args: {
    title: 'Mathias Dyngeland',
    description: 'Fødselsnr: XX.XX.XXXX XXXXXX',
    icon: {
      type: 'person',
      name: 'Mathias Dyngeland',
    },
  } as DashboardHeaderProps,
};

export const LoadingState: Story = {
  args: {
    loading: true,
    title: 'Mathias Dyngeland',
    description: 'Fødselsnr: XX.XX.XXXX XXXXXX',
    icon: {
      type: 'person',
      name: 'Mathias Dyngeland',
    },
  } as DashboardHeaderProps,
};
