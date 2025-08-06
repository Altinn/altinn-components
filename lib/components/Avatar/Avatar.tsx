'use client';
import cx from 'classnames';
import { type CSSProperties, type ReactElement, useState } from 'react';
import { Skeleton } from '../Skeleton';
import styles from './avatar.module.css';
import { fromStringToColor } from './color';

/**
 * Defines the type of avatar to display, which affects the visual appearance and behavior.
 * - 'person': Circular avatar with light background, typically used for individual users
 * - 'company': Square avatar with dark background, typically used for organizations
 * - 'custom': Allows for custom styling and behavior
 */
export type AvatarType = 'company' | 'person' | 'custom';

/**
 * Defines the size of the avatar component.
 * Available sizes from smallest to largest: xs, sm, md, lg, xl
 */
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type AvatarVariant = 'square' | 'circle';
type AvatarColor = 'dark' | 'light';

/**
 * Props for the Avatar component.
 *
 * @example
 * ```tsx
 * // Basic person avatar with initials
 * <Avatar name="John Doe" />
 *
 * // Company avatar with custom size
 * <Avatar name="Acme Corp" type="company" size="lg" />
 *
 * // Avatar with image
 * <Avatar
 *   name="Jane Smith"
 *   imageUrl="/path/to/image.jpg"
 *   imageUrlAlt="Jane Smith's profile picture"
 * />
 *
 * // Loading state
 * <Avatar name="Loading User" loading />
 * ```
 */
export interface AvatarProps {
  /**
   * The name to display in the avatar. Used to generate initials when no image is provided,
   * and for generating a consistent background color. Also used as fallback for accessibility.
   */
  name: string;
  /**
   * The type of avatar which determines the visual style and shape.
   * - 'person' (default): Circular avatar with light background
   * - 'company': Square avatar with dark background
   * - 'custom': Allows for custom styling
   */
  type?: AvatarType;
  /**
   * The size of the avatar. Controls both width and height.
   * Available sizes: 'xs', 'sm', 'md', 'lg', 'xl'
   */
  size?: AvatarSize;
  /**
   * Additional CSS class names to apply to the avatar container.
   * Useful for custom styling or layout adjustments.
   */
  className?: string;
  /**
   * URL of the image to display in the avatar. When provided, the image takes precedence
   * over initials. If the image fails to load, falls back to showing initials.
   */
  imageUrl?: string;
  /**
   * Alt text for the avatar image. If not provided, defaults to the imageUrl value.
   * Important for accessibility and screen readers.
   */
  imageUrlAlt?: string;
  /**
   * Whether to display a border outline around the avatar.
   * Useful for highlighting or distinguishing the avatar in certain contexts.
   */
  outline?: boolean;
  /**
   * Custom text label to display inside the avatar instead of auto-generated initials.
   * Overrides the default behavior of showing the first letter of the name.
   */
  customLabel?: string;
  /**
   * Custom CSS styles to apply to the avatar container.
   * Note: Background color and text color may be overridden by the component's color logic.
   */
  style?: CSSProperties;
  /**
   * Whether the avatar is in a loading state. When true, displays a skeleton loader
   * instead of the avatar content.
   */
  loading?: boolean;
}

export const isAvatarProps = (icon: unknown): icon is AvatarProps => {
  return typeof icon === 'object' && icon !== null && 'name' in icon;
};

/**
 * Avatar component to display user or company avatars with various customization options.
 *
 * The Avatar component automatically generates initials and background colors based on the provided name,
 * supports image display with fallback to initials, and offers different visual styles for persons vs companies.
 * It includes loading states, accessibility features, and extensive customization options.
 *
 * Key features:
 * - Automatic initial generation from name
 * - Consistent color generation based on name
 * - Image support with error handling and fallback
 * - Different styles for person (circular) vs company (square) avatars
 * - Loading skeleton state
 * - Accessibility support with proper alt text
 * - Customizable sizing and styling
 *
 * @example
 * ```tsx
 * // Simple person avatar with auto-generated initials and color
 * <Avatar name="Alice Johnson" />
 *
 * // Company avatar with larger size
 * <Avatar name="Tech Corp" type="company" size="lg" />
 *
 * // Avatar with profile image
 * <Avatar
 *   name="Bob Wilson"
 *   imageUrl="https://example.com/bob.jpg"
 *   imageUrlAlt="Bob Wilson's profile photo"
 *   size="md"
 * />
 *
 * // Avatar with custom label and outline
 * <Avatar
 *   name="Admin User"
 *   customLabel="AD"
 *   outline={true}
 *   size="sm"
 * />
 *
 * // Loading state
 * <Avatar name="Loading..." loading={true} size="lg" />
 *
 * // Custom styling
 * <Avatar
 *   name="Custom User"
 *   className="my-custom-avatar"
 *   style={{ border: '2px solid red' }}
 * />
 * ```
 *
 * @param props - The props for the Avatar component
 * @returns A React element representing the avatar
 */
export const Avatar = ({
  type = 'person',
  size,
  name = 'Avatar',
  outline = false,
  imageUrl,
  imageUrlAlt,
  customLabel,
  loading,
  className,
  style = {},
}: AvatarProps): ReactElement => {
  const [hasImageError, setHasImageError] = useState<boolean>(false);
  const variant: AvatarVariant = type === 'person' ? 'circle' : 'square';
  const color: AvatarColor = type === 'person' ? 'light' : 'dark';

  const { backgroundColor, foregroundColor } = fromStringToColor(name, color);
  const initials = (name[0] ?? '').toUpperCase();
  const usingImageUrl = imageUrl && !hasImageError;

  const inlineStyles =
    !loading && !usingImageUrl
      ? {
          ...style,
          backgroundColor,
          color: foregroundColor,
        }
      : style;

  return (
    <div
      className={cx(styles.avatar, { [styles.outline]: outline }, className)}
      style={inlineStyles}
      data-variant={variant}
      data-size={size}
      data-outline={outline}
      aria-hidden
    >
      <Skeleton loading={loading} className={styles.shape} variant="circle">
        <div className={styles.shape}>
          {usingImageUrl && (
            <img
              src={imageUrl}
              className={styles.image}
              alt={imageUrlAlt || imageUrl}
              onError={() => {
                setHasImageError(true);
              }}
            />
          )}
        </div>
        {!usingImageUrl && <span className={styles.label}>{customLabel || initials}</span>}
      </Skeleton>
    </div>
  );
};
