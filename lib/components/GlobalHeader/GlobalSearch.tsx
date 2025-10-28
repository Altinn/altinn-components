import { MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { DsSearch, useRootContext } from '../';
import { useIsDesktop } from '../../hooks/useIsDesktop';
import styles from './globalSearch.module.css';

export interface GlobalSearchProps {
  onEnter: (query: string) => void;
}

export const GlobalSearch = ({ onEnter }: GlobalSearchProps) => {
  const isDesktop = useIsDesktop();
  const [query, setQuery] = useState('');
  const { languageCode, closeAll } = useRootContext();
  const { search, placeholder } = getTexts(languageCode);
  const onSearchbarEnter = () => {
    onEnter(query);
    closeAll();
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearchbarEnter();
      }}
    >
      <DsSearch className={styles.globalSearch} data-size={isDesktop ? 'lg' : 'md'}>
        <DsSearch.Input
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          aria-label={placeholder}
          className={styles.searchInput}
        />
        <DsSearch.Clear />
        <DsSearch.Button variant="secondary" icon aria-label={search} className={styles.searchInputButton}>
          <MagnifyingGlassIcon />
        </DsSearch.Button>
      </DsSearch>
    </form>
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
