import { MagnifyingGlassIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, FieldBase, type FieldBaseProps, Icon, Input, type InputProps } from '..';

import cx from 'classnames';
import styles from './searchField.module.css';

export interface SearchFieldProps extends InputProps {
  className?: string;
  value?: InputProps['value'];
  label?: FieldBaseProps['label'];
  clearButtonAltText?: string;
  onClear?: () => void;
}

export const SearchField = ({
  className,
  size,
  color = 'neutral',
  label,
  value,
  onClear,
  clearButtonAltText = 'Clear search',
  ...rest
}: SearchFieldProps) => {
  return (
    <FieldBase size={size} color={color} label={label} className={cx(styles.field, className)}>
      <div className={styles.container}>
        <Input {...rest} type="search" value={value} className={styles.input} />
        <Icon svgElement={MagnifyingGlassIcon} className={styles.icon} />
        {onClear && !!value && (
          <span className={styles.clear}>
            <Button
              rounded
              variant="tinted"
              className={styles.clearButton}
              onClick={onClear}
              aria-label={clearButtonAltText}
            >
              <XMarkIcon />
            </Button>
          </span>
        )}
      </div>
    </FieldBase>
  );
};
