import type { DialogActivityProps } from '../../lib';
import { dialogActivityLogItems } from './activityLog';

export const dialogHistoryItems: DialogActivityProps[] = dialogActivityLogItems.filter(
  (item) => item.type === 'information' || item.transmissions,
);
