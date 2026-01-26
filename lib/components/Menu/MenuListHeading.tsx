import styles from './menuListHeading.module.css';

export interface MenuListHeadingProps {
  title: string;
  level: number;
}

export const MenuListHeading = ({ title, level = 1 }: MenuListHeadingProps) => {
  return (
    <li className={styles.heading} role="heading" aria-level={level}>
      {title}
    </li>
  );
};
