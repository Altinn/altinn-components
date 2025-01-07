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

interface FormData {
  title?: string;
  params?: QueryItemProps[];
}

export const BookmarksListItem = ({
  size = 'sm',
  icon = 'bookmark',
  expanded,
  loading,
  title,
  titleField,
  untitled = 'Untitled bookmark',
  params,
  onToggle,
  saveButton,
  removeButton,
  as,
  ...rest
}: BookmarksListItemProps) => {
  const [formData, setFormData] = useState<FormData>({ title, params });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (expanded && !loading) {
    return (
      <ListItemBase loading={loading} expanded={expanded}>
        <ListItemHeader
          size={size}
          title={title || untitled}
          loading={loading}
          icon={icon}
          onClick={onToggle}
          controls={<IconButton variant="outline" size="sm" icon="chevron-up" onClick={onToggle} />}
          {...rest}
        />
        {expanded && (
          <Section padding="lg" spacing="lg">
            <QueryLabel params={params} />
            {titleField && <TextField {...titleField} name="title" value={formData?.title || ''} onChange={onChange} />}
            {(saveButton || removeButton) && (
              <Flex as="footer" direction="row" spacing="sm">
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
