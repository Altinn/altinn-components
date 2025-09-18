import { type ChangeEvent, useState } from 'react';

import {
  Button,
  type ButtonProps,
  Flex,
  type QueryItemProps,
  QueryLabel,
  SettingsModal,
  type SettingsModalProps,
  TextField,
  type TextFieldProps,
} from '..';

import { MagnifyingGlassIcon } from '@navikt/aksel-icons';

export interface BookmarksSettingsModalProps extends SettingsModalProps {
  /** Query params */
  params?: QueryItemProps[];
  /** Untitled bookmark */
  untitled?: string;
  /** Title field */
  titleField?: TextFieldProps;
  /** Save button */
  saveButton?: ButtonProps;
  /** Delete button */
  removeButton?: ButtonProps;
  /** Input value */
  inputValue?: string;
  /** On change */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const BookmarksSettingsModal = ({
  title,
  untitled,
  titleField,
  inputValue,
  onChange,
  params,
  saveButton,
  removeButton,
  ...rest
}: BookmarksSettingsModalProps) => {
  const [internalValue, setInternalValue] = useState<string>('');
  return (
    <SettingsModal {...rest} icon={MagnifyingGlassIcon} title={title || untitled}>
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
      <QueryLabel params={params} size="xs" />

      {(saveButton || removeButton) && (
        <Flex as="footer" direction="row" spacing={2}>
          {saveButton && <Button {...saveButton} size="sm" />}
          {removeButton && <Button {...removeButton} variant="outline" size="sm" />}
        </Flex>
      )}
    </SettingsModal>
  );
};
