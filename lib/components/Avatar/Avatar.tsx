'use client';
import cx from 'classnames';
import { type CSSProperties, type ReactElement, useState } from 'react';
import { Skeleton } from '../Skeleton';
import styles from './avatar.module.css';
import { fromStringToColor } from './color';

export type AvatarType = 'company' | 'person' | 'custom';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type AvatarVariant = 'square' | 'circle';
type AvatarColor = 'dark' | 'light';

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

  innerContainerStyle?: CSSProperties;
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
  outline = false,
  imageUrl,
  imageUrlAlt,
  customLabel,
  loading,
  className,
  style = {},
  innerContainerStyle = {},
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
        <div className={styles.shape} style={innerContainerStyle}>
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
