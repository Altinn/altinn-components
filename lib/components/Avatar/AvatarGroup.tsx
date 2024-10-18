import cx from "classnames";
import { Avatar, type AvatarProps, type AvatarType, type AvatarSize } from ".";
import styles from "./avatarGroup.module.css";

export interface AvatarGroupProps {
  items?: AvatarProps[];
  maxItems?: number;
  type?: AvatarType;
  size?: AvatarSize;
  className?: string;
}

export const AvatarGroup = ({
  items,
  maxItems = 4,
  type,
  size = "sm",
  className,
}: AvatarGroupProps) => {
  const slicedItems = items?.slice(0, maxItems);

  if (items.length === 0) {
    return <div className={styles.avatarGroup} />;
  }

  return (
    <div
      className={cx(styles.group, styles[size], className)}
      data-count={slicedItems?.length}
    >
      {slicedItems?.map((avatar, index) => {
        const lastLegalAvatarReached = index === maxItems - 1;
        return (
          <div className={styles.item} key={avatar.name}>
            <Avatar
              name={avatar.name}
              customLabel={
                lastLegalAvatarReached ? items?.length.toString() : undefined
              }
              imageUrl={avatar.imageUrl}
              imageUrlAlt={avatar.imageUrlAlt}
              type={avatar?.type || type}
              size={size}
              outline
            />
          </div>
        );
      })}
    </div>
  );
};
