import { useState } from 'react';
import { Searchbar, useRootContext } from '../';
import styles from './globalSearch.module.css';

export interface GlobalSearchProps {
  onEnter: (query: string) => void;
}

export const GlobalSearch = ({ onEnter }: GlobalSearchProps) => {
  const [query, setQuery] = useState('');
  const { languageCode, closeAll } = useRootContext();
  const { search, placeholder } = getTexts(languageCode);
  const onSearchbarEnter = () => {
    onEnter(query);
    closeAll();
  };
  return (
    <Searchbar
      name={search}
      value={query}
      onEnter={onSearchbarEnter}
      placeholder={placeholder}
      tabIndex={-1}
      onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
      className={styles.globalSearch}
    />
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        search: 'Søk',
        placeholder: 'Søk på altinn.no',
      };
    case 'en':
      return {
        search: 'Search',
        placeholder: 'Search on altinn.no',
      };
    default:
      return {
        search: 'Søk',
        placeholder: 'Søk på altinn.no',
      };
  }
};
