'use client';
import {
  type ElementType,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { SvgElement } from '../Icon';
import type { SnackbarColor } from './SnackbarItem.tsx';

export enum SnackbarDuration {
  infinite = 0,
  short = 1000,
  normal = 3000,
  long = 5000,
}

export interface OpenSnackbarInput extends Omit<SnackbarQueueItem, 'id'> {}

export interface SnackbarQueueItem extends SnackbarItemProps {
  id: string;
  message: string;
  color: SnackbarColor;
  duration?: number;
  icon?: SvgElement;
}

interface SnackbarItemProps {
  as?: ElementType;
  color?: SnackbarColor;
  href?: string;
  className?: string;
  dismissable?: boolean;
  onDismiss?: () => void;
  children?: ReactNode;
}

interface SnackbarContextValue {
  open: boolean;
  storedMessages: SnackbarQueueItem[];
  openSnackbar: (input: OpenSnackbarInput) => string;
  closeSnackbarItem: (id: string) => void;
  dismissSnackbar: () => void;
}

const SnackbarContext = createContext<SnackbarContextValue | undefined>(undefined);
const defaultDuration = SnackbarDuration.normal;

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [storedMessages, setStoredMessages] = useState<SnackbarQueueItem[]>([]);
  const closingTime = useRef<number | null>(null);

  const dismissSnackbar = () => {
    setStoredMessages([]);
    setIsOpen(false);
    if (closingTime.current) {
      clearTimeout(closingTime.current);
    }
  };

  const openSnackbar = (message: OpenSnackbarInput): string => {
    const id = btoa(String(Math.random())).substring(0, 12);
    setStoredMessages((prevMessages) => [...prevMessages, { ...message, id }]);
    setIsOpen(true);
    return id;
  };

  const closeSnackbarItem = useCallback((id: string) => {
    setStoredMessages((prevMessages) => {
      const updatedMessages = prevMessages.filter((item) => item.id !== id);
      setIsOpen(updatedMessages.length > 0);
      return updatedMessages;
    });
  }, []);

  useEffect(() => {
    const activeMessage = storedMessages.find((item) => (item.duration ?? defaultDuration) > 0);
    const duration = activeMessage?.duration || defaultDuration;
    if (activeMessage) {
      closingTime.current = window.setTimeout(() => {
        closeSnackbarItem(activeMessage.id);
      }, duration);
    }

    return () => {
      if (closingTime.current) {
        clearTimeout(closingTime.current);
      }
    };
  }, [storedMessages, closeSnackbarItem]);

  return (
    <SnackbarContext.Provider
      value={{
        open: isOpen,
        storedMessages,
        openSnackbar,
        closeSnackbarItem,
        dismissSnackbar,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextValue => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
