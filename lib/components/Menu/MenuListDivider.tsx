import styles from './menuListDivider.module.css';

export interface MenuListDividerProps {
  ref?: React.Ref<HTMLLIElement>;
  style?: React.CSSProperties;
  index?: number;
}

export const MenuListDivider = ({ ref, style, index }: MenuListDividerProps) => {
  return (
    <li className={styles.item} role="presentation" ref={ref} style={style} data-index={index}>
      <hr className={styles.divider} />
    </li>
  );
};
