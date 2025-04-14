import type { ReactNode } from "react";
import {
  Details,
  DetailsSummary,
  DetailsContent,
} from "@digdir/designsystemet-react";

export interface PageDetailsProps {
  summary: string;
  children: ReactNode;
}

export const PageDetails = ({ summary, children }: PageDetailsProps) => {
  return (
    <Details style={{ fontSize: "1.125rem" }}>
      <DetailsSummary>{summary}</DetailsSummary>
      <DetailsContent>{children}</DetailsContent>
    </Details>
  );
};
