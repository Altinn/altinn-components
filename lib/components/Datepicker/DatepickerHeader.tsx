import { ChevronLeftIcon, ChevronRightIcon } from '@navikt/aksel-icons';
import { IconButton } from '../Button';
import styles from './datepickerHeader.module.css';

export interface DatepickerHeaderProps {
  title?: string;
  onPrev: () => void;
  onNext: () => void;
}

export const DatepickerHeader = ({ title, onNext, onPrev }: DatepickerHeaderProps) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <nav className={styles.nav}>
        <IconButton icon={ChevronLeftIcon} size="sm" variant="text" onClick={onPrev} iconAltText="prev icon" />
        <IconButton icon={ChevronRightIcon} size="sm" variant="text" onClick={onNext} iconAltText="next icon" />
      </nav>
    </header>
  );
};
