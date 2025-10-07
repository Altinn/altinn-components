import {
  Button,
  ButtonGroup,
  type ButtonProps,
  IconButton,
  type QueryItemProps,
  QueryLabel,
  SettingsItemBase,
  type SettingsItemProps,
  SettingsModal,
  TextField,
  type TextFieldProps,
} from '..';

import { useState } from 'react';

import { MagnifyingGlassIcon, PencilIcon } from '@navikt/aksel-icons';

export interface BookmarksSettingsItemProps extends SettingsItemProps {
  /** Bookmark id */
  id: string;
  /** Loading */
  loading?: boolean;
  /** Optional title */
  title?: string;
  /** Query params */
  params?: QueryItemProps[];
  /** Input value */
  inputValue?: string;
  /** Title field */
  titleField?: TextFieldProps;
  /** Save button */
  saveButton?: ButtonProps;
  /** Delete button */
  removeButton?: ButtonProps;
  /** Render as **/
  as?: React.ElementType;
  /** Toggle function */
  onToggle?: () => void;
}

export const BookmarksSettingsItem = ({
  id,
  icon = MagnifyingGlassIcon,
  loading,
  title,
  params,
  controls,
  inputValue,
  titleField,
  saveButton,
  removeButton,
  onChange,
  ...rest
}: BookmarksSettingsItemProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [internalValue, setInternalValue] = useState<string>('');
  return (
    <SettingsItemBase
      {...rest}
      id={id}
      expanded={open}
      icon={icon}
      loading={loading}
      title={title}
      value={<QueryLabel params={params} size="xs" />}
      controls={
        controls ? (
          controls
        ) : (
          <IconButton size="xs" icon={PencilIcon} iconAltText="Edit" variant="outline" onClick={() => setOpen(true)} />
        )
      }
      linkIcon
    >
      <SettingsModal icon={icon} title={title} open={open} onClose={() => setOpen(false)}>
        <QueryLabel params={params} />

        <TextField
          {...titleField}
          label={titleField?.label || 'Gi søket et navn'}
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

        {(saveButton || removeButton) && (
          <ButtonGroup size="md">
            {saveButton && <Button {...saveButton} />}
            {removeButton && <Button {...removeButton} variant="outline" color="danger" />}
          </ButtonGroup>
        )}
      </SettingsModal>
    </SettingsItemBase>
  );
};
