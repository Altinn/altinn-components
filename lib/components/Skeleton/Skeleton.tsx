import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import styles from './skeleton.module.css';

/**
 * Visual variant options for skeleton loaders.
 * - 'text': Rectangular placeholder for text content (default)
 * - 'circle': Circular placeholder for avatars, icons, or round elements
 */
export type SkeletonVariant = 'circle' | 'text';

/**
 * Props for the Skeleton component.
 *
 * The Skeleton component provides loading placeholders that maintain the layout
 * while content is being fetched. It shows animated placeholders that match the
 * shape and size of the expected content.
 *
 * @example
 * ```tsx
 * // Text content skeleton
 * <Skeleton loading={isLoading}>
 *   <p>This text will show when loaded</p>
 * </Skeleton>
 *
 * // Avatar skeleton
 * <Skeleton loading={isLoading} variant="circle">
 *   <Avatar name="John Doe" />
 * </Skeleton>
 *
 * // Custom element and size
 * <Skeleton
 *   as="div"
 *   loading={isLoading}
 *   size="200px"
 *   variant="text"
 * >
 *   <img src="/image.jpg" alt="Content" />
 * </Skeleton>
 *
 * // Multiple skeletons for list items
 * {isLoading ? (
 *   Array.from({ length: 3 }).map((_, i) => (
 *     <Skeleton key={i} loading={true} variant="text">
 *       <div>List item placeholder</div>
 *     </Skeleton>
 *   ))
 * ) : (
 *   items.map(item => <ListItem key={item.id} {...item} />)
 * )}
 * ```
 */
interface SkeletonProps {
  /**
   * The HTML element type to render as the skeleton container.
   * @default 'span'
   */
  as?: ElementType;
  /**
   * Whether to show the skeleton loading state. When false, renders children normally.
   * @default false
   */
  loading?: boolean;
  /**
   * The visual style of the skeleton placeholder.
   * @default 'text'
   */
  variant?: SkeletonVariant;
  /**
   * Custom size for the skeleton. Can be any valid CSS size value.
   * Useful for creating skeletons with specific dimensions.
   */
  size?: string;
  /**
   * The actual content to display when not in loading state.
   * When loading is true, this content is hidden but maintains layout structure.
   */
  children?: ReactNode;
  /**
   * Additional CSS class names to apply to the skeleton container.
   */
  className?: string;
}

/**
 * Skeleton component for displaying loading placeholders.
 *
 * The Skeleton component creates animated loading placeholders that maintain layout
 * structure while content is being fetched. It provides a smooth user experience
 * by showing users where content will appear and preventing layout shifts.
 *
 * Key features:
 * - Conditional rendering based on loading state
 * - Multiple visual variants (text, circle)
 * - Customizable container element
 * - Accessibility support with aria-busy and aria-hidden
 * - Maintains layout structure during loading
 * - Smooth animations and transitions
 * - Custom sizing support
 *
 * The component works by:
 * 1. When loading=true: Shows animated skeleton placeholder
 * 2. When loading=false: Shows actual content (children)
 * 3. Maintains the same layout dimensions in both states
 *
 * Best practices:
 * - Use 'text' variant for text content, lists, and rectangular areas
 * - Use 'circle' variant for avatars, profile pictures, and round elements
 * - Wrap the actual content as children to maintain proper layout
 * - Consider using multiple skeletons for complex layouts
 * - Match skeleton dimensions to expected content size
 *
 * @example
 * ```tsx
 * // Basic text skeleton
 * <Skeleton loading={isLoadingUser}>
 *   <h2>{user.name}</h2>
 * </Skeleton>
 *
 * // Profile section with multiple skeletons
 * <div className="profile">
 *   <Skeleton loading={isLoading} variant="circle">
 *     <Avatar name={user.name} imageUrl={user.avatar} />
 *   </Skeleton>
 *
 *   <div className="info">
 *     <Skeleton loading={isLoading}>
 *       <h3>{user.name}</h3>
 *     </Skeleton>
 *     <Skeleton loading={isLoading}>
 *       <p>{user.title}</p>
 *     </Skeleton>
 *   </div>
 * </div>
 *
 * // Card list with skeletons
 * <div className="card-list">
 *   {isLoading ? (
 *     Array.from({ length: 5 }).map((_, index) => (
 *       <Skeleton key={index} loading={true} as="article">
 *         <div className="card">
 *           <div className="card-header">Title</div>
 *           <div className="card-content">Content</div>
 *         </div>
 *       </Skeleton>
 *     ))
 *   ) : (
 *     cards.map(card => <Card key={card.id} {...card} />)
 *   )}
 * </div>
 * ```
 *
 * @param props - The props for the Skeleton component
 * @returns A React element representing either the skeleton placeholder or the actual content
 */
export const Skeleton = ({
  as = 'span',
  loading = false,
  size,
  variant = 'text',
  className,
  children,
}: SkeletonProps) => {
  const Component = as;

  if (loading) {
    return (
      <Component
        className={cx(styles.skeleton, className)}
        aria-busy
        data-size={size}
        data-loading={loading}
        data-variant={variant}
        aria-hidden
      >
        <div aria-hidden="true">{children}</div>
      </Component>
    );
  }

  return children;
};
