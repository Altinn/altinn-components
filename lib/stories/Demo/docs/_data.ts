import type { MenuItemProps } from '../../../components';
import { DocPencilIcon } from '@navikt/aksel-icons';

export const sitemap: MenuItemProps[] = [
    {
      id: 'docs',
      size: "lg",
      groupId: '1',
      icon: DocPencilIcon,
      title: 'Altinn UI',
      badge: {
        label: '2',
      },
      items: [
        {
          id: 'layout',
          groupId: '2',
          title: 'Layout',
          items: [
            {
              id: "header",
              title: "Header"
            },
            {
              id: "footer",
              title: "Footer"
            },
          ]          
        },
        {
          id: 'pages',
          groupId: '2',
          title: 'Pages',
          items: [
            {
              id: "section",
              title: "Section"
            },
            {
              id: "article",
              title: "Article"
            },
          ]          
        },
        {
          id: 'elements',
          groupId: '2',
          title: 'Elements',
          items: [
            {
              id: "avatar",
              title: "Avatar"
            },
            {
              id: "icon",
              title: "Icon"
            },
            {
              id: "badge",
              title: "Badge"
            }
          ]
        },
      ]
    },
  ];