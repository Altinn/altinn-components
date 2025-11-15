'use client';
import { MagnifyingGlassIcon, XMarkIcon } from '@navikt/aksel-icons';
import { DsButton, useRootContext } from '../';
import { useIsDesktop } from '../../hooks/useIsDesktop';
import styles from './globalSearch.module.css';

export const GlobalSearchButton = ({
  onClick,
  expanded,
}: {
  onClick: () => void;
  expanded: boolean;
}) => {
  const { languageCode } = useRootContext();
  const { search, close } = getTexts(languageCode);
  const isDesktop = useIsDesktop();
  return (
    <DsButton
      type="button"
      icon={!isDesktop}
      title={expanded ? close : search}
      onClick={onClick}
      data-color="neutral"
      className={styles.searchButton}
    >
      {expanded ? <XMarkIcon aria-hidden="true" /> : <MagnifyingGlassIcon aria-hidden="true" />}
      {isDesktop ? search : null}
    </DsButton>
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        search: 'Søk',
        close: 'Lukk',
      };
    case 'en':
      return {
        search: 'Search',
        close: 'Close',
      };
    default:
      return {
        search: 'Søk',
        close: 'Lukk',
      };
  }
};
