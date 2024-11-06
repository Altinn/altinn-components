import { type ReactNode, createContext } from 'react';

interface RootContextProvider {
  showBackdrop: boolean;
}

const initialValue = {
  showBackdrop: false,
};
const RootContext = createContext<RootContextProvider>(initialValue);

interface ProviderProps {
  children: ReactNode;
  value?: RootContextProvider;
}

export const RootProvider = ({ children, value }: ProviderProps) => {
  return <RootContext.Provider value={value ?? initialValue}>{children}</RootContext.Provider>;
};
