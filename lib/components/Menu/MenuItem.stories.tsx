import type { Meta, StoryObj } from '@storybook/react';
import { MenuBase } from './MenuBase';
import { MenuItem } from './MenuItem';
import { MetaItem } from '../Meta';
import { LayoutBase, LayoutSidebar } from '../Layout';

const meta = {
  title: 'Menu/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    id: 'inbox',
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'inbox',
    title: 'Innboks',
  },
};

export const DefaultBadge: Story = {
  args: {
    icon: 'inbox',
    title: 'Innboks',
    badge: {
      label: '4',
    },
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    icon: 'inbox',
    title: 'Innboks',
    color: 'strong',
  },
};

export const AlertBadge: Story = {
  args: {
    size: 'lg',
    icon: 'inbox',
    title: 'Innboks',
    color: 'strong',
    badge: {
      color: 'alert',
      label: '4',
    },
  },
};

export const Person: Story = {
  args: {
    avatar: {
      type: 'person',
      name: 'Eirik Horneland',
    },
    title: 'Eirik Horneland',
  },
};

export const PersonGroup: Story = {
  args: {
    avatarGroup: {
      items: [
        {
          type: 'person',
          name: 'Eirik Horneland',
        },
        {
          type: 'person',
          name: 'Japhet Sery Larsen',
        },
        {
          type: 'person',
          name: 'Aune Heggebø',
        },
      ],
    },
    title: '3 personer',
  },
};

export const Company: Story = {
  args: {
    avatar: {
      type: 'company',
      name: 'Sportsklubben Brann',
    },
    title: 'Sportsklubben Brann',
  },
};

export const CompanyGroup: Story = {
  args: {
    avatarGroup: {
      defaultType: 'company',
      items: [
        {
          name: 'Sportsklubben Brann',
        },
        {
          name: 'Bergen Næringsråd',
        },
        {
          name: 'Bergen bar',
        },
      ],
    },
    title: '3 virksomheter',
  },
};

export const PersonAccount: Story = {
  args: {
    ...Person.args,
    size: 'lg',
    description: 'Født: XX.XX.XXXX',
  },
};

export const CompanyAccount: Story = {
  args: {
    ...Company.args,
    size: 'lg',
    description: 'Org nr.: XX.XX.XXXX',
  },
};

export const ThemesAndColors = () => {
  const themes = ['global', 'neutral', 'company', 'person', 'global-dark'];
  const colors = ['neutral', 'subtle', 'strong', 'company', 'person'];

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      {themes?.map((theme) => {
        return (
          <div style={{ flexGrow: 1 }}>
            <LayoutBase theme={theme}>
              <MenuBase>
                {colors?.map((color) => {
                  return (
                    <div>
                      <MenuItem icon="inbox" title="Title" color={color} />
                      <MetaItem>{theme + '/' + color}</MetaItem>
                    </div>
                  );
                })}
              </MenuBase>
            </LayoutBase>
          </div>
        );
      })}
    </div>
  );
};
