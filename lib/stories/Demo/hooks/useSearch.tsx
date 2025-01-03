import { type ChangeEvent, useState, useMemo } from 'react';
import type { AutocompleteProps, AutocompleteItemProps, SearchbarProps } from '../../..';

interface UseSearchProps {
  parentId?: string,
  name?: string,
  placeholder?: string
}

export const useSearch = ({
  parentId ,
  name = 'inbox-search',
  placeholder = 'Søk i Altinn',
}: UseSearchProps): SearchbarProps => {

  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };

  const globalScopes = [
    {
      type: 'scope',
      groupId: '1',
      id: 'global',
      href: '#',
      label: q
        ? () => {
            return (
              <span>
                <mark>{q}</mark> i hele Altinn
              </span>
            );
          }
        : 'Alt i hele Altinn',
    },
  ]

  const inboxScopes = [
    {
      type: 'scope',
      groupId: '1',
      id: 'inbox',
      href: '#',
      label: q
        ? () => {
            return (
              <span>
                <mark>{q}</mark> i innboksen
              </span>
            );
          }
        : 'Alt i innboksen',
    }
  ]

  const scopes = useMemo(() => {
    if (parentId === 'inbox') {
      return [...inboxScopes, ...globalScopes];
    } else {
      return globalScopes;
    }
  }, [parentId]);



  const suggestions = q
    ? [
        {
          type: 'dialog',
          groupId: '2',
          href: 'http://www.altinn.no',
          title: 'Skattemelding 2024',
        },
        {
          type: 'dialog',
          groupId: '2',
          href: 'http://www.altinn.no',
          title: 'Skattemelding 2025',
        },
      ].filter((item) => item.title.toLowerCase().includes((q ?? '').toLowerCase()))
    : [];

  const autocomplete: AutocompleteProps = {
    groups: {
      2: {
        title: `${suggestions.length} treff i innboksen`,
      },
    },
    items: [...scopes, ...suggestions] as AutocompleteItemProps[],
  };

  return {
    name,
    placeholder,
    value: q,
    onChange,
    onClear: () => setQ(''),
    autocomplete,
  };
};
