'use client';
import cx from 'classnames';
import { useState } from 'react';
import styles from './avatar.module.css';
import { fromStringToColor } from './color';

export type AvatarType = 'company' | 'person' | 'custom';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarVariant = 'square' | 'circle';
export type AvatarColor = 'dark' | 'light';

/**
 * Props for the Avatar component.
 */
export interface AvatarProps {
  /** The name to display in the avatar. */
  name: string;
  /** The type of avatar. */
  type?: AvatarType;
  /** The size of the avatar. */
  size?: AvatarSize;
  /** The variant of the avatar shape. */
  variant?: AvatarVariant;
  /** The color theme of the avatar. */
  color?: AvatarColor;
  /** Additional class names to apply to the avatar. */
  className?: string;
  /** URL of the image to display in the avatar. */
  imageUrl?: string;
  /** Alt text for the image. */
  imageUrlAlt?: string;
  /** Whether to display an outline around the avatar. */
  outline?: boolean;
  /** Custom label to display inside the avatar. */
  customLabel?: string;
}

/**
 * Avatar component to display user or company avatars with various customization options.
 */
export const Avatar = ({
  type,
  size = 'sm',
  variant,
  color,
  name = 'Avatar',
  outline = false,
  imageUrl,
  imageUrlAlt,
  customLabel,
  className,
}: AvatarProps): JSX.Element => {
  const [hasImageError, setHasImageError] = useState<boolean>(false);

  const defaultVariant = type === 'person' ? 'circle' : 'square';
  const defaultColor = type === 'person' ? 'light' : 'dark';
  const appliedVariant = variant || defaultVariant;
  const appliedColor = color || defaultColor;

  const { backgroundColor, foregroundColor } = fromStringToColor(name, appliedColor);
  const initials = (name[0] ?? '').toUpperCase();
  const usingImageUrl = imageUrl && !hasImageError;

  const inlineStyles = !usingImageUrl
    ? {
        backgroundColor,
        color: foregroundColor,
      }
    : undefined;

  return (
    <div
      className={cx(styles.avatar, styles[appliedVariant], styles[size], { [styles.outline]: outline }, className)}
      style={inlineStyles}
      aria-hidden
    >
      {usingImageUrl ? (
        <img
          src={imageUrl}
          className={styles.image}
          alt={imageUrlAlt || imageUrl}
          onError={() => {
            setHasImageError(true);
          }}
        />
      ) : (
        <span>{customLabel || initials}</span>
      )}
    </div>
  );
};
