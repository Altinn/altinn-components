import styles from './menuHeader.module.css';

export interface MenuHeaderProps {
  title: string;
}

export const MenuHeader = ({ title }: MenuHeaderProps) => {
  return (
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
