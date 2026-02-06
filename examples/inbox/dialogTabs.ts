import type { TabMenuProps } from '../../lib';

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

export const dialogTabs: TabMenuProps = {
  items: dialogTabsItems,
};
