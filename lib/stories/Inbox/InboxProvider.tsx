import { createContext, useState, useContext, type ReactNode } from 'react';
import type { DialogProps } from '../../components';

export interface InboxDefaultValue {
  inboxId?: string | null;
  dialogId?: string | null;
  dialogs?: DialogProps[];
  selectedIds?: string[];
}

interface InboxProviderProps {
  children: ReactNode;
  defaultValue?: InboxDefaultValue;
}

interface InboxContextProvider {
  inboxId?: string | null;
  dialogId?: string | null;
  onInboxId?: (id: string) => void;
  onDialogId?: (id: string) => void;
  items?: (DialogProps & { selected: boolean })[];
  itemsCount: number;
  onSelectId?: (id: string) => void;
  onUnselectAll?: () => void;
  selectedCount: number;
}

const InboxContext = createContext<InboxContextProvider>({
  inboxId: null,
  dialogId: null,
  items: [],
  itemsCount: 0,
  selectedCount: 0,
});

export const InboxProvider = ({ defaultValue, children }: InboxProviderProps) => {
  const [inboxId, setInboxId] = useState(defaultValue?.inboxId ?? null);
  const [dialogId, setDialogId] = useState(defaultValue?.dialogId ?? null);
  const [selectedIds, setSelectedIds] = useState(defaultValue?.selectedIds || []);

  const onInboxId = (id: string) => {
    setInboxId(id);
    setDialogId(null);
  };

  const onDialogId = (id: string) => {
    setDialogId((prevState) => (prevState === id ? null : id));
  };

  const onSelectId = (id: string) => {
    setSelectedIds((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((prevId) => prevId !== id);
      }
      return [...prevState, id];
    });
  };

  const onUnselectAll = () => {
    setSelectedIds([]);
  };

  const items = defaultValue?.dialogs?.map((item) => ({
    ...item,
    selected: selectedIds.includes(item.id),
  }));

  const itemsCount = items?.length || 0;
  const selectedCount = selectedIds.length;

  return (
    <InboxContext.Provider
      value={{
        inboxId,
        onInboxId,
        dialogId,
        onDialogId,
        items,
        itemsCount,
        onSelectId,
        onUnselectAll,
        selectedCount,
      }}
    >
      {children}
    </InboxContext.Provider>
  );
};

export const useInboxContext = () => {
  return useContext(InboxContext);
};
