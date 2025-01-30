import { Icon, ProgressIcon, type SvgElement } from '../Icon';
import type { MetaItemSize } from './MetaItemBase';
import styles from './metaItemMedia.module.css';

interface MetaItemMediaProps {
  size?: MetaItemSize;
  progress?: number;
  icon?: SvgElement;
}

export const MetaItemMedia = ({ size = 'xs', icon, progress }: MetaItemMediaProps) => {
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
