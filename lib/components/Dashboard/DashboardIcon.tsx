import { MenuItemIcon, type MenuItemIconProps } from '..';

export interface DashboardIconProps {
  loading?: boolean;
  icon?: MenuItemIconProps['icon'];
  theme?: MenuItemIconProps['theme'];
}

export const DashboardIcon = ({ loading, icon, theme }: DashboardIconProps) => {
  return <MenuItemIcon icon={icon} size="lg" theme={theme} loading={loading} />;
};
