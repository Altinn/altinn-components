import { ChevronLeftIcon, ChevronRightIcon } from '@navikt/aksel-icons';
import { Button } from '../Button';
import styles from './datepickerHeader.module.css';

export interface DatepickerHeaderProps {
  title?: string;
  prevLabel?: string;
  nextLabel?: string;
  onPrev: () => void;
  onNext: () => void;
}

export const DatepickerHeader = ({
  title,
  prevLabel = 'Forrige måned',
  nextLabel = 'Neste måned',
  onNext,
  onPrev,
}: DatepickerHeaderProps) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <nav className={styles.nav}>
        <Button icon size="xs" variant="ghost" onClick={onPrev} aria-label={prevLabel}>
          <ChevronLeftIcon aria-hidden="true" />
        </Button>
        <Button icon size="xs" variant="ghost" onClick={onNext} aria-label={nextLabel}>
          <ChevronRightIcon aria-hidden="true" />
        </Button>
      </nav>
    </header>
  );
};
