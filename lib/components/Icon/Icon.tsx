import cx from 'classnames';
import type { CSSProperties } from 'react';
import { type Color, type Size, Skeleton, type Theme } from '..';
import styles from './icon.module.css';

/**
 * Type definition for SVG React components.
 * Represents a React component that accepts SVG props and renders an SVG element.
 */
export type SvgElement = React.ComponentType<React.SVGProps<SVGSVGElement>>;

/**
 * Size options for icons. Extends the base Size type with undefined option.
 * Available sizes: 'xs', 'sm', 'md', 'lg', 'xl', or undefined for default sizing.
 */
export type IconSize = Size | undefined;

/**
 * Color options for icons. Uses the base Color type from the design system.
 * Available colors: 'inherit', 'accent', 'company', 'person', 'neutral', 'article',
 * 'success', 'warning', 'error', 'danger', 'info', 'alert'
 */
export type IconColor = Color;

/**
 * Theme options for icons. Uses the base Theme type from the design system.
 * Available themes: 'transparent', 'default', 'tinted', 'subtle', 'surface',
 * 'border', 'base', and their variants.
 */
export type IconTheme = Theme;

/**
 * Props for the Icon component.
 *
 * The Icon component supports two main ways of displaying icons:
 * 1. SVG components (recommended for icon libraries like @navikt/aksel-icons)
 * 2. Image URLs (for custom icons or external images)
 *
 * @example
 * ```tsx
 * // SVG icon from icon library
 * import { PlusIcon } from '@navikt/aksel-icons';
 * <Icon svgElement={PlusIcon} size="md" color="accent" />
 *
 * // Image-based icon
 * <Icon iconUrl="/path/to/icon.svg" altText="Custom icon" size="lg" />
 *
 * // Loading state
 * <Icon svgElement={LoadingIcon} loading={true} />
 *
 * // Themed icon
 * <Icon svgElement={CompanyIcon} color="company" theme="tinted" />
 * ```
 */
export interface IconProps {
  /**
   * SVG React component to render as the icon. This is the preferred method
   * for displaying icons from icon libraries. Takes precedence over iconUrl.
   */
  svgElement?: SvgElement | undefined | null | string;
  /**
   * URL to an image file to use as the icon. Used when svgElement is not provided.
   * Supports any image format that can be displayed in an img element.
   */
  iconUrl?: string;
  /**
   * Alternative text for the icon. Important for accessibility and screen readers.
   * Required when using iconUrl, recommended for svgElement.
   */
  altText?: string;
  /**
   * Whether the icon is in a loading state. When true, displays a circular
   * skeleton loader instead of the icon content.
   */
  loading?: boolean;
  /**
   * Size of the icon. Controls both width and height of the icon container.
   * If not specified, inherits size from parent or uses default sizing.
   */
  size?: IconSize;
  /**
   * Color theme for the icon. Affects the icon's color according to the
   * design system color palette.
   */
  color?: IconColor;
  /**
   * Visual theme variant for the icon. Affects background, border, and
   * other visual properties according to the design system.
   */
  theme?: IconTheme;
  /**
   * Additional CSS class names to apply to the icon container.
   */
  className?: string;
  /**
   * Custom CSS styles to apply to the icon container.
   */
  style?: CSSProperties;
}

/**
 * Type guard function to check if an unknown value is IconProps.
 *
 * Useful for runtime type checking when dealing with dynamic icon data
 * or when icons can be of different types (Icon, Avatar, etc.).
 *
 * @param icon - The value to check
 * @returns True if the value is a valid IconProps object
 *
 * @example
 * ```tsx
 * if (isIconProps(dynamicIcon)) {
 *   return <Icon {...dynamicIcon} />;
 * }
 * ```
 */
export const isIconProps = (icon: unknown): icon is IconProps => {
  return typeof icon === 'object' && icon !== null && ('svgElement' in icon || 'iconUrl' in icon);
};

/**
 * Icon component for displaying SVG icons and image-based icons.
 *
 * The Icon component provides a consistent way to display icons throughout the application
 * with support for theming, sizing, loading states, and accessibility. It can render both
 * SVG React components (preferred) and image URLs with automatic fallback handling.
 *
 * Key features:
 * - SVG component support (recommended for icon libraries)
 * - Image URL support for custom icons
 * - Consistent sizing and theming
 * - Loading states with skeleton placeholder
 * - Accessibility support with alt text
 * - Color and theme customization
 * - Automatic fallback to empty span if no icon provided
 *
 * The component prioritizes svgElement over iconUrl when both are provided.
 * If neither is provided, it renders an empty span element.
 *
 * @example
 * ```tsx
 * // Icon library usage (recommended)
 * import { HomeIcon, UserIcon, SettingsIcon } from '@navikt/aksel-icons';
 *
 * <Icon svgElement={HomeIcon} size="md" color="neutral" />
 * <Icon svgElement={UserIcon} size="lg" color="person" />
 * <Icon svgElement={SettingsIcon} size="sm" theme="subtle" />
 *
 * // Custom image icon
 * <Icon
 *   iconUrl="/assets/custom-icon.svg"
 *   altText="Custom feature icon"
 *   size="xl"
 *   color="accent"
 * />
 *
 * // Loading state
 * <Icon
 *   svgElement={LoadingIcon}
 *   loading={isLoading}
 *   size="md"
 * />
 *
 * // Styled icon
 * <Icon
 *   svgElement={AlertIcon}
 *   color="warning"
 *   className="custom-icon"
 *   style={{ marginRight: '8px' }}
 * />
 * ```
 *
 * @param props - The props for the Icon component
 * @returns A React element representing the icon
 */
export const Icon = ({
  loading,
  altText,
  svgElement: SvgElement,
  size,
  color,
  theme,
  iconUrl,
  className,
  style,
}: IconProps) => {
  if (SvgElement) {
    return (
      <span data-size={size} data-color={color} data-theme={theme} className={cx(styles.icon, className)} style={style}>
        <Skeleton loading={loading} variant="circle" className={styles.shape}>
          <span className={styles.shape} />
          <SvgElement aria-hidden="true" alt-label={altText} className={styles.svg} />
        </Skeleton>
      </span>
    );
  }

  if (iconUrl) {
    return (
      <span data-size={size} data-color={color} data-theme={theme} className={cx(styles.icon, className)} style={style}>
        <Skeleton loading={loading} variant="circle" className={styles.shape}>
          <span className={styles.shape} />
          <img src={iconUrl} alt={altText} className={styles.image} />
        </Skeleton>
      </span>
    );
  }

  return <span className={cx(styles.icon, className)} />;
};
