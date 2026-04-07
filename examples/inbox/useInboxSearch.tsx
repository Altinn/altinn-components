import { type ChangeEvent, useState } from 'react';
import type { ToolbarProps } from '../../lib';

interface UseInboxSearchProps {
  name?: string;
  placeholder?: string;
  value?: string;
}

export const useInboxSearch = ({
  name = 'inbox-search',
  placeholder = 'Søk i innboks',
  value,
}: UseInboxSearchProps): ToolbarProps['search'] => {
  const [q, setQ] = useState<string>(value || '');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };

  return {
    name,
    placeholder,
    value: q,
    onChange,
    onClear: () => setQ(''),
  };
};
