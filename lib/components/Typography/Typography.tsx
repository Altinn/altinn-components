import cx from 'classnames';
import type { CSSProperties, ElementType, ReactNode } from 'react';
import { Skeleton } from '../Skeleton';
import styles from './typography.module.css';

/**
 * Defines the color theme for typography content.
 * - 'neutral': Standard neutral text color
 * - 'company': Company-themed color scheme
 * - 'person': Person-themed color scheme
 * - 'article': Article-themed color scheme
 */
export type TypographyColor = 'neutral' | 'company' | 'person' | 'article';

/**
 * Defines the visual variant of the typography.
 * - 'default': Standard text appearance with full opacity
 * - 'subtle': Muted text appearance with reduced opacity
 */
export type TypographyVariant = 'default' | 'subtle';

/**
 * Defines the size of the typography text.
 * Available sizes from smallest to largest: xs, sm, md, lg, xl
 */
export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Props for the Typography component.
 *
 * The Typography component is a flexible wrapper for rendering text content with
 * consistent styling, theming, and semantic HTML structure. It supports rich HTML
 * content including headings, paragraphs, lists, and links.
 *
 * @example
 * ```tsx
 * // Basic text content
 * <Typography>
 *   <p>This is a paragraph with consistent styling.</p>
 * </Typography>
 *
 * // Rich HTML content with headings and lists
 * <Typography>
 *   <h2>Section Title</h2>
 *   <p>Introduction paragraph.</p>
 *   <ul>
 *     <li>First item</li>
 *     <li>Second item</li>
 *   </ul>
 * </Typography>
 *
 * // Custom element and styling
 * <Typography as="article" size="lg" color="company">
 *   <h1>Article Title</h1>
 *   <p>Article content...</p>
 * </Typography>
 *
 * // Loading state
 * <Typography loading={true} loadingText="Loading content..." />
 * ```
 */
export interface TypographyProps {
  /**
   * Whether the typography content is in a loading state. When true, displays
   * a skeleton loader with the specified loading text.
   */
  loading?: boolean;
  /**
   * Text to display during loading state. Only shown when loading is true.
   * @default 'Loading ...'
   */
  loadingText?: string;
  /**
   * The HTML element type to render as the root container.
   * @default 'div'
   */
  as?: ElementType;
  /**
   * The base font size for the typography content. This affects the root
   * container size, while nested elements follow their own size rules.
   * @default 'md'
   */
  size?: TypographySize;
  /**
   * The color theme to apply to the typography content. Affects text color
   * and link colors according to the design system.
   */
  color?: TypographyColor;
  /**
   * The visual variant affecting text opacity and emphasis.
   * 'default' for standard text, 'subtle' for muted text.
   */
  variant?: TypographyVariant;
  /**
   * Additional CSS class names to apply to the typography container.
   */
  className?: string;
  /**
   * The content to render inside the typography wrapper. Supports rich HTML
   * including headings (h1-h6), paragraphs, lists, links, and other elements.
   */
  children?: ReactNode;
  /**
   * URL to link to. When provided, the typography container becomes a link.
   * Useful for making entire content blocks clickable.
   */
  href?: string;
  /**
   * Custom CSS styles to apply to the typography container.
   */
  style?: CSSProperties;
  /**
   * Maximum width constraint for the typography content. Can be any valid
   * CSS width value (e.g., '600px', '50%', '20rem').
   */
  maxWidth?: string;
}

/**
 * Typography component for rendering styled text content with consistent theming.
 *
 * The Typography component serves as a wrapper for rich HTML content, providing
 * consistent styling for headings, paragraphs, lists, links, and other text elements.
 * It automatically applies appropriate spacing, font sizes, and colors according to
 * the design system while supporting custom theming and loading states.
 *
 * Key features:
 * - Consistent styling for HTML elements (h1-h6, p, ul, ol, a, etc.)
 * - Flexible color theming (neutral, company, person, article)
 * - Size variants from xs to xl
 * - Loading state with skeleton placeholder
 * - Customizable container element (div, article, section, etc.)
 * - Automatic spacing and typography hierarchy
 * - Support for custom width constraints
 *
 * The component automatically handles:
 * - Margin normalization for first/last child elements
 * - Consistent heading hierarchy and spacing
 * - List styling with proper indentation
 * - Link hover states and colors
 * - Responsive font sizing
 *
 * @example
 * ```tsx
 * // Article content with proper hierarchy
 * <Typography as="article" color="article" size="lg">
 *   <h1>Main Article Title</h1>
 *   <p>Introduction paragraph with <a href="/link">inline link</a>.</p>
 *
 *   <h2>Section Heading</h2>
 *   <p>Section content with <strong>bold text</strong>.</p>
 *
 *   <h3>Subsection</h3>
 *   <ul>
 *     <li>First point</li>
 *     <li>Second point</li>
 *   </ul>
 * </Typography>
 *
 * // Simple content with custom styling
 * <Typography
 *   variant="subtle"
 *   maxWidth="600px"
 *   style={{ textAlign: 'center' }}
 * >
 *   <p>Centered, constrained width content.</p>
 * </Typography>
 *
 * // Loading state
 * <Typography loading={isLoading} loadingText="Loading article...">
 *   {content}
 * </Typography>
 *
 * // Company-themed content
 * <Typography color="company" size="sm">
 *   <h2>Company Information</h2>
 *   <p>Details about the organization...</p>
 * </Typography>
 * ```
 *
 * @param props - The props for the Typography component
 * @returns A React element containing the styled typography content
 */
export const Typography = ({
  loading,
  loadingText = 'Loading ...',
  as = 'div',
  size = 'md',
  color,
  variant,
  className,
  style = {},
  maxWidth,
  children,
  ...restProps
}: TypographyProps) => {
  const Component = as;

  return (
    <Component
      className={cx(styles.typography, className)}
      style={{
        maxWidth,
        ...style,
      }}
      data-size={size}
      data-color={color}
      data-variant={variant}
      {...restProps}
    >
      {(loading && <Skeleton loading={loading}>{loadingText}</Skeleton>) || children}
    </Component>
  );
};
