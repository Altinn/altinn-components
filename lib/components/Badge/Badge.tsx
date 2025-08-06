import cx from 'classnames';
import type { ReactNode } from 'react';
import type { Color, Theme } from '..';
import styles from './badge.module.css';

/**
 * Color options for badges. Uses the base Color type from the design system.
 * Available colors: 'inherit', 'accent', 'company', 'person', 'neutral', 'article',
 * 'success', 'warning', 'error', 'danger', 'info', 'alert'
 */
export type BadgeColor = Color;

/**
 * Visual variant options for badges.
 * - 'subtle': Soft background with subtle contrast (default)
 * - 'outline': Border-only style with transparent background
 * - 'tinted': Light background with stronger contrast
 * - 'base': Solid background with high contrast
 * - 'text': Text-only style without background or border
 */
export type BadgeVariant = 'subtle' | 'outline' | 'tinted' | 'base' | 'text';

/**
 * @deprecated Theme is deprecated, use variant instead for consistent styling.
 * This type is maintained for backward compatibility.
 */
export type BadgeTheme = Theme;

/**
 * Size options for badges.
 * - 'sm': Standard size for most use cases (default)
 * - 'xs': Extra small size, automatically hidden from screen readers
 */
export type BadgeSize = 'sm' | 'xs';

/**
 * Props for the Badge component.
 *
 * Badges are small status indicators used to highlight important information,
 * show counts, or indicate states. They can display text, numbers, or custom content.
 *
 * @example
 * ```tsx
 * // Basic text badge
 * <Badge label="New" color="success" />
 *
 * // Number badge for counts
 * <Badge label={42} color="accent" variant="base" />
 *
 * // Status indicators
 * <Badge label="Active" color="success" variant="subtle" />
 * <Badge label="Pending" color="warning" variant="outline" />
 * <Badge label="Error" color="danger" variant="tinted" />
 *
 * // Small badges (hidden from screen readers)
 * <Badge label="!" size="xs" color="error" />
 *
 * // Custom content
 * <Badge color="info">
 *   <Icon svgElement={InfoIcon} size="xs" />
 *   Info
 * </Badge>
 * ```
 */
export interface BadgeProps {
  /**
   * Text or number to display in the badge. Can be a string or number.
   * If both label and children are provided, label takes precedence.
   */
  label?: string | number;
  /**
   * Color theme for the badge. Affects background, text, and border colors
   * according to the design system color palette.
   */
  color?: BadgeColor;
  /**
   * Visual style variant of the badge. Controls the appearance and emphasis level.
   * @default 'subtle'
   */
  variant?: BadgeVariant;
  /**
   * @deprecated Use variant instead. Theme prop is maintained for backward compatibility
   * but may be removed in future versions.
   */
  theme?: BadgeTheme;
  /**
   * Size of the badge. 'xs' badges are automatically hidden from screen readers.
   * @default 'sm'
   */
  size?: BadgeSize;
  /**
   * Additional CSS class names to apply to the badge container.
   */
  className?: string;
  /**
   * Custom content to display in the badge. Used when label is not provided.
   * Allows for more complex badge content like icons or formatted text.
   */
  children?: ReactNode;
}

/**
 * Badge component for displaying status indicators, counts, and labels.
 *
 * Badges are versatile UI elements used to highlight important information, show counts,
 * indicate status, or provide quick visual cues. They support various visual styles,
 * colors, and sizes to fit different use cases and design requirements.
 *
 * Key features:
 * - Multiple visual variants (subtle, outline, tinted, base, text)
 * - Full color palette support from the design system
 * - Two size options (sm, xs)
 * - Support for text, numbers, and custom content
 * - Automatic accessibility handling for small badges
 * - Backward compatibility with deprecated theme prop
 *
 * Common use cases:
 * - Notification counts (unread messages, alerts)
 * - Status indicators (active, pending, error)
 * - Category labels and tags
 * - Feature flags and new feature highlights
 * - Priority levels and importance markers
 *
 * @example
 * ```tsx
 * // Notification badges
 * <Badge label={5} color="accent" variant="base" />
 * <Badge label="99+" color="danger" variant="base" />
 *
 * // Status badges
 * <Badge label="Online" color="success" variant="subtle" />
 * <Badge label="Away" color="warning" variant="outline" />
 * <Badge label="Offline" color="neutral" variant="text" />
 *
 * // Category/tag badges
 * <Badge label="Important" color="error" variant="tinted" />
 * <Badge label="Draft" color="neutral" variant="outline" />
 * <Badge label="Published" color="success" variant="subtle" />
 *
 * // Custom content badges
 * <Badge color="info" variant="subtle">
 *   <Icon svgElement={StarIcon} size="xs" />
 *   Featured
 * </Badge>
 *
 * // Small indicator badges (hidden from screen readers)
 * <Badge size="xs" color="danger" variant="base">!</Badge>
 * ```
 *
 * @param props - The props for the Badge component
 * @returns A React element representing the badge
 */
export const Badge = ({ label, color, variant = 'subtle', theme, size = 'sm', className, children }: BadgeProps) => {
  return (
    <span
      className={cx(styles.badge, className)}
      data-color={color}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      {...(size === 'xs' && { 'aria-hidden': true })}
    >
      <span className={styles.label}>{label || children}</span>
    </span>
  );
};
