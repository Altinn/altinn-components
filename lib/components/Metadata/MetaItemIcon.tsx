import { Icon, ProgressIcon, type SvgElement } from '../Icon';
import type { MetaItemSize } from './MetaItemBase';
import styles from './metaItemIcon.module.css';

interface MetaItemIconProps {
  size?: MetaItemSize;
  progress?: number;
  icon?: SvgElement;
}

export const MetaItemIcon = ({ size = 'xs', icon, progress }: MetaItemIconProps) => {
  if (!icon && typeof progress !== 'number') {
    return false;
  }

  return (
    <span className={styles.media} data-size={size}>
      {icon && <Icon svgElement={icon} className={styles.icon} />}
      {progress && <ProgressIcon value={progress} className={styles.icon} />}
    </span>
  );
};
