import {
  BookmarksSettingsItem,
  type BookmarksSettingsItemProps,
  BookmarksSettingsModal,
  type ButtonProps,
  Divider,
  Flex,
  Heading,
  List,
  SettingsSection,
  type TextFieldProps,
  Typography,
} from '../';

export interface EditableBookmarkSettingsItemProps extends BookmarksSettingsItemProps {
  /** Bookmark id */
  id: string;
  /** Input value */
  inputValue?: string;
  /** On change */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Loading */
  loading?: boolean;
  /** Expanded */
  expanded?: boolean;
  /** Title field */
  titleField?: TextFieldProps;
  /** Save button */
  saveButton?: ButtonProps;
  /** Delete button */
  removeButton?: ButtonProps;
  /** Render as **/
  as?: React.ElementType;
}

export interface BookmarksSettingsSectionProps {
  title?: string;
  description?: string;
  items: EditableBookmarkSettingsItemProps[];
  untitled?: string;
  expandedId?: string;
  onToggle?: (id: string) => void;
  loading?: boolean;
  titleField?: TextFieldProps;
}

export const BookmarksSettingsSection = ({
  loading,
  title,
  description,
  items,
  untitled = 'Untitled bookmark',

  titleField,
  expandedId,
  onToggle,
}: BookmarksSettingsSectionProps) => {
  const modalProps = expandedId && items?.find((item) => item.id === expandedId);

  return (
    <>
      <Flex direction="col" spacing={2}>
        <Heading size="lg">{title}</Heading>
        <Typography size="sm">{description}</Typography>
      </Flex>
      <SettingsSection>
        {loading ? (
          <List>
            <BookmarksSettingsItem title={title} loading={loading} />
          </List>
        ) : (
          items.length > 0 && (
            <List size="xs">
              {items.map((item, index) => (
                <>
                  {index > 0 && <Divider />}
                  <BookmarksSettingsItem
                    {...item}
                    key={item.id}
                    loading={loading || item.loading}
                    onToggle={() => onToggle?.(item.id)}
                    expanded={expandedId === item.id}
                  />
                </>
              ))}
            </List>
          )
        )}
      </SettingsSection>
      {modalProps && (
        <BookmarksSettingsModal
          open={true}
          onClose={() => onToggle?.('')}
          untitled={untitled}
          titleField={titleField}
          title={modalProps?.title as string}
          params={modalProps?.params}
          inputValue={modalProps?.inputValue}
          onChange={modalProps?.onChange}
          saveButton={modalProps?.saveButton}
          removeButton={modalProps?.removeButton}
        />
      )}
    </>
  );
};
