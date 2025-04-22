import { Details, DetailsContent, DetailsSummary } from '@digdir/designsystemet-react';
import type { ReactNode } from 'react';

export interface PageDetailsProps {
  summary: string;
  children: ReactNode;
}

export const PageDetails = ({ summary, children }: PageDetailsProps) => {
  return (
    <Details style={{ fontSize: '1.125rem' }}>
      <DetailsSummary>{summary}</DetailsSummary>
      <DetailsContent>{children}</DetailsContent>
    </Details>
  );
};
