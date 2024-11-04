import ReactMarkdown from 'react-markdown';

export interface MarkdownProps {
  children?: string;
}

export const Markdown = ({ children }: MarkdownProps) => {
  if (!children) {
    return false;
  }
  return <ReactMarkdown>{children}</ReactMarkdown>;
};
