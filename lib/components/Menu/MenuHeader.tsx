import styles from './menuHeader.module.css';

export interface MenuHeaderProps {
  title: string;
}

export const MenuHeader = ({ title }: MenuHeaderProps) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
};
