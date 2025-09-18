import { Fragment } from 'react';
import { Divider, List, SettingsItem, type SettingsItemProps } from '..';

export interface SettingsGroupProps {
  title?: string;
}

export interface SettingsListProps {
  items: SettingsItemProps[];
  groups?: Record<string, SettingsGroupProps>;
}

export const SettingsList = ({ items, groups }: SettingsListProps) => {
  if (groups) {
    /** create groups, filter out empty groups */

    const groupedItems = Object.keys(groups)
      .map((currentGroupId) => {
        const filteredItems = items?.filter((item) => item.groupId === currentGroupId && !item.hidden);

        const { title } = groups[currentGroupId] || {};
        return {
          groupId: currentGroupId,
          title,
          items: filteredItems,
        };
      })
      ?.filter((group) => group.items.length > 0);

    return (
      <>
        {groupedItems.map((group, index) => {
          return (
            <List size="sm" key={group.groupId}>
              {index > 0 && <Divider />}
              {group.items.map((item, index) => (
                <Fragment key={item.id}>
                  {index > 0 && <Divider />}
                  <SettingsItem {...item} />
                </Fragment>
              ))}
            </List>
          );
        })}
      </>
    );
  }

  return (
    <List size="sm">
      {items
        .filter((item) => !item?.hidden)
        .map((item, index) => (
          <Fragment key={item.id}>
            {index > 0 && <Divider />}
            <SettingsItem {...item} />
          </Fragment>
        ))}
    </List>
  );
};
