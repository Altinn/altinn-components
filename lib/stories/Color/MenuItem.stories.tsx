import type { Meta, StoryObj } from '@storybook/react';
import { LayoutBase, MetaItem, MenuBase, MenuItem, MenuItemColor, type LayoutTheme } from '../../components';

const meta = {
  title: 'Demo/Color/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    id: 'inbox',
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemesAndColors = () => {
  const themes: LayoutTheme[] = ['global', 'neutral', 'company', 'person', 'global-dark'];
  const colors: MenuItemColor[] = ['neutral', 'subtle', 'strong', 'company', 'person'];

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      {themes.map((theme) => {
        return (
          <div key={theme} style={{ flexGrow: 1 }}>
            <LayoutBase theme={theme}>
              <MenuBase>
                {colors.map((color) => {
                  return (
                    <div key={color}>
                      <MenuItem icon="inbox" title="Title" color={color} id="inbox" />
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
