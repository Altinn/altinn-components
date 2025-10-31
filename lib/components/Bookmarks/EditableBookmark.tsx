import { MagnifyingGlassIcon, PencilIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { Button, type ButtonProps, Flex, Icon, IconButton, SettingsModal, TextField, type TextFieldProps } from '..';
import { BookmarksListItem, type BookmarksListItemProps, type QueryItemProps, QueryLabel } from '..';

export interface EditableBookmarkProps extends BookmarksListItemProps {
  /** Bookmark id */
  id: string;
  /** Accessible label for the edit button icon */
  editIconAltText?: string;
  /** Input value */
  inputValue?: string;
  /** On change */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Loading */
  loading?: boolean;
  /** Optional title */
  title?: string;
  /** Untitled */
  untitled?: string;
  /** Query params */
  params?: QueryItemProps[];
  /** Title field */
  titleField?: TextFieldProps;
  /** Save button */
  saveButton?: ButtonProps;
  /** Delete button */
  removeButton?: ButtonProps;
  /** Render as **/
  as?: React.ElementType;
}

export const EditableBookmark = ({
  id,
  title,
  untitled,
  params,
  titleField,
  saveButton,
  removeButton,
  inputValue,
  onChange,
  editIconAltText = 'Edit',
  ...rest
}: EditableBookmarkProps) => {
  const [internalValue, setInternalValue] = useState<string>('');
  const [open, setOpen] = useState(false);

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BookmarksListItem
        {...rest}
        id={id}
        title={title || untitled}
        ariaLabel={title || untitled}
        params={params}
        icon={<Icon svgElement={MagnifyingGlassIcon} />}
        linkIcon={true}
        controls={
          <IconButton
            variant="outline"
            size="xs"
            icon={PencilIcon}
            onClick={handleOpen}
            iconAltText={editIconAltText}
          />
        }
      />
      {open && (
        <SettingsModal
          icon={<Icon svgElement={MagnifyingGlassIcon} />}
          title={title || untitled}
          open={open}
          onClose={handleClose}
        >
          <Flex direction="col" spacing={4}>
            <QueryLabel params={params} />
            {titleField && (
              <TextField
                {...titleField}
                size="sm"
                name="title"
                value={typeof inputValue === 'string' ? inputValue : internalValue}
                onChange={(e) => {
                  if (typeof onChange === 'function') {
                    onChange(e);
                  } else {
                    setInternalValue(e.target.value);
                  }
                }}
              />
            )}
            {(saveButton || removeButton) && (
              <Flex as="footer" direction="row" spacing={2}>
                {saveButton && <Button {...saveButton} size="sm" />}
                {removeButton && <Button {...removeButton} variant="outline" size="sm" />}
              </Flex>
            )}
          </Flex>
        </SettingsModal>
      )}
    </>
  );
};
