import type { Meta, StoryObj } from '@storybook/react';
import { Flex, MenuBase, MenuItem, MetaItem } from '..';
import type { MenuItemColor, MenuItemTheme } from '..';

const meta = {
  title: 'Menu/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    id: 'inbox',
    onClick: () => {},
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

export const Badge: Story = {
  args: {
    icon: 'inbox',
    title: 'Innboks',
    badge: {
      label: '4',
    },
  },
};

export const BadgeXs: Story = {
  args: {
    icon: 'inbox',
    title: 'Innboks',
    badge: {
      size: 'xs',
      label: '4',
    },
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    icon: 'inbox',
    title: 'Innboks',
    theme: 'base',
  },
};

export const AlertBadge: Story = {
  args: {
    size: 'lg',
    icon: 'inbox',
    title: 'Innboks',
    theme: 'base',
    badge: {
      label: '4',
    },
    alertBadge: {
      label: '14 uleste',
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
  const colors: MenuItemColor[] = ['neutral', 'company', 'person'];
  const themes: MenuItemTheme[] = ['default', 'surface', 'base', 'transparent'];

  return (
    <Flex>
      {themes.map((theme) => {
        return (
          <Flex style={{ flexGrow: 1 }} key={theme}>
            <MenuBase>
              {colors.map((color) => {
                return (
                  <div key={color}>
                    <MenuItem icon="inbox" title="Title" color={color} theme={theme} id="inbox" />
                    <MetaItem>{'theme:' + theme + '/' + 'color:' + color}</MetaItem>
                  </div>
                );
              })}
            </MenuBase>
          </Flex>
        );
      })}
    </Flex>
  );
};
