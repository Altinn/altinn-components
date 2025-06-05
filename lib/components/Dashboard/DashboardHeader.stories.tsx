import { BellIcon, Buildings2Icon, CogIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardHeader, Divider, List, SettingsItem } from '../';

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
    type: 'company',
    name: 'Bergen Bar',
    description: 'Org nr: XXXXXXXXX',
    children: (
      <List size="sm" spacing={0}>
        <SettingsItem linkIcon icon={Buildings2Icon} title="Forretningsadresse" value="Lørenfaret 1C, 0585 OSLO" />
        <Divider />
        <SettingsItem linkIcon icon={BellIcon} title="Varslingsadresser" value="kontakt@digdir.no, +47 99999999" />
      </List>
    ),
  },
};

export const Person: Story = {
  args: {
    type: 'person',
    name: 'Mathias Dyngeland',
    description: 'Fødselsnr: XX.XX.XXXX XXXXXX',
    children: (
      <List size="sm" spacing={0}>
        <SettingsItem
          icon={BellIcon}
          title="Varslinger er på"
          description="Alle varslinger"
          badge={{ label: 'SMS og Epost' }}
          linkIcon
        />
        <Divider />
        <SettingsItem icon={CogIcon} title="Flere innstillinger" linkIcon />
      </List>
    ),
  },
};
