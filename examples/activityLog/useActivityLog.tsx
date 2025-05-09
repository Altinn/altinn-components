import { activityLogItems, useActivityLogToolbar } from '..';
import type { ActivityLogItemProps, BreadcrumbsLinkProps, ToolbarProps } from '../../lib';

interface ActivityLogPageProps {
  toolbar: ToolbarProps;
  breadcrumbs: BreadcrumbsLinkProps[];
  items: ActivityLogItemProps[];
}

export const useActivityLog = (): ActivityLogPageProps => {
  const breadcrumbs = [
    {
      label: 'Forside',
    },
    {
      label: 'Seksjon',
    },
    {
      label: 'Side',
    },
  ];

  const toolbar = useActivityLogToolbar();

  return {
    toolbar,
    breadcrumbs,
    items: activityLogItems,
  };
};
