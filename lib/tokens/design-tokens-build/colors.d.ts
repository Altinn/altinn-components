import type { MainAndSupportColors as BaseCustomColors } from '@digdir/designsystemet-react/colors';

declare module '@digdir/designsystemet-react/colors' {
  export interface MainAndSupportColors extends BaseCustomColors {
    company: never;
    person: never;
    article: never;
    alert: never;
  }
}
