import type { DialogTimelineProps } from '../../components';
import { transmissionsHistoryItems } from './transmissionsHistoryItems';

const items = transmissionsHistoryItems
  .filter((item) => item.transmissions)
  .map((item) => {
    const items = item.transmissions?.items || [];
    const latestItem = items[items.length - 1];
    return {
      ...item,
      summary: latestItem?.title,
      updatedAt: item?.createdAt,
      updatedAtLabel: item?.createdAtLabel,
      items: item?.transmissions?.items,
    };
  });

export const transmissionsTimeline: DialogTimelineProps = {
  title: items.length + ' forsendelser',
  items: items
    .slice()
    .reverse()
    .map(({ createdAt, ...rest }) => rest) as DialogTimelineProps['items'],
};
