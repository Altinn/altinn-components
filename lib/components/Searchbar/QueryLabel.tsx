import styles from './queryLabel.module.css';
export type QueryItemType = 'search' | 'filter';
export type QueryItemSize = 'sm' | 'xs';

export interface QueryItemProps {
  type?: QueryItemType;
  value?: string;
  label?: string;
}

export const QueryItem = ({ type = 'search', label }: QueryItemProps) => {
  return (
    <span className={styles.item} data-type={type}>
      {label}
    </span>
  );
};

export interface QueryLabelProps {
  params?: QueryItemProps[];
  size?: QueryItemSize;
}

export const QueryLabel = ({ params = [], size = 'sm' }: QueryLabelProps) => {
  return (
    <div className={styles.label} data-size={size}>
      {params.map((item, index) => (
        <div className={styles.group} key={index}>
          <QueryItem {...item} />
          {params[index + 1] && <span className={styles.plus}>+</span>}
        </div>
      ))}
    </div>
  );
};
