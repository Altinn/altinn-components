import styles from './menuListHeading.module.css';

export interface MenuListHeadingProps {
  ref?: React.Ref<HTMLLIElement>;
  title: string;
  level: number;
  index?: number;
  style?: React.CSSProperties;
}

export const MenuListHeading = ({ ref, title, level = 1, index, style }: MenuListHeadingProps) => {
  return (
    <li className={styles.heading} aria-level={level} data-index={index} ref={ref} style={style}>
      {title}
    </li>
  );
};
