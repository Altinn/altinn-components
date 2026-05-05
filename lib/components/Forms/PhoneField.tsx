import { FieldBase, type FieldBaseProps, Input, type InputProps } from '..';
import { Select } from './Select';
import styles from './phoneField.module.css';

interface PhoneFieldPrefixOption {
  label: string;
  value: string;
}

export interface PhoneFieldProps extends InputProps {
  label?: FieldBaseProps['label'];
  helperText?: FieldBaseProps['helperText'];
  countryCodeOptions?: PhoneFieldPrefixOption[];
  onCountryCodeChange?: (value: string) => void;
}

export const PhoneField = ({
  size,
  color,
  label,
  helperText,
  countryCodeOptions,
  onCountryCodeChange,
  ...rest
}: PhoneFieldProps) => {
  return (
    <FieldBase size={size} color={color} label={label} helperText={helperText}>
      <div className={styles.container}>
        {countryCodeOptions && (
          <Select
            className={styles.countryCode}
            name="prefix"
            value={rest.value}
            onChange={(event) => onCountryCodeChange?.(event.target.value)}
          >
            {countryCodeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        )}
        <Input {...rest} className={styles.phoneNumber} />
      </div>
    </FieldBase>
  );
};
