import { Button, ButtonGroup, Heading } from '..';
import styles from './bulkHeader.module.css';

import { XMarkIcon } from '@navikt/aksel-icons';
import type { LayoutColor } from '../Layout';
import { BulkButton, type BulkButtonProps } from './BulkButton';

export interface BulkHeaderProps {
  color?: LayoutColor;
  dismissIconAltText?: string;
  title: string;
  hidden?: boolean;
  options?: BulkButtonProps[];
  dismissable?: boolean;
  onDismiss?: () => void;
}

export const BulkHeader = ({
  color = 'company',
  hidden = false,
  title,
  dismissable = true,
  dismissIconAltText = 'Close',
  options,
  onDismiss,
}: BulkHeaderProps) => {
  return (
    <header className={styles.header} aria-hidden={hidden} data-color={color}>
      <div className={styles.container}>
        <Heading size="md" className={styles.title}>
          {title}
        </Heading>

        <ButtonGroup>
          <div className={styles.options}>
            {options?.map((button, index) => (
              <BulkButton {...button} key={index} />
            ))}
          </div>

          {dismissable && (
            <Button onClick={onDismiss} className={styles.dismissButton} aria-label={dismissIconAltText}>
              <XMarkIcon style={{ fontSize: '1.5em' }} />
              <span data-size="sm">Avbryt</span>
            </Button>
          )}
        </ButtonGroup>
      </div>
    </header>
  );
};
