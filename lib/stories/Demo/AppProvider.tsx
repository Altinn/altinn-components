'use client';
import React, { type ReactNode, createContext, useContext, useState } from 'react';
import type { LayoutTheme, AccountMenuItem, AccountMenuProps } from '../../components';

export interface AppContextInitialValue {
  theme: LayoutTheme;
  setTheme?: (theme: LayoutTheme) => void;
  accounts?: AccountMenuItem[];
  accountId?: string;
  setAccountId?: (id: string) => void;
  menuId?: string;
  setMenuId?: (id: string) => void;
  pageId?: string;
  setPageId?: (id: string) => void;
}

interface AppContextOutput extends AppContextInitialValue {
  currentAccount?: AccountMenuItem;
  accountMenu?: AccountMenuProps;
}

// Define context with correct types
const AppContext = createContext<AppContextInitialValue>({
  theme: 'global', // Default theme value
  setTheme: undefined,
  accounts: undefined,
  accountId: undefined,
  setAccountId: undefined,
  pageId: undefined,
  setPageId: undefined,
});

interface AppProviderProps {
  children: ReactNode;
  initialValue?: AppContextInitialValue; // Optional initial values for context
}

export const AppProvider = ({ children, initialValue }: AppProviderProps) => {
  // Initialize state for theme and accountId
  const [theme, setTheme] = useState<LayoutTheme>(initialValue?.theme ?? 'global');
  const [accountId, setAccountId] = useState<string | undefined>(initialValue?.accountId);
  const [pageId, setPageId] = useState<string | undefined>(initialValue?.pageId);

  // Merge initial values and state to provide context value
  return (
    <AppContext.Provider
      value={{
        ...initialValue,
        theme,
        setTheme,
        accountId,
        setAccountId,
        pageId,
        setPageId,
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
