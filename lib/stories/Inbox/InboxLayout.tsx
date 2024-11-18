import type { ReactNode } from 'react';
import { ActionFooter, ActionHeader, ActionMenu, Layout } from '../../components';
import { actionMenu, footer, header, menu } from './';
import { useInbox } from './';

export interface InboxLayoutProps {
  children: ReactNode;
}

export const InboxLayout = ({ children }: InboxLayoutProps) => {
  const { theme, itemsCount, selectedCount, inboxId, accounts, dialogId, onInboxId, onUnselectAll } = useInbox();

  const selectedTitle = `${selectedCount} av ${itemsCount} valgt`;
  const bulkMode = selectedCount > 0;

  return (
    <Layout
      theme={selectedCount ? 'neutral' : theme}
      footer={footer}
      header={{
        ...header,
        currentAccount: accounts?.[0],
        menu: {
          accounts,
        },
        search: !dialogId && {
          ...header.search,
        },
      }}
      sidebar={{
        hidden: bulkMode,
        menu: {
          ...menu,
          items: menu?.items.map((item) => {
            return {
              ...item,
              selected: inboxId === item.id,
              onClick: () => onInboxId(item.id),
            };
          }),
        },
      }}
    >
      <ActionHeader title={selectedTitle} hidden={!bulkMode} onDismiss={onUnselectAll} />
      {children}
      <ActionFooter hidden={!bulkMode}>
        <ActionMenu theme="global-dark" items={actionMenu} />
      </ActionFooter>
    </Layout>
  );
};
