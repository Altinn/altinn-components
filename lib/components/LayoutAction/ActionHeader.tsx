import { Heading, IconButton } from '../';
import styles from './actionHeader.module.css';

import type { LayoutActionColor, LayoutActionTheme } from './LayoutAction';

export interface ActionHeaderProps {
  color?: LayoutActionColor;
  theme?: LayoutActionTheme;
  title: string;
  hidden?: boolean;
  dismissable?: boolean;
  onDismiss?: () => void;
}

export const ActionHeader = ({
  color,
  theme,
  hidden = false,
  title,
  dismissable = true,
  onDismiss,
}: ActionHeaderProps) => {
  return (
    <header className={styles.header} aria-hidden={hidden} data-color={color} data-theme={theme}>
      <Heading size="sm" className={styles.title}>
        {title}
      </Heading>
      {dismissable && (
        <IconButton icon="x-mark" color={color} variant="solid" onClick={onDismiss} className={styles.dismiss} />
      )}
    </header>
  );
};
