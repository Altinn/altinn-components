import { type ReactNode, createContext, useContext, useState } from 'react';
import type { DialogProps } from '../../components';

interface AccountProps {
  id?: string;
  type?: string;
  name?: string;
}

export interface InboxDefaultValue {
  accountId?: string | null;
  accounts: AccountProps[];
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
  theme?: string;
  account?: AccountProps;
  accountId?: string | null;
  accounts?: AccountProps[];
  inboxId?: string | null;
  dialogId?: string | null;
  onAccountId?: (id: string) => void;
  onInboxId?: (id: string) => void;
  onDialogId?: (id: string) => void;
  items?: (DialogProps & { selected: boolean })[];
  itemsCount: number;
  onSelectId?: (id: string) => void;
  onUnselectAll?: () => void;
  selectedCount: number;
}

const InboxContext = createContext<InboxContextProvider>({
  theme: '',
  account: {},
  accountId: null,
  accounts: [],
  inboxId: null,
  dialogId: null,
  items: [],
  itemsCount: 0,
  selectedCount: 0,
});

export const InboxProvider = ({ defaultValue, children }: InboxProviderProps) => {
  const [accountId, setAccountId] = useState(defaultValue?.accountId ?? null);
  const [accounts, setAccounts] = useState(defaultValue?.accounts ?? []);
  const [inboxId, setInboxId] = useState(defaultValue?.inboxId ?? null);
  const [dialogId, setDialogId] = useState(defaultValue?.dialogId ?? null);
  const [selectedIds, setSelectedIds] = useState(defaultValue?.selectedIds || []);

  const onAccountId = (id: string) => {
    setAccountId(id);
    setAccounts((prevState) => {
      return prevState.map((item) => {
        return {
          ...item,
          selected: id === item.id,
        };
      });
    });
  };

  const account = accounts?.find((item) => item.id === accountId);
  const theme = account?.type;

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
        theme,
        account,
        accounts,
        accountId,
        onAccountId,
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

export const useInbox = () => {
  return useContext(InboxContext);
};

export const useProfile = () => {
  return useContext(InboxContext);
};
