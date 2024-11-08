import type { ReactNode } from 'react';
import { Layout, ActionHeader, ActionFooter, ActionMenu } from '../../components';
import { accounts, search, footer, menu, bulkMenu } from './';
import { useInboxContext } from './';

export interface InboxLayoutProps {
  children: ReactNode;
}

export const InboxLayout = ({ children }: InboxLayoutProps) => {
  const { selectedCount, onUnselectAll } = useInboxContext();

  const selectedTitle = selectedCount + ' valgt';

  return (
    <Layout
      theme={selectedCount ? 'neutral' : 'company'}
      footer={footer}
      header={{ menu: { accounts }, search: selectedCount ? null : search }}
      sidebar={{ hidden: selectedCount && true, menu }}
    >
      <ActionHeader title={selectedTitle} hidden={!selectedCount} onDismiss={onUnselectAll} />
      {children}
      <ActionFooter>{selectedCount > 0 && <ActionMenu items={bulkMenu} />}</ActionFooter>
    </Layout>
  );
};
