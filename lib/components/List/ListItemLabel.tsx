import type { ElementType, ReactNode } from 'react';
import { Skeleton } from '../Skeleton';
import type { ListItemSize } from './ListItemBase';
import styles from './listItemLabel.module.css';

export interface ListItemLabelProps {
  id?: string;
  loading?: boolean;
  size?: ListItemSize;
  title?: string;
  titleAs?: ElementType;
  weight?: 'bold' | 'normal';
  description?: string;
  children?: ReactNode;
}

export const ListItemLabel = ({
  loading = false,
  size = 'sm',
  title,
  titleAs = 'h2',
  weight = 'bold',
  description,
  children,
  id,
}: ListItemLabelProps) => {
  const TitleComponent = titleAs;
  return (
    <span className={styles.label} data-size={size} id={id}>
      {children ? (
        children
      ) : (
        <>
          <Skeleton loading={loading}>
            <TitleComponent className={styles.title} data-size={size} data-weight={weight}>
              {title}
            </TitleComponent>
          </Skeleton>{' '}
          {description && (
            <Skeleton loading={loading}>
              <p className={styles.description} data-size={size}>
                {description}
              </p>
            </Skeleton>
          )}
        </>
      )}
    </span>
  );
};
