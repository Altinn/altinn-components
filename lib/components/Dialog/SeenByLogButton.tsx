import { AvatarGroup, Button, type ButtonProps } from '..';
import type { SeenByLogItemProps } from './SeenByLogItem';
import styles from './seenByLogButton.module.css';

export interface SeenByLogButtonProps {
  as?: ButtonProps['as'];
  children?: ButtonProps['children'];
  onClick?: ButtonProps['onClick'];
  items?: SeenByLogItemProps[];
}

/**
 * SeenByLog Button
 */

export const SeenByLogButton = ({ as, items, children, onClick }: SeenByLogButtonProps) => {
  return (
    <Button variant="ghost" as={as} size="xs" className={styles.button} onClick={onClick}>
      {items && <AvatarGroup items={items} className={styles.avatarGroup} />}
      {children && (
        <span data-size="xs" className={styles.label}>
          {children}
        </span>
      )}
    </Button>
  );
};
