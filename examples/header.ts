import type { HeaderProps } from '../lib';
import { globalMenu } from './index';

export const header: HeaderProps = {
  menu: globalMenu,
  search: {
    name: 'global-search',
    placeholder: 'Søk i Altinn',
  },
};
