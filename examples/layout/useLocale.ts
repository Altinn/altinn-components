import { useState } from 'react';
import { localeSwitcher } from '../';
import type { LocaleSwitcherProps } from '../../lib';

interface UseLocaleProps extends LocaleSwitcherProps {
  locale?: string;
}

export const useLocale = (args: UseLocaleProps) => {
  const options = args.options || localeSwitcher.options;
  const defaultLocale = args.locale || options[0]?.value || 'nb';

  const [locale, setLocale] = useState<string | number>(defaultLocale);

  return {
    ...localeSwitcher,
    options: options?.map((option) => {
      return {
        ...option,
        checked: option.value === locale,
        onClick: () => setLocale(option.value),
      };
    }),
  };
};
