import { type ChangeEvent, useState } from 'react';
import {
  Button,
  type ButtonProps,
  Flex,
  IconButton,
  ListItemBase,
  ListItemHeader,
  type ListItemInputProps,
  Section,
  TextField,
  type TextFieldProps,
} from '..';
import { type QueryItemProps, QueryLabel } from './QueryLabel';

export interface BookmarksListItemProps extends ListItemInputProps {
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

export const BookmarksListItem = ({
  size = 'sm',
  icon,
  expanded,
  loading,
  title,
  titleField,
  untitled = 'Untitled bookmark',
  params,
  onToggle,
  saveButton,
  removeButton,
  inputValue,
  onChange,
  as,
  ...rest
}: BookmarksListItemProps) => {
  const [internalValue, setInternalValue] = useState<string>('');

  if (expanded && !loading) {
    return (
      <ListItemBase loading={loading} expanded={expanded}>
        <ListItemHeader
          size={size}
          title={title || untitled}
          loading={loading}
          onClick={onToggle}
          controls={<IconButton variant="outline" size="sm" icon="chevron-up" onClick={onToggle} />}
          {...rest}
        />
        {expanded && (
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
        )}
      </ListItemBase>
    );
  }

  return (
    <ListItemBase {...rest} loading={loading} expanded={expanded}>
      <ListItemHeader
        as={as}
        size={size}
        title={title}
        loading={loading}
        icon={icon}
        controls={!loading && <IconButton variant="outline" size="sm" icon="chevron-down" onClick={onToggle} />}
        {...rest}
      >
        {!title && !loading && <QueryLabel params={params} />}
      </ListItemHeader>
    </ListItemBase>
  );
};
