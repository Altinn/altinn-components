import type { MetaItemSize } from "./MetaItemBase";
import { Icon, ProgressIcon, type IconName } from "../Icon";
import styles from "./metaItem.module.css";

interface MetaItemMediaProps {
  size?: MetaItemSize;
  progress?: number;
  icon?: IconName;
}

export const MetaItemMedia = ({
  size = "sm",
  icon,
  progress,
}: MetaItemMediaProps) => {
  if (!icon && !progress) {
    return false;
  }

  return (
    <span className={styles.media} data-size={size}>
      {icon ? <Icon name={icon} className={styles?.icon} /> : ""}
      {progress ? (
        <ProgressIcon value={progress} className={styles?.icon} />
      ) : (
        ""
      )}
    </span>
  );
};
