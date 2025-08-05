import { MagnifyingGlassIcon, XMarkIcon } from '@navikt/aksel-icons';
import { FieldBase, type FieldBaseProps, Icon, IconButton, Input, type InputProps } from '..';

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
    <FieldBase size={size} color={color} label={label} className={className}>
      <div className={styles.field}>
        <Input {...rest} type="search" value={value} className={styles.input} />
        <Icon svgElement={MagnifyingGlassIcon} className={styles.icon} />
        {onClear && !!value && (
          <IconButton
            icon={XMarkIcon}
            variant="solid"
            size="custom"
            className={styles.clear}
            onClick={onClear}
            iconAltText={clearButtonAltText}
          />
        )}
      </div>
    </FieldBase>
  );
};
