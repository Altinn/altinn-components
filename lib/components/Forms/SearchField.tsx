import { MagnifyingGlassIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, FieldBase, type FieldBaseProps, Icon, Input, type InputProps } from '..';

import cx from 'classnames';
import styles from './searchField.module.css';

export interface SearchFieldProps extends InputProps {
  className?: string;
  collapsible?: boolean;
  value?: InputProps['value'];
  label?: FieldBaseProps['label'];
  clearButtonAltText?: string;
  onClear?: () => void;
}

export const SearchField = ({
  className,
  collapsible,
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
        <Input
          {...rest}
          type="search"
          value={value}
          className={styles.input}
          data-collapsible={collapsible}
          autoCapitalize="off"
          autoComplete="off"
        />
        <Icon svgElement={MagnifyingGlassIcon} className={styles.icon} />
        {onClear && !!value && (
          <span className={styles.clear}>
            <Button
              size="xs"
              rounded
              icon
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
