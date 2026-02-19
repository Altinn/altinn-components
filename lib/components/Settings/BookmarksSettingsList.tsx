import { Fragment } from 'react';
import {
  BookmarksSettingsItem,
  type BookmarksSettingsItemProps,
  Divider,
  Flex,
  Heading,
  List,
  SettingsSection,
  type TextFieldProps,
  Typography,
} from '../';

export interface BookmarksSettingsListProps {
  title?: string;
  description?: string;
  items: BookmarksSettingsItemProps[];
  untitled?: string;
  expandedId?: string;
  onToggle?: (id: string) => void;
  loading?: boolean;
  titleField?: TextFieldProps;
}

export const BookmarksSettingsList = ({
  loading,
  title,
  description,
  items,
  untitled = 'Untitled bookmark',
  expandedId,
  onToggle,
}: BookmarksSettingsListProps) => {
  return (
    <>
      <Heading size="lg">{title}</Heading>
      {items.length > 0 && (
        <Flex direction="col" spacing={4}>
          <SettingsSection>
            <List size="sm">
              {items.map((item, index) => (
                <Fragment key={item.id}>
                  {index > 0 && <Divider />}
                  <BookmarksSettingsItem
                    {...item}
                    key={item.id}
                    title={item?.title}
                    untitled={untitled}
                    loading={loading || item.loading}
                    onToggle={() => onToggle?.(item.id)}
                    expanded={expandedId === item.id}
                  />
                </Fragment>
              ))}
            </List>
          </SettingsSection>
          <Typography color="neutral" variant="subtle" size="xs">
            <p>{description}</p>
          </Typography>
        </Flex>
      )}
    </>
  );
};
