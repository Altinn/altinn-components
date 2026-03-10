import { Button, Heading } from '..';
import styles from './bulkHeader.module.css';

import { XMarkIcon } from '@navikt/aksel-icons';
import type { LayoutColor } from '../Layout';

export interface BulkHeaderProps {
  color?: LayoutColor;
  dismissIconAltText?: string;
  title: string;
  hidden?: boolean;
  dismissable?: boolean;
  onDismiss?: () => void;
}

export const BulkHeader = ({
  color = "company",
  hidden = false,
  title,
  dismissable = true,
  dismissIconAltText = 'Close',
  onDismiss,
}: BulkHeaderProps) => {
  return (
    <header className={styles.header} aria-hidden={hidden} data-color={color}>
      <div className={styles.container}>
        <Heading size="md" className={styles.title}>
          {title}
        </Heading>
        {dismissable && (
          <Button
            color={color}
            variant="ghost"
            onClick={onDismiss}
            className={styles.dismiss}
            aria-label={dismissIconAltText}
          >
            <XMarkIcon style={{ fontSize: '1.5em' }} />
          </Button>
        )}
      </div>
    </header>
  );
};
