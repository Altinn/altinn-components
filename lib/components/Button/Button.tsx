import cx from 'classnames';
import { ButtonBase, type ButtonBaseProps, ButtonIcon, type ButtonIconProps, ButtonLabel, type ButtonSize } from '..';
import styles from './button.module.css';

/**
 * Props for the Button component.
 *
 * The Button component extends ButtonBaseProps and adds additional functionality
 * for icons, labels, and loading states while maintaining all the base button capabilities.
 *
 * @example
 * ```tsx
 * // Basic button
 * <Button>Click me</Button>
 *
 * // Button with icon
 * <Button icon={PlusIcon}>Add Item</Button>
 *
 * // Button with different variants and sizes
 * <Button variant="outline" size="lg">Large Outline Button</Button>
 *
 * // Loading button
 * <Button loading={true}>Processing...</Button>
 *
 * // Button as link
 * <Button href="/dashboard">Go to Dashboard</Button>
 * ```
 */
export interface ButtonProps extends Partial<ButtonBaseProps> {
  /**
   * Icon to display in the button. Can be an SVG component, Icon props, Avatar props,
   * AvatarGroup props, or any React node. When provided, the icon is rendered alongside the label.
   */
  icon?: ButtonIconProps['icon'];
  /**
   * Size of the icon. If not specified, defaults to the labelSize or inherits from the button size.
   * Available sizes: 'xs', 'sm', 'md', 'lg', 'custom'
   */
  iconSize?: ButtonSize;
  /**
   * Accessible label for the button. Provides additional context for screen readers.
   * Use when the button's visual content doesn't fully describe its purpose.
   */
  ariaLabel?: string;
  /**
   * Whether the button is in a loading state. When true, the button becomes disabled
   * and shows only the label/children without the icon, with aria-busy attribute set.
   */
  loading?: boolean;
  /**
   * Text label for the button. Alternative to using children. If both label and children
   * are provided, children takes precedence.
   */
  label?: string;
  /**
   * Size of the label text. Controls the typography size of the button text.
   * Available sizes: 'xs', 'sm', 'md', 'lg', 'custom'
   */
  labelSize?: ButtonSize;
}

/**
 * Button component for triggering actions and navigation.
 *
 * The Button component is a versatile interactive element that supports various visual styles,
 * sizes, icons, loading states, and can function as both a button and a link. It builds upon
 * the ButtonBase component while adding convenient props for common use cases.
 *
 * Key features:
 * - Multiple variants: solid, outline, dotted, text, tinted, link
 * - Flexible sizing from xs to lg
 * - Icon support with automatic sizing
 * - Loading states with automatic disabling
 * - Link functionality via href prop
 * - Full accessibility support
 * - Customizable colors and themes
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Save Changes</Button>
 *
 * // With icon and variant
 * <Button icon={SaveIcon} variant="solid" color="success">
 *   Save Document
 * </Button>
 *
 * // Loading state
 * <Button loading={isSubmitting} disabled={!isValid}>
 *   {isSubmitting ? 'Saving...' : 'Save'}
 * </Button>
 *
 * // As a link
 * <Button href="/profile" variant="link">
 *   View Profile
 * </Button>
 *
 * // Icon button with custom sizes
 * <Button
 *   icon={EditIcon}
 *   iconSize="sm"
 *   labelSize="md"
 *   variant="outline"
 * >
 *   Edit
 * </Button>
 *
 * // Selected state for toggle buttons
 * <Button selected={isActive} variant="tinted">
 *   Toggle Feature
 * </Button>
 * ```
 *
 * @param props - The props for the Button component
 * @returns A React element representing the button
 */
export const Button = ({
  variant = 'solid',
  color,
  size,
  selected = false,
  icon,
  iconSize,
  href,
  label,
  labelSize,
  children,
  className,
  loading,
  ariaLabel,
  ...rest
}: ButtonProps) => {
  if (loading) {
    return (
      <ButtonBase
        variant={variant}
        aria-busy
        color={color}
        size={size}
        selected={selected}
        href={href}
        className={cx(styles.button, className)}
        {...rest}
        disabled
      >
        <ButtonLabel size={labelSize}>{children || label}</ButtonLabel>
      </ButtonBase>
    );
  }

  return (
    <ButtonBase
      variant={variant}
      color={color}
      size={size}
      ariaLabel={ariaLabel}
      selected={selected}
      href={href}
      className={cx(styles.button, className)}
      {...rest}
    >
      {icon && <ButtonIcon icon={icon} size={iconSize || labelSize} />}
      <ButtonLabel className={styles.label} size={labelSize}>
        {children || label}
      </ButtonLabel>
    </ButtonBase>
  );
};
