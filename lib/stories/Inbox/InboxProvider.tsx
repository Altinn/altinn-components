import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { search, footer, menu, accounts, dialogs, bulkMenu } from '.';

type InboxId = string | null;

interface InboxContextProvider {
  inboxId: InboxId;
  dialogId: InboxId;
  setInboxId: (id: InboxId) => void;
}

const InboxContext = createContext<InboxContextProvider>({ inboxId: 'inbox' });

interface InboxProviderProps {
  children: ReactNode;
  defaultValue?: InboxContextProvider;
}

export const InboxProvider = ({ defaultValue, children }: InboxProviderProps) => {
  const [inboxId, setInboxId] = useState<InboxId>(defaultValue?.inboxId);
  const [dialogId, setDialogId] = useState<InboxId>(defaultValue?.dialogId);
  const [itemsById, setItemsById] = useState({});

  const onDialogId = (id: InboxId) => {
    setDialogId((prevState) => (prevState === id ? null : id));
  };

  const onInboxId = (id: InboxId) => {
    setInboxId(id);
  };

  const onSelectId = (id) => {
    setItemsById((prevState) => {
      if (prevState[id]) {
        return {
          ...prevState,
          [id]: {
            ...prevState[id],
            selected: !prevState[id]?.selected,
          },
        };
      }

      return {
        ...prevState,
        [id]: {
          selected: true,
        },
      };
    });
  };

  const onUnselectAll = () => {
    setItemsById({});
  };

  const items = dialogs?.map((item) => {
    const uniqueItem = itemsById[item.id] || {};

    return {
      ...item,
      ...uniqueItem,
    };
  });

  const itemsCount = items?.length;

  const selectedItems = items?.filter((item) => item.selected);
  const selectedCount = selectedItems?.length;

  const bulkMode = selectedCount > 0 ? true : false;

  const header = { menu: { accounts }, search: selectedCount > 0 ? null : search };
  const sidebar = { hidden: selectedCount > 0 && true, menu };

  const account = accounts?.find((item) => item.selected);

  const toolbar = {
    menu: {
      label: account?.name,
      value: account?.name,
      items: accounts?.map((item) => {
        return {
          avatar: item,
          title: item?.name,
          id: item?.name,
        };
      }),
    },
  };

  return (
    <InboxContext.Provider
      value={{
        inboxId,
        onInboxId,
        dialogId,
        onDialogId,
        items,
        itemsCount,
        itemsById,
        onSelectId,
        onUnselectAll,
        selectedCount,
        accounts,
        search,
        footer,
        menu,
        bulkMode,
        bulkMenu,
        header,
        sidebar,
        toolbar,
      }}
    >
      {children}
    </InboxContext.Provider>
  );
};

export const useInboxContext = () => {
  return useContext(InboxContext);
};
