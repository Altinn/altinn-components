import { ReactNode } from "react";

export interface MarkdownProps {
  children?: ReactNode;
}

export const Markdown = ({ children }: MarkdownProps) => {
  return children;
};
