import React, { type ReactNode, type ReactElement, isValidElement, cloneElement, useMemo } from 'react';

const SKIP_TAGS = new Set(['mark', 'code', 'pre', 'script', 'style']);

function escapeRegExp(word: string): string {
  return word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

type ProcessResult = { node: ReactNode; changed: boolean };

function highlightTextInString(text: string, regex: RegExp): ProcessResult {
  // Quick check first; avoids splitting when no matches
  if (!regex.test(text)) {
    return { node: text, changed: false };
  }
  regex.lastIndex = 0;

  const out: ReactNode[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;

  // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
  while ((m = regex.exec(text))) {
    const start = m.index;
    const end = start + m[0].length;
    if (start > lastIndex) out.push(text.slice(lastIndex, start));
    out.push(<mark key={out.length}>{m[0]}</mark>);
    lastIndex = end;
  }
  if (lastIndex < text.length) out.push(text.slice(lastIndex));

  return { node: out.length === 1 ? out[0] : out, changed: true };
}

function processNode(node: ReactNode, regex: RegExp): ProcessResult {
  if (typeof node === 'string') {
    return highlightTextInString(node, regex);
  }

  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    const type = typeof el.type === 'string' ? el.type : undefined;
    if (type && SKIP_TAGS.has(type)) return { node, changed: false };

    let anyChanged = false;

    const processedChildren = React.Children.map(el.props.children, (child) => {
      const res = processNode(child, regex);
      if (res.changed) anyChanged = true;
      return res.node;
    });

    if (!anyChanged) {
      return { node, changed: false };
    }

    const normalized = processedChildren && processedChildren.length === 1 ? processedChildren[0] : processedChildren;

    return { node: cloneElement(el, { children: normalized }), changed: true };
  }

  return { node, changed: false };
}

export function useHighlightedText(content: ReactNode, highlightWords: string[]): ReactNode {
  return useMemo(() => {
    if (!content || !highlightWords?.length) return content;

    const escaped = Array.from(
      new Set(
        highlightWords
          .map((w) => w.trim())
          .filter(Boolean)
          .map(escapeRegExp),
      ),
    );
    if (escaped.length === 0) return content;

    escaped.sort((a, b) => b.length - a.length);

    const regex = new RegExp(`(${escaped.join('|')})`, 'gi');

    const { node } = processNode(content, regex);
    return node;
  }, [content, highlightWords]);
}
