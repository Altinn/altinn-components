import { PlusIcon } from '@navikt/aksel-icons';
import { QueryItem, type QueryItemProps } from './QueryLabelItem';
import styles from './queryLabel.module.css';

export interface QueryLabelProps {
  params?: QueryItemProps[];
  size?: QueryItemProps['size'];
  variant?: QueryItemProps['variant'];
  color?: 'neutral';
}

export const QueryLabel = ({ params = [], size = 'xs', variant = 'default', color = 'neutral' }: QueryLabelProps) => {
  return (
    <div className={styles.label} data-size={size} data-variant={variant} data-color={color}>
      {params.map((item, index) => (
        <div className={styles.group} key={index}>
          <QueryItem {...item} size={size} variant={variant} />
          {params[index + 1] && (
            <QueryItem type="connector" size={size} variant={variant}>
              <PlusIcon />
            </QueryItem>
          )}
        </div>
      ))}
    </div>
  );
};
