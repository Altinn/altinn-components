import styles from './buttonGroupDivider.module.css';

export const ButtonGroupDivider = () => {
  return (
    <span aria-hidden="true" className={styles.divider}>
      <span className={styles.border} />
    </span>
  );
};
