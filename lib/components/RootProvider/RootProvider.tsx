'use client';
import { type ReactNode, createContext, useContext, useState } from 'react';
import { useEscapeKey } from '../../hooks';
import { SnackbarProvider } from '../Snackbar';

type OpenElementId = 'search' | 'menu' | 'account' | 'fullscreenAccount' | string;

interface RootContextProvider {
  currentId: OpenElementId;
  previousId: OpenElementId;
  toggleId: (elementId: OpenElementId) => void;
  closeAll: () => void;
  openId: (elementId: OpenElementId) => void;
}

const initialValue = {
  currentId: '',
  previousId: '',
  debug: false,
  setCurrentId: () => {
    console.warn('setCurrentId called outside of RootProvider context');
  },
  setPreviousId: () => {
    console.warn('setPreviousId called outside of RootProvider context');
  },
};

interface RootContextInitialValue {
  currentId: OpenElementId;
  previousId: OpenElementId;
  setCurrentId: (elementId: OpenElementId) => void;
  setPreviousId: (elementId: OpenElementId) => void;
  debug?: boolean;
}

const RootContext = createContext<RootContextInitialValue>(initialValue);

interface ProviderProps {
  children: ReactNode;
  initialValue?: RootContextInitialValue;
  debug?: boolean;
}

export const RootProvider = ({ children, initialValue, debug }: ProviderProps) => {
  const [currentId, setCurrentId] = useState<OpenElementId>(initialValue?.currentId || '');
  const [previousId, setPreviousId] = useState<OpenElementId>(initialValue?.previousId || '');
  return (
    <RootContext.Provider
      value={{
        currentId,
        setCurrentId,
        setPreviousId,
        previousId,
        debug,
      }}
    >
      <SnackbarProvider>{children}</SnackbarProvider>
    </RootContext.Provider>
  );
};

export const useRootContext = (): RootContextProvider => {
  const context = useContext(RootContext);

  // Check if we're using the hook outside of the provider
  if (!context) {
    throw new Error('useRootContext must be used within a RootProvider.');
  }

  const { currentId, setCurrentId, debug, setPreviousId, previousId } = context;

  const changeCurrentId = (nextElementId: OpenElementId) => {
    if (currentId) {
      setPreviousId(currentId);
    }
    setCurrentId(nextElementId);
  };

  const toggleId = (elementId: OpenElementId) => {
    if (debug) {
      console.debug(`useRootContext: toggleId called with value: ${elementId}`);
    }
    changeCurrentId(currentId === elementId ? '' : elementId);
  };
  const closeAll = () => {
    if (debug) {
      console.debug('useRootContext: closeAll called');
    }
    changeCurrentId('');
  };
  useEscapeKey(closeAll);

  const openId = (elementId: OpenElementId) => {
    if (debug) {
      console.debug(`useRootContext: openId called with value: ${elementId}`);
    }
    changeCurrentId(elementId);
  };
  return {
    currentId,
    previousId,
    toggleId,
    closeAll,
    openId,
  };
};
