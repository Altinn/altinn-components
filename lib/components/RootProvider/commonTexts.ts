import type { LanguageCode } from '../../types';

/** Default texts in the language set on RootProvider. TODO: Move to i18next. */
export const getCommonTexts = (languageCode: LanguageCode | string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        search: 'Søk',
        clearSearch: 'Tøm søket',
        closeSearch: 'Lukk søket',
        loading: 'Lastar …',
        findAccount: 'Finn aktør',
        hits: (count: number) => (count === 0 ? 'Ingen treff' : `${count} treff`),
        suggestions: 'Forslag',
        menu: 'Meny',
        back: 'Tilbake',
        selectLanguage: 'Vel språk',
      };
    case 'en':
      return {
        search: 'Search',
        clearSearch: 'Clear search',
        closeSearch: 'Close search',
        loading: 'Loading …',
        findAccount: 'Find account',
        hits: (count: number) => (count === 0 ? 'No hits' : count === 1 ? '1 hit' : `${count} hits`),
        suggestions: 'Suggestions',
        menu: 'Menu',
        back: 'Back',
        selectLanguage: 'Select language',
      };
    default:
      return {
        search: 'Søk',
        clearSearch: 'Tøm søket',
        closeSearch: 'Lukk søket',
        loading: 'Laster …',
        findAccount: 'Finn aktør',
        hits: (count: number) => (count === 0 ? 'Ingen treff' : `${count} treff`),
        suggestions: 'Forslag',
        menu: 'Meny',
        back: 'Tilbake',
        selectLanguage: 'Velg språk',
      };
  }
};
