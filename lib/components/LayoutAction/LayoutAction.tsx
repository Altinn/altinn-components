import type { ReactNode } from 'react';
import { ActionFooter, ActionHeader, LayoutBase, PageMenu, type PageMenuProps } from '../';

export type LayoutActionColor = 'accent';
export type LayoutActionTheme = 'base';

export interface LayoutActionProps {
  color?: LayoutActionColor;
  theme?: LayoutActionTheme;
  hidden?: boolean;
  title: string;
  menu?: PageMenuProps;
  dismissable?: boolean;
  onDismiss?: () => void;
  children?: ReactNode;
}

export const LayoutAction = ({
  color = 'accent',
  theme = 'base',
  hidden,
  title,
  menu,
  dismissable,
  onDismiss,
  children,
}: LayoutActionProps) => {
  return (
    <LayoutBase>
      <ActionHeader
        theme={theme}
        color={color}
        hidden={hidden}
        title={title}
        dismissable={dismissable}
        onDismiss={onDismiss}
      />
      {children}
      <ActionFooter hidden={hidden}>{menu && <PageMenu {...menu} theme={theme} color={color} />}</ActionFooter>
    </LayoutBase>
  );
};
