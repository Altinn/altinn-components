import { Fragment } from 'react';
import { BookmarkSettingsItem, type BookmarkSettingsItemProps, Divider, List, SettingsSection } from '..';

export interface BookmarkSettingsListProps {
  items: BookmarkSettingsItemProps[];
  loading?: boolean;
}

export const BookmarkSettingsList = ({ loading, items }: BookmarkSettingsListProps) => {
  if (!items || items.length < 1) {
    return null;
  }

  return (
    <SettingsSection>
      <List size="sm">
        {items.map((item, index) => (
          <Fragment key={item.id}>
            {index > 0 && <Divider />}
            <BookmarkSettingsItem {...item} key={item.id} loading={loading || item.loading} />
          </Fragment>
        ))}
      </List>
    </SettingsSection>
  );
};
