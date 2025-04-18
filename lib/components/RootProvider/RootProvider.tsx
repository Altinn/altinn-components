'use client';
import { type ReactNode, createContext, useContext, useState } from 'react';
import { useEscapeKey } from '../../hooks';
import { SnackbarProvider } from '../Snackbar/useSnackbar.tsx';

type OpenElementId = 'search' | 'menu' | string;

interface RootContextProvider {
  currentId: OpenElementId;
  toggleId: (elementId: OpenElementId) => void;
  closeAll: () => void;
  openId: (elementId: OpenElementId) => void;
}

const initialValue = {
  currentId: '',
};

interface RootContextInitialValue {
  currentId: OpenElementId;
  setCurrentId?: (elementId: OpenElementId) => void;
}

const RootContext = createContext<RootContextInitialValue>(initialValue);

interface ProviderProps {
  children: ReactNode;
  initialValue?: RootContextInitialValue;
}

export const RootProvider = ({ children, initialValue }: ProviderProps) => {
  const [currentId, setCurrentId] = useState<OpenElementId>(initialValue?.currentId || '');
  return (
    <RootContext.Provider
      value={{
        currentId,
        setCurrentId,
      }}
    >
      <SnackbarProvider>{children}</SnackbarProvider>
    </RootContext.Provider>
  );
};

export const useRootContext = (): RootContextProvider => {
  const { currentId, setCurrentId } = useContext(RootContext);
  const toggleId = (elementId: OpenElementId) => setCurrentId!(currentId === elementId ? '' : elementId);
  const closeAll = () => {
    setCurrentId!('');
  };
  useEscapeKey(closeAll);

  const openId = (elementId: OpenElementId) => setCurrentId!(elementId);
  return {
    currentId,
    toggleId,
    closeAll,
    openId,
  };
};
