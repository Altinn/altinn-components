import { Heading, IconButton } from '../';
import styles from './actionHeader.module.css';

import { XMarkIcon } from '@navikt/aksel-icons';
import type { LayoutActionColor, LayoutActionTheme } from './LayoutAction';

export interface ActionHeaderProps {
  color?: LayoutActionColor;
  theme?: LayoutActionTheme;
  dismissIconAltText?: string;
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
  dismissIconAltText = 'Close',
  onDismiss,
}: ActionHeaderProps) => {
  return (
    <header className={styles.header} aria-hidden={hidden} data-color={color} data-theme={theme}>
      <Heading size="sm" className={styles.title}>
        {title}
      </Heading>
      {dismissable && (
        <IconButton
          icon={XMarkIcon}
          color={color}
          variant="solid"
          onClick={onDismiss}
          className={styles.dismiss}
          iconAltText={dismissIconAltText}
        />
      )}
    </header>
  );
};
