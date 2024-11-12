import type { ReactNode } from 'react';
import { Layout, ActionHeader, ActionFooter, ActionMenu } from '../../components';
import { header, footer, menu, actionMenu } from './';
import { useInboxContext } from './';

export interface InboxLayoutProps {
  children: ReactNode;
}

export const InboxLayout = ({ children }: InboxLayoutProps) => {
  const { itemsCount, selectedCount, inboxId, onInboxId, onUnselectAll } = useInboxContext();

  const selectedTitle = `${selectedCount} av ${itemsCount} valgt`;
  const bulkMode = selectedCount > 0;

  return (
    <Layout
      theme={selectedCount ? 'neutral' : 'company'}
      footer={footer}
      header={header}
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
