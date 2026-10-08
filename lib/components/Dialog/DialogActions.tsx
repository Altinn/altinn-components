import { Button, type ButtonProps } from '..';
import styles from './dialogAction.module.css';

export type DialogButtonPriority = 'primary' | 'secondary' | 'tertiary';

export interface DialogActionButtonProps extends ButtonProps {
  id: string;
  priority: DialogButtonPriority;
  label: string;
  onClick?: () => void;
}

export interface DialogActionsProps {
  /** List of actions. All visible actions are rendered as buttons, sorted by priority. */
  items: DialogActionButtonProps[];
}

const priorityOrder: DialogButtonPriority[] = ['primary', 'secondary', 'tertiary'];

export const DialogActions = ({ items }: DialogActionsProps) => {
  const visibleItems = (items || [])
    .filter((item) => !item.hidden)
    .sort((a, b) => priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority));

  if (!visibleItems.length) {
    return null;
  }

  return (
    <section className={styles.action}>
      {visibleItems.map(({ id, priority, label, ...props }) => (
        <Button key={id} variant={priority === 'primary' ? 'solid' : 'outline'} size="md" {...props}>
          {label}
        </Button>
      ))}
    </section>
  );
};
