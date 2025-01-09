'use client';
import { type ReactNode, createContext, useContext, useState } from 'react';
import type { AccountMenuItem, AccountMenuProps, LayoutColor } from '../../../components';

export interface AppContextInitialValue {
  color?: LayoutColor;
  setColor?: (theme: LayoutColor) => void;
  accounts?: AccountMenuItem[];
  accountId?: string;
  setAccountId?: (id: string) => void;
  menuId?: string;
  setMenuId?: (id: string) => void;
  pageId?: string;
  setPageId?: (id: string) => void;
  selectedIds?: string[];
  selectId?: (id: string) => void;
  unselectAll?: () => void;
}

interface AppContextOutput extends AppContextInitialValue {
  currentAccount?: AccountMenuItem;
  accountMenu?: AccountMenuProps;
}

// Define context with correct types
const AppContext = createContext<AppContextInitialValue>({
  color: 'neutral', // Default theme value
  setColor: undefined,
  accounts: undefined,
  accountId: undefined,
  setAccountId: undefined,
  pageId: undefined,
  setPageId: undefined,
  selectedIds: undefined,
});

interface AppProviderProps {
  children: ReactNode;
  initialValue?: AppContextInitialValue; // Optional initial values for context
}

export const AppProvider = ({ children, initialValue }: AppProviderProps) => {
  // Initialize state for theme and accountId
  const [color, setColor] = useState<LayoutColor>(initialValue?.color ?? 'neutral');
  const [accountId, setAccountId] = useState<string | undefined>(initialValue?.accountId);
  const [pageId, setPageId] = useState<string | undefined>(initialValue?.pageId);

  // Initialize bulk selection
  const [selectedIds, setSelectedIds] = useState(initialValue?.selectedIds || []);

  const selectId = (id: string) => {
    setSelectedIds((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((prevId) => prevId !== id);
      }
      return [...prevState, id];
    });
  };

  const unselectAll = () => {
    setSelectedIds([]);
  };

  // Merge initial values and state to provide context value
  return (
    <AppContext.Provider
      value={{
        ...initialValue,
        color,
        setColor,
        accountId,
        setAccountId,
        pageId,
        setPageId,
        selectedIds,
        selectId,
        unselectAll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextOutput => {
  const context = useContext(AppContext);

  // Ensure context is available
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  const { accounts, accountId, setAccountId } = context;
  const currentAccount = (accountId && accounts?.find((item) => item.id === accountId)) || undefined;

  const accountMenu = currentAccount && {
    currentAccount,
    accounts,
    onSelectAccount: setAccountId,
  };

  return { ...context, currentAccount, accountMenu };
};
