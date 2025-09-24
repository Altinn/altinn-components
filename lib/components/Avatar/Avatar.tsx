'use client';
import cx from 'classnames';
import { type CSSProperties, type ReactElement, useState } from 'react';
import { Skeleton } from '../Skeleton';
import styles from './avatar.module.css';
import { fromStringToColor } from './color';

export type AvatarType = 'company' | 'person' | 'custom';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type AvatarShape = 'square' | 'circle';
export type AvatarColor = 'dark' | 'light';
export type AvatarVariant = 'solid' | 'outline';

/**
 * Props for the Avatar component.
 */
export interface AvatarProps {
  /** Optional Id */
  id?: string;
  /** The name to display in the avatar. */
  name: string;
  /** The type of avatar. */
  type?: AvatarType;
  /** Avatar shape. */
  shape?: AvatarColor;
  /** Avatar color. */
  color?: AvatarColor;
  /** The type of avatar. */
  variant?: AvatarVariant;
  /** The size of the avatar. */
  size?: AvatarSize;
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
  /** Custom styles. */
  style?: CSSProperties;
  /** Whether the avatar is loading. */
  loading?: boolean;
}

export const isAvatarProps = (icon: unknown): icon is AvatarProps => {
  return typeof icon === 'object' && icon !== null && 'name' in icon;
};

/**
 * Avatar component to display user or company avatars with various customization options.
 */
export const Avatar = ({
  type = 'person',
  size,
  name = 'Avatar',
  shape,
  color,
  variant = 'solid',
  outline = true,
  imageUrl,
  imageUrlAlt,
  customLabel,
  loading,
  className,
  style = {},
}: AvatarProps): ReactElement => {
  const [hasImageError, setHasImageError] = useState<boolean>(false);
  const applicableShape: AvatarShape = shape || type === 'person' ? 'circle' : 'square';
  const applicableColor: AvatarColor = color || type === 'person' ? 'light' : 'dark';

  const { backgroundColor, foregroundColor } = fromStringToColor(name, applicableColor);
  const initials = (name[0] ?? '').toUpperCase();
  const usingImageUrl = imageUrl && !hasImageError;

  const inlineStyles =
    !loading && !usingImageUrl
      ? {
          ...style,
          backgroundColor: variant === 'outline' ? foregroundColor : backgroundColor,
          color: variant === 'outline' ? backgroundColor : foregroundColor,
        }
      : style;

  return (
    <div
      className={cx(styles.avatar, { [styles.outline]: outline }, className)}
      style={inlineStyles}
      data-shape={applicableShape}
      data-size={size}
      data-outline={outline}
      aria-hidden
    >
      <Skeleton loading={loading} className={styles.shape} variant="circle">
        <div className={styles.shape} data-variant={variant}>
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
