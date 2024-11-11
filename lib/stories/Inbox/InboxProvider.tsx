import {createContext, type ReactNode, useContext, useState} from 'react';
import {accounts, actionMenu, dialogs, footer, menu, search} from '.';
import type {DialogProps, LayoutProps, MenuProps} from "../../components";

interface InboxContextProvider {
  inboxId: string | null;
  dialogId: string | null;
  dialogs: DialogProps[];
}

interface UseInboxContextOutput  {
    layout: Partial<LayoutProps>;
    selectedCount: number;
    onUnselectAll: () => void;
    onSelectId: (id: string) => void;
    actionMenu: MenuProps;
}

const InboxContext = createContext<InboxContextProvider>({ inboxId: 'inbox', dialogId: null, dialogs: [] });

interface InboxProviderProps {
  children: ReactNode;
  defaultValue?: InboxContextProvider;
}

export const InboxProvider = ({
  defaultValue = {
    inboxId: null,
    dialogId: null,
    dialogs: [],
  },
  children,
}: InboxProviderProps) => {
  const [inboxId, setInboxId] = useState('inbox');
  const [dialogId, setDialogId] = useState<string | null>(defaultValue.dialogId || null);
  const [selectedDialogsIds, setSelectedDialogsIds] = useState<string[]>([]);

  const onDialog = (id: string) => {
    setDialogId((prevState) => (prevState === id ? null : id));
  };

  const onInbox = ({ id }: { id: string }) => {
    setInboxId(id);
    setDialogId(null);
  };

  const onSelectId = (id: string) => {
    setSelectedDialogsIds((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((item) => item !== id);
      }
      return [...prevState, id];
    });
  };

  const onUnselectAll = () => {
    setSelectedDialogsIds([]);
  };

  const itemsCount = dialogs.length;
  const selectedCount = selectedDialogsIds.length ?? 0;
  const bulkMode = selectedCount > 0;

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

  const currentDialog = dialogId && dialogs.find((item) => item.id === dialogId);

  const dialog = currentDialog && {
    ...currentDialog,
    menu: {
      items: actionMenu,
    },
    backButton: {
      onClick: () => onDialog(dialogId),
    },
  };

  return (
    <InboxContext.Provider
      value={{
        layout: {
            header: { search, menu: { accounts } },
            footer,
            sidebar: { hidden: bulkMode, menu },
        },
        inboxId,
        dialogId,
        onDialogId: onDialog,
        dialog,
        dialogs,
        itemsCount,
        onSelectId,
        onUnselectAll,
        selectedCount,
        actionMenu,
        toolbar,
      }}
    >
      {children}
    </InboxContext.Provider>
  );
};

export const useInboxContext = (): UseInboxContextOutput => useContext(InboxContext);
