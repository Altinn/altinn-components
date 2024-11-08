import { createContext, useState, useContext, type ReactNode } from 'react';
import { search, footer, menu, accounts, dialogs, actionMenu } from '.';

interface InboxContextProvider {
  inboxId: string | null;
  dialogId: string | null;
  setInboxId: (id: InboxId) => void;
}

const InboxContext = createContext<InboxContextProvider>({ inboxId: 'inbox', dialogId: null });

interface InboxProviderProps {
  children: ReactNode;
  dialogId: string | null;
  defaultValue?: InboxContextProvider;
}

export const InboxProvider = ({ defaultValue = {}, children }: InboxProviderProps) => {
  const [inboxId, setInboxId] = useState('inbox');
  const [dialogId, setDialogId] = useState(defaultValue.dialogId || null);
  const [itemsById, setItemsById] = useState(defaultValue.itemsById || {});

  const onDialogId = (id) => {
    setDialogId((prevState) => (prevState === id ? null : id));
  };

  const onInboxId = (id) => {
    setInboxId(id);
  };

  const onInbox = ({ id }) => {
    setInboxId(id);
    setDialogId(null);
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
  const sidebar = {
    hidden: selectedCount > 0 && true,
    menu: {
      ...menu,
      items: menu.items?.map((item) => {
        return {
          ...item,
          selected: inboxId === item.id,
          onClick: () => onInbox(item),
        };
      }),
    },
  };

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

  const currentDialog = dialogId && items?.find((item) => item.id === dialogId);

  const dialog = currentDialog && {
    ...currentDialog,
    menu: {
      items: actionMenu,
    },
    backButton: {
      onClick: () => onDialogId(dialogId),
    },
  };

  return (
    <InboxContext.Provider
      value={{
        inboxId,
        onInboxId,
        dialogId,
        onDialogId,
        dialog,
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
        bulkMenu: actionMenu,
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
