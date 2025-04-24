import { PencilIcon, XMarkIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { Button, type ButtonProps, Flex, IconButton, Section, TextField, type TextFieldProps } from '..';
import { BookmarksListItem, type BookmarksListItemProps, type QueryItemProps, QueryLabel } from '..';

export interface EditableBookmarkProps extends BookmarksListItemProps {
  /** Bookmark id */
  id: string;
  /** discernible text for expand icon */
  expandIconAltText: string;
  /** Input value */
  inputValue?: string;
  /** On change */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Loading */
  loading?: boolean;
  /** Expanded */
  expanded?: boolean;
  /** Optional title */
  title?: string;
  /** Untitled */
  untitled?: string;
  /** Query params */
  params?: QueryItemProps[];
  /** Toggle function */
  onToggle?: () => void;
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
  expanded,
  onToggle,
  titleField,
  saveButton,
  removeButton,
  inputValue,
  onChange,
  expandIconAltText,
  ...rest
}: EditableBookmarkProps) => {
  const [internalValue, setInternalValue] = useState<string>('');

  return (
    <BookmarksListItem
      {...rest}
      expanded={expanded}
      id={id}
      title={expanded ? title || untitled : title}
      ariaLabel={title || untitled}
      params={params}
      controls={
        <IconButton
          variant="outline"
          size="xs"
          icon={expanded ? XMarkIcon : PencilIcon}
          onClick={onToggle}
          iconAltText={expandIconAltText}
        />
      }
    >
      <Section padding={4} spacing={4}>
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
      </Section>
    </BookmarksListItem>
  );
};
