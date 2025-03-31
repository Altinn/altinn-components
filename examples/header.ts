import type { HeaderProps } from '../lib';
import { globalMenu, localeSwitcher } from './index';

export const header: HeaderProps = {
  menu: globalMenu,
  locale: localeSwitcher,
  search: {
    name: 'global-search',
    placeholder: 'Søk i Altinn',
  },
};
