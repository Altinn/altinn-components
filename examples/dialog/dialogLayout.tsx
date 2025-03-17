import type { DialogLayoutProps } from '../../lib';
import { contextMenu } from './contextMenu';
import { pageMenu } from './pageMenu';

export const dialogLayout: DialogLayoutProps = {
  contextMenu,
  pageMenu,
  backButton: {
    label: 'Tilbake',
  },
};
