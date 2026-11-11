import { type CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import styleTokens from '../css/tokens/design-tokens-build/semantic/style.json';

const meta = {
  title: 'Brand/Typography',
  parameters: {
    layout: 'padded',
  },
  args: {},
};

export default meta;

interface TypographyTokenValue {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
}

interface TypographyToken {
  $type?: 'typography' | string;
  $value: TypographyTokenValue;
}

type TokenTree = { [key: string]: TokenTree | TypographyToken };

const isToken = (node: TokenTree | TypographyToken): node is TypographyToken => '$value' in node;

/** Flattens nested token groups into named tokens, e.g. `body.short.md` becomes `body-short-md`,
 * which is also the prefix of its CSS variables (`--ds-body-short-md-font-size`). */
const flatten = (tree: TokenTree, prefix: string): [string, TypographyToken][] =>
  Object.entries(tree).flatMap(([key, node]) => {
    const name = `${prefix}-${key}`;
    return isToken(node) ? [[name, node] as [string, TypographyToken]] : flatten(node, name);
  });

const { heading, body } = (styleTokens as unknown as { typography: { heading: TokenTree; body: TokenTree } })
  .typography;

const headingTokens = flatten(heading, 'heading');
const bodyTokens = flatten(body, 'body');

const sections = [
  {
    title: 'Heading',
    description: 'Headings and titles.',
    tokens: headingTokens,
  },
  {
    title: 'Body',
    description: 'Default body text.',
    tokens: bodyTokens.filter(([name]) => !name.startsWith('body-short-') && !name.startsWith('body-long-')),
  },
  {
    title: 'Body short',
    description: 'Tighter line height, for single lines like labels, buttons and list items.',
    tokens: bodyTokens.filter(([name]) => name.startsWith('body-short-')),
  },
  {
    title: 'Body long',
    description: 'Looser line height, for longer running text like articles.',
    tokens: bodyTokens.filter(([name]) => name.startsWith('body-long-')),
  },
];

const sampleText = 'Hvem vil du representere i dag?';

/** `{font-size.9}` → `font-size.9` */
const reference = (value: string) => value.replace(/[{}]/g, '');

const subtleText: CSSProperties = {
  color: 'var(--ds-color-neutral-text-subtle)',
  fontSize: 'var(--ds-body-xs-font-size)',
  lineHeight: 'var(--ds-body-short-xs-line-height)',
};

const TokenRow = ({ name, token }: { name: string; token: TypographyToken }) => {
  const sampleRef = useRef<HTMLParagraphElement>(null);
  const [resolved, setResolved] = useState<string>('');

  /** Reads the values the browser actually applies, so the page follows the active size mode. */
  useLayoutEffect(() => {
    const element = sampleRef.current;
    if (!element) {
      return;
    }
    const style = getComputedStyle(element);
    const variable = (property: string) => style.getPropertyValue(`--ds-${name}-${property}`).trim();
    setResolved(
      [style.fontSize, variable('line-height'), variable('font-weight'), variable('letter-spacing')].join(' · '),
    );
  }, [name]);

  const { fontSize, lineHeight, fontWeight, letterSpacing } = token.$value;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(12rem, 16rem) 1fr',
        gap: '1.5rem',
        alignItems: 'center',
        padding: '1rem 0',
        borderBottom: '1px solid var(--ds-color-neutral-border-subtle)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <code style={{ fontSize: 'var(--ds-body-sm-font-size)' }}>{name}</code>
        <span style={subtleText}>{resolved}</span>
        <span style={subtleText}>{[fontSize, lineHeight, fontWeight, letterSpacing].map(reference).join(' · ')}</span>
      </div>
      <p
        ref={sampleRef}
        style={{
          margin: 0,
          fontFamily: 'var(--ds-font-family)',
          fontSize: `var(--ds-${name}-font-size)`,
          fontWeight: `var(--ds-${name}-font-weight)`,
          lineHeight: `var(--ds-${name}-line-height)`,
          letterSpacing: `var(--ds-${name}-letter-spacing)`,
          color: 'var(--ds-color-neutral-text-default)',
        }}
      >
        {sampleText}
      </p>
    </div>
  );
};

/**
 * Every typography token from the design tokens, rendered with its CSS variables.
 * Each row shows the resolved values (font size · line height · weight · letter spacing)
 * and the primitive tokens they come from.
 */
export const Default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {sections.map((section) => (
        <section key={section.title}>
          <h2
            style={{
              margin: 0,
              fontSize: 'var(--ds-heading-sm-font-size)',
              fontWeight: 'var(--ds-heading-sm-font-weight)',
              lineHeight: 'var(--ds-heading-sm-line-height)',
            }}
          >
            {section.title}
          </h2>
          <p style={{ ...subtleText, margin: '0.25rem 0 0.5rem' }}>{section.description}</p>
          {section.tokens.map(([name, token]) => (
            <TokenRow key={name} name={name} token={token} />
          ))}
        </section>
      ))}
    </div>
  );
};
