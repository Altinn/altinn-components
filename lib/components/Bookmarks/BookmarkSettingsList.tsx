import { Fragment, type ReactNode } from 'react';
import {
  BookmarkSettingsItem,
  type BookmarkSettingsItemProps,
  Divider,
  Flex,
  Heading,
  List,
  SettingsSection,
} from '..';
import { useMenu } from '../../hooks';

export interface BookmarkSettingsGroupProps {
  title?: string | ReactNode;
}

export interface BookmarkSettingsListProps {
  items: BookmarkSettingsItemProps[];
  groups?: Record<string, BookmarkSettingsGroupProps>;
  sortGroupBy?: (a: [string, BookmarkSettingsItemProps[]], b: [string, BookmarkSettingsItemProps[]]) => number;
  loading?: boolean;
}

export const BookmarkSettingsList = ({ loading, items, groups = {}, sortGroupBy }: BookmarkSettingsListProps) => {
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
    <Flex as="div" spacing="page" direction="col">
      {menu?.map((group, groupIndex) => {
        const groupProps = group.props || {};

        return (
          <Fragment key={groupIndex}>
            {groupProps?.title && <Heading size="lg">{groupProps.title as string}</Heading>}
            <SettingsSection>
              <List size="sm">
                {group?.items.map((item, index) => {
                  const itemProps = item.props || {};
                  return (
                    <Fragment key={index}>
                      {index > 0 && <Divider as="li" />}
                      <BookmarkSettingsItem
                        {...itemProps}
                        key={'settings-list-item' + index}
                        loading={loading || itemProps?.loading}
                      />
                    </Fragment>
                  );
                })}
              </List>
            </SettingsSection>
          </Fragment>
        );
      })}
    </Flex>
  );
};
