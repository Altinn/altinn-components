import { Fragment } from 'react';
import { Divider, Flex, Heading, List, SettingsItem, type SettingsItemProps, SettingsSection } from '..';

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
      <Flex as="div" spacing="page" direction="col">
        {groupedItems.map((group) => {
          return (
            <Fragment key={group.groupId}>
              {group?.title && <Heading size="lg">{group?.title}</Heading>}
              <SettingsSection>
                <List size="sm">
                  {group.items.map((item, index) => (
                    <Fragment key={item.id}>
                      {index > 0 && <Divider />}
                      <SettingsItem {...item} />
                    </Fragment>
                  ))}
                </List>
              </SettingsSection>
            </Fragment>
          );
        })}
      </Flex>
    );
  }

  return (
    <SettingsSection>
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
    </SettingsSection>
  );
};
