import type { PageTabsProps } from '../../lib';

export const dialogTabsItems = [
  {
    id: 'history',
    title: 'Siste aktivitet',
  },
  {
    id: 'info',
    title: 'Mer informasjon',
  },
  {
    id: 'activity-log',
    title: 'Aktivitetslogg',
  },
  {
    id: 'contact',
    title: 'Ta kontakt',
  },
];

export const dialogTabs: PageTabsProps = {
  id: 'dialog-tabs',
  items: dialogTabsItems,
};
