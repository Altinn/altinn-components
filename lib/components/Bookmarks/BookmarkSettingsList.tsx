import { Fragment, type ReactNode } from 'react';
import { BookmarkSettingsItem, type BookmarkSettingsItemProps, Heading } from '..';
import { useMenu } from '../../hooks';
import styles from '../Settings/settlingsList.module.css';

export interface BookmarkSettingsGroupProps {
  title?: string | ReactNode;
}

export interface BookmarkSettingsListProps {
  highlightWords?: string[];
  items: BookmarkSettingsItemProps[];
  groups?: Record<string, BookmarkSettingsGroupProps>;
  sortGroupBy?: (a: [string, BookmarkSettingsItemProps[]], b: [string, BookmarkSettingsItemProps[]]) => number;
  loading?: boolean;
}

export const BookmarkSettingsList = ({
  loading,
  highlightWords,
  items,
  groups = {},
  sortGroupBy,
}: BookmarkSettingsListProps) => {
  if (!items || items.length < 1) {
    return null;
  }

  const { menu } = useMenu<BookmarkSettingsItemProps, BookmarkSettingsGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
    sortGroupBy,
  });

  return (
    <div className={styles.section} data-variant="default">
      {menu?.map((group, groupIndex) => {
        const groupProps = group.props || {};

        return (
          <Fragment key={groupIndex}>
            {groupProps?.title && <Heading size="lg">{groupProps.title as string}</Heading>}
            <section className={styles.group}>
              <ul className={styles.list}>
                {group?.items.map((item, index) => {
                  const itemProps = item.props || {};
                  return (
                    <BookmarkSettingsItem
                      {...itemProps}
                      key={'settings-list-item' + index}
                      highlightWords={highlightWords || itemProps?.highlightWords}
                      loading={loading || itemProps?.loading}
                    />
                  );
                })}
              </ul>
            </section>
          </Fragment>
        );
      })}
    </div>
  );
};
