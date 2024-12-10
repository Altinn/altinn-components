import { type ChangeEvent, useState } from 'react';

export const useInboxSearch = ({ name = 'inbox-search', placeholder = 'Søk i innboks' }) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };

  const scopes = [
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
    },
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
  ];

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

  const autocomplete = {
    groups: {
      2: {
        title: `${suggestions.length} treff i innboksen`,
      },
    },
    items: [...scopes, ...suggestions],
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
