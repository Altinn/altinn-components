import type { ReactNode } from "react";
import {
  Section,
  Heading,
  Byline,
  type BylineProps,
  type SectionProps,
} from "..";

export interface ArticleHeaderProps extends SectionProps {
  title?: string;
  byline?: BylineProps;
  children?: ReactNode;
}

export const ArticleHeader = ({ title, byline }: ArticleHeaderProps) => {
  return (
    <Section as="header" spacing={2}>
      <Heading size="xl">{title}</Heading>
      {byline && <Byline {...byline} size="md" />}
    </Section>
  );
};
