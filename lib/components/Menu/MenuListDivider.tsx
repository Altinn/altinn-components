import styles from './menuListDivider.module.css';

export const MenuListDivider = () => {
  return (
    <li className={styles.item} role="presentation">
      <hr className={styles.divider} />
    </li>
  );
};
