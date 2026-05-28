import { PlusIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Heading, SettingsModal, Typography } from '../';
import { skatt } from '../../../examples/avatar';
import { AuthEvidence } from './AuthEvidence';

const meta = {
  title: 'Inbox/Dialog/AuthEvidence',
  component: AuthEvidence,
  tags: [],
  decorators: [
    (Story) => (
      <SettingsModal
        variant="content"
        title="Dialog title"
        open={true}
        onClose={() => alert('Close')}
        buttons={[
          {
            label: 'Åpne tilgangsstyring',
          },
          {
            variant: 'outline',
            label: 'Lukk',
          },
          {
            as: 'a',
            href: '//vg.no',
            variant: 'ghost',
            label: 'Finn innhold for tjenesten i innboks',
          },
        ]}
      >
        <Typography>
          <p>Slik har du tilgang:</p>
        </Typography>
        <Story />
        <Heading size="xs" variant="subtle" weight="normal">
          Ressurs-id: RF-1453.
        </Heading>
        <Typography>
          <p>Du kan endre eller si fra deg tilganger gjennom tilgangsstyring.</p>
        </Typography>
      </SettingsModal>
    ),
  ],
  args: {
    owner: {
      avatar: skatt,
      name: 'Skatteetaten',
    },
    service: {
      title: 'Endring av navn (RF-1453)',
    },
    groups: {
      package: {
        title: 'Via tilgangspakker',
      },
      role: {
        title: 'Via rolle',
      },
      resource: {
        title: 'Via enkelttjeneste',
      },
      instance: {
        title: 'Delt fra innboks',
      },
    },
    items: [
      {
        id: '1',
        groupId: 'role',
        grantType: 'role',
        title: 'Daglig leder',
      },
      {
        id: '2',
        groupId: 'role',
        grantType: 'role',
        title: 'Styremedlem',
      },
      {
        id: '3',
        groupId: 'package',
        grantType: 'package',
        title: 'Folkeregisterets navnepakke',
      },
      {
        id: '5',
        groupId: 'resource',
        grantType: 'resource',
        title: 'Endring av navn (RF-1453)',
      },
      {
        id: '6',
        groupId: 'instance',
        grantType: 'instance',
        title: 'Dialog title',
      },
    ],
  },
} satisfies Meta<typeof AuthEvidence>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Role: Story = {
  args: {
    items: [
      {
        id: '1',
        groupId: 'role',
        grantType: 'role',
        title: 'Daglig leder',
      },
      {
        id: '2',
        groupId: 'role',
        grantType: 'role',
        title: 'Styremedlem',
      },
    ],
  },
};

export const Package: Story = {
  args: {
    items: [
      {
        id: '3',
        groupId: 'package',
        grantType: 'package',
        title: 'Folkeregisterets navnepakke',
      },
    ],
  },
};

export const Resource: Story = {
  args: {
    items: [
      {
        id: '5',
        groupId: 'resource',
        grantType: 'resource',
        title: 'Endring av navn (RF-1453)',
      },
    ],
  },
};

export const ResourceExtended: Story = {
  args: {
    items: [
      {
        id: '5',
        groupId: 'package',
        grantType: 'package',
        title: 'Folkeregisterets navnepakke',
        variant: 'default',
        controls: (
          <Button variant="ghost" size="xs">
            <PlusIcon />
            <span>Be om tilgang</span>
          </Button>
        ),
      },
      {
        id: '7',
        groupId: 'resource',
        grantType: 'resource',
        title: 'Endring av navn (RF-1453)',
      },
    ],
  },
};

export const Instance: Story = {
  args: {
    items: [
      {
        id: '5',
        groupId: 'instance',
        grantType: 'instance',
        title: 'Dialog title',
      },
    ],
  },
};

export const InstanceExtended: Story = {
  args: {
    groups: {
      package: {
        title: 'Tilgangspakker',
      },
      resource: {
        title: 'Tjeneste',
      },
      instance: {
        title: 'Delt fra innboks',
      },
    },
    items: [
      {
        id: '5',
        groupId: 'package',
        grantType: 'package',
        title: 'Folkeregisterets navnepakke',
        variant: 'default',
        controls: (
          <Button variant="ghost" size="xs">
            <PlusIcon />
            <span>Be om tilgang</span>
          </Button>
        ),
      },
      {
        id: '7',
        groupId: 'resource',
        grantType: 'resource',
        variant: 'default',
        title: 'Endring av navn (RF-1453)',
        controls: (
          <Button variant="ghost" size="xs">
            <PlusIcon />
            <span>Be om tilgang</span>
          </Button>
        ),
      },
      {
        id: '5',
        groupId: 'instance',
        grantType: 'instance',
        title: 'Dialog title',
      },
    ],
  },
};
