import { Button, type ButtonProps } from '../Button';
import styles from './pagination.module.css';

export interface PaginationButtonProps extends ButtonProps {
  selected?: boolean;
}

export interface PaginationProps {
  size?: ButtonProps['size'];
  variant?: ButtonProps['variant'];
  selectedVariant?: ButtonProps['variant'];
  prev?: ButtonProps;
  next?: ButtonProps;
  items?: PaginationButtonProps[];
  'aria-label': string;
}

export const Pagination = ({
  size,
  variant = 'tinted',
  selectedVariant = 'solid',
  prev,
  next,
  items = [],
  'aria-label': ariaLabel = 'Velg side',
}: PaginationProps) => {
  return (
    <nav className={styles.pagination} data-size={size} aria-label={ariaLabel}>
      <ul className={styles.list}>
        {prev && (
          <li>
            <Button size={size} aria-label={prev['aria-label'] || 'Forrige side'} variant={variant}>
              {prev.title || 'Forrige'}
            </Button>
          </li>
        )}

        {items?.map((item, index) => {
          return (
            <li aria-hidden={item.hidden} key={index}>
              {item.hidden ? (
                <Button as="div" size={size} variant="ghost">
                  …
                </Button>
              ) : (
                <Button {...item} size={size} variant={item?.selected ? selectedVariant : variant}>
                  {item.title}
                </Button>
              )}
            </li>
          );
        })}

        {next && (
          <li>
            <Button size={size} aria-label={next['aria-label'] || 'Forrige side'} variant={variant}>
              {next.title || 'Neste'}
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};
