import { Button, Heading } from '../';
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
        <Button
          color={color}
          variant="outline"
          onClick={onDismiss}
          className={styles.dismiss}
          aria-label={dismissIconAltText}
        >
          <XMarkIcon style={{ fontSize: '1.5em' }} />
        </Button>
      )}
    </header>
  );
};
