import cx from 'classnames';
import styles from './menuList.module.css';

export interface MenuListGroupProps {
  ref?: React.Ref<HTMLLIElement>;
  hidden?: boolean;
  index?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const MenuListGroup = ({ ref, hidden, index, style, children }: MenuListGroupProps) => {
  return (
    <li ref={ref} className={cx(styles.group)} style={style} data-index={index} aria-hidden={hidden}>
      {children}
    </li>
  );
};
