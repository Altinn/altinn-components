import styles from './queryLabel.module.css';
export type QueryItemType = 'search' | 'filter';

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
}

export const QueryLabel = ({ params = [] }: QueryLabelProps) => {
  return (
    <div className={styles.label}>
      {params.map((item, index) => (
        <div className={styles.group} key={index}>
          <QueryItem {...item} />
          {params[index + 1] && <span className={styles.plus}>+</span>}
        </div>
      ))}
    </div>
  );
};
