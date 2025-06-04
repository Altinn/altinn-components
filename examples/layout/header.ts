import { globalMenu, localeSwitcher } from '../';
import type { HeaderProps } from '../../lib';

export const header: HeaderProps = {
  menu: globalMenu,
  locale: localeSwitcher,
  search: {
    name: 'global-search',
    placeholder: 'Søk i Altinn',
  },
};
