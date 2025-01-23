import { type ChangeEvent, useState } from 'react';
import { Button, type ButtonProps, Flex, IconButton, Section, TextField, type TextFieldProps } from '..';

import { BookmarksListItem, type BookmarksListItemProps } from './BookmarksListItem';
import { type QueryItemProps, QueryLabel } from './QueryLabel';

export interface EditableBookmarkProps extends BookmarksListItemProps {
  id: string;
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
  ...rest
}: EditableBookmarkProps) => {
  const [internalValue, setInternalValue] = useState<string>('');

  return (
    <BookmarksListItem
      {...rest}
      expanded={expanded}
      id={id}
      title={expanded ? title || untitled : title}
      params={params}
      controls={<IconButton variant="outline" size="sm" icon="chevron-up" onClick={onToggle} />}
    >
      <Section padding={4} spacing={4}>
        <QueryLabel params={params} />
        {titleField && (
          <TextField
            {...titleField}
            name="title"
            value={typeof inputValue === 'string' ? inputValue : internalValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
            {saveButton && <Button {...saveButton} />}
            {removeButton && <Button {...removeButton} variant="outline" />}
          </Flex>
        )}
      </Section>
    </BookmarksListItem>
  );
};
