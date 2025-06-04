import type { LocaleSwitcherProps } from '../../lib';

export const localeOptions = [
  {
    value: 'nb',
    label: 'Bokmål',
    checked: true,
  },
  {
    value: 'nn',
    label: 'Nynorsk',
  },
  {
    value: 'en',
    label: 'English',
  },
];

export const localeSwitcher: LocaleSwitcherProps = {
  title: 'Språk/language',
  options: localeOptions,
};
