import {
  type QueryItemProps,
  QueryLabel,
  SettingsModal,
  type SettingsModalProps,
  TextField,
  type TextFieldProps,
} from '..';

import { MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { useState } from 'react';

export interface BookmarkModalProps {
  /** Icon */
  icon?: SettingsModalProps['icon'];
  /** Optional title */
  title?: string;
  /** Query params */
  params?: QueryItemProps[];
  /** Title field */
  titleField?: TextFieldProps;
  /** Buttons */
  buttons?: SettingsModalProps['buttons'];
  /** Buttons */
  onClose: SettingsModalProps['onClose'];
  /** Buttons */
  open: SettingsModalProps['open'];
}

export const BookmarkModal = ({
  icon = MagnifyingGlassIcon,
  title,
  params,
  titleField,
  buttons,
  open = false,
  onClose,
}: BookmarkModalProps) => {
  const [internalValue, setInternalValue] = useState<string>('');
  return (
    <SettingsModal icon={icon} title={title} buttons={buttons} open={open} onClose={onClose}>
      <QueryLabel params={params} />
      <TextField
        {...titleField}
        label={titleField?.label || 'Gi søket et navn'}
        size="sm"
        name="title"
        value={typeof titleField?.value === 'string' ? titleField?.value : internalValue}
        onChange={(e) => {
          if (typeof titleField?.onChange === 'function') {
            titleField.onChange(e);
          } else {
            setInternalValue(e.target.value);
          }
        }}
      />
    </SettingsModal>
  );
};
