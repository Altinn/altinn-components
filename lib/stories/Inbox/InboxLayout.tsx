import type { ReactNode } from 'react';
import { Layout, ActionHeader, ActionFooter, ActionMenu } from '../../components';
import { useInboxContext } from './';

export interface InboxLayoutProps {
  children: ReactNode;
}

export const InboxLayout = ({ children }: InboxLayoutProps) => {
  const { selectedCount, onUnselectAll, bulkMenu, header, footer, sidebar } = useInboxContext();

  const selectedTitle = selectedCount + ' valgt';

  return (
    <Layout theme={selectedCount ? 'neutral' : 'company'} footer={footer} header={header} sidebar={sidebar}>
      <ActionHeader title={selectedTitle} hidden={!selectedCount} onDismiss={onUnselectAll} />
      {children}
      <ActionFooter>{selectedCount > 0 && <ActionMenu items={bulkMenu} />}</ActionFooter>
    </Layout>
  );
};
