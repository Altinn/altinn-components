import { Fragment, type ReactNode, memo } from 'react';
import { DialogListItem, type DialogListItemProps, Heading, Typography } from '..';
import { useMenu } from '../../hooks';
import styles from './dialogList.module.css';

export interface DialogListGroupProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
}

export interface DialogListProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  items: DialogListItemProps[];
  groups?: Record<string, DialogListGroupProps>;
  sortGroupBy?: (a: [string, DialogListItemProps[]], b: [string, DialogListItemProps[]]) => number;
  highlightWords?: string[];
  isLoading?: boolean;
}

export const DialogList = memo(
  ({ title, description, items, groups = {}, sortGroupBy, highlightWords, isLoading }: DialogListProps) => {
    const { menu } = useMenu<DialogListItemProps, DialogListGroupProps>({
      items,
      groups,
      groupByKey: 'groupId',
      keyboardEvents: false,
      sortGroupBy,
    });

    return (
      <section className={styles.section} aria-busy={isLoading}>
        {title || description ? (
          <header className={styles.header}>
            {title && (
              <Heading as="h1" size="lg">
                {title}
              </Heading>
            )}
            {description && (
              <Typography as="p" size="sm" variant="subtle" className={styles.description}>
                {description}
              </Typography>
            )}
          </header>
        ) : null}

        {menu?.map((group, groupIndex) => {
          const groupProps = group.props || {};

          return (
            <Fragment key={'dialog-list-item' + groupIndex}>
              {groupProps?.title && (
                <Heading as="h2" size="lg">
                  {groupProps.title as string}
                </Heading>
              )}

              <ul className={styles.list}>
                {group?.items.map((item, index) => {
                  const itemProps = item.props || {};
                  return (
                    <DialogListItem {...itemProps} highlightWords={highlightWords} key={'dialog-list-item' + index} />
                  );
                })}
              </ul>
            </Fragment>
          );
        })}
      </section>
    );
  },
);

DialogList.displayName = 'DialogList';
