import { Fragment } from 'react';
import { Divider, Flex, Heading, List, SettingsItem, type SettingsItemProps, SettingsSection } from '..';
import { useMenu } from '../../hooks';

export interface SettingsGroupProps {
  title?: string;
}

export interface SettingsListProps {
  items: SettingsItemProps[];
  groups?: Record<string, SettingsGroupProps>;
  sortGroupBy?: (a: [string, SettingsItemProps[]], b: [string, SettingsItemProps[]]) => number;
}

export const SettingsList = ({ items, groups = {}, sortGroupBy }: SettingsListProps) => {
  const { menu } = useMenu<SettingsItemProps, SettingsGroupProps>({
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
                      {index > 0 && <Divider />}
                      <SettingsItem {...itemProps} key={'settings-list-item' + index} />
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
