import type { HeaderProps } from '../../../components';
import { globalMenu } from './';

export const header: HeaderProps = {
  menu: globalMenu,
  search: {
    name: 'global-search',
    placeholder: 'Søk i Altinn',
  },
};
