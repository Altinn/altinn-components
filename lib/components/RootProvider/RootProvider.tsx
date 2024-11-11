import { type ReactNode, createContext, useContext, useState } from 'react';

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
      {children}
    </RootContext.Provider>
  );
};

export const useRootContext = (): RootContextProvider => {
  const { currentId, setCurrentId } = useContext(RootContext);
  const toggleId = (elementId: OpenElementId) => setCurrentId!(currentId === elementId ? '' : elementId);
  const closeAll = () => {
    setCurrentId!('');
  };
  const openId = (elementId: OpenElementId) => setCurrentId!(elementId);
  return {
    currentId,
    toggleId,
    closeAll,
    openId,
  };
};
