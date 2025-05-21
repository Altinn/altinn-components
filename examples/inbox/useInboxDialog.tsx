import { useMemo, useState } from 'react';
import { dialog, dialogActivityLog, dialogContact, dialogInfo, dialogTabsItems, transmissionHistory } from '../';
import { DialogContact, DialogHistory, DialogSection } from '../../lib';
export const useInboxDialog = ({ tabId = 'history' }) => {
  const [selectedId, setSelectedId] = useState(tabId);

  const tabItems = dialogTabsItems.map((item) => {
    const { id } = item;

    return {
      ...item,
      onClick: () => setSelectedId(id),
      selected: item.id === selectedId,
    };
  });

  const tabs = {
    id: 'dialog-tabs',
    items: tabItems,
  };

  const children = useMemo(() => {
    switch (selectedId) {
      case 'activity-log':
        return <DialogHistory {...dialogActivityLog} />;
      case 'contact':
        return <DialogContact {...dialogContact} />;
      case 'info':
        return <DialogSection {...dialogInfo} />;
      default:
        return <DialogHistory {...transmissionHistory} />;
    }
  }, [selectedId]);

  return {
    ...dialog,
    tabs,
    children,
  };
};
