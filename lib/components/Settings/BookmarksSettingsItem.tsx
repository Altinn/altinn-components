import {
  Button,
  ButtonGroup,
  type ButtonProps,
  ContextMenu,
  type ContextMenuProps,
  type QueryItemProps,
  QueryLabel,
  SettingsItemBase,
  type SettingsItemProps,
  SettingsModal,
  TextField,
  type TextFieldProps,
} from '..';

import { BookmarksSettingsItemLabel } from './BookmarksSettingsItemLabel';

import { MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { useState } from 'react';

export interface BookmarksSettingsItemProps extends SettingsItemProps {
  /** Bookmark id */
  id: string;
  /** On close */
  onClose: () => void;
  /** Loading */
  loading?: boolean;
  /** Optional title */
  title?: string;
  /** Optional title */
  untitled?: string;
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
  /** Context menu */
  contextMenu?: ContextMenuProps;
  /** Render as **/
  as?: React.ElementType;
  /** Toggle function */
  onToggle?: () => void;
  /** Open */
  open?: boolean;
}

export const BookmarksSettingsItem = ({
  id,
  icon = MagnifyingGlassIcon,
  loading,
  title,
  untitled,
  highlightWords,
  params,
  controls,
  inputValue,
  titleField,
  saveButton,
  removeButton,
  contextMenu,
  onChange,
  open = false,
  onClose,
  ...rest
}: BookmarksSettingsItemProps) => {
  const [internalValue, setInternalValue] = useState<string>('');
  return (
    <SettingsItemBase
      {...rest}
      id={id}
      expanded={open}
      icon={icon}
      loading={loading}
      label={
        <BookmarksSettingsItemLabel highlightWords={highlightWords} loading={loading} params={params} title={title} />
      }
      controls={contextMenu && <ContextMenu {...contextMenu} />}
      linkIcon
    >
      <SettingsModal icon={icon} title={title} open={open} onClose={onClose}>
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
            {saveButton && (
              <Button
                {...saveButton}
                onClick={(e) => {
                  saveButton.onClick?.(e);
                  onClose();
                }}
              />
            )}
            {removeButton && (
              <Button
                {...removeButton}
                variant="outline"
                color="danger"
                onClick={(e) => {
                  removeButton.onClick?.(e);
                  onClose();
                }}
              />
            )}
          </ButtonGroup>
        )}
      </SettingsModal>
    </SettingsItemBase>
  );
};
