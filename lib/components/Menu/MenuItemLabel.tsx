import cx from 'classnames';
import { type ReactNode, isValidElement } from 'react';
import { Badge, type BadgeProps, Heading, type HeadingProps } from '..';
import type { MenuItemSize } from './MenuItemBase';
import styles from './menuItemLabel.module.css';

export interface MenuItemLabelProps {
  className?: string;
  size?: MenuItemSize;
  label?: string;
  title?: HeadingProps | ReactNode | string;
  description?: HeadingProps | ReactNode | string;
  badge?: BadgeProps;
  children?: ReactNode;
}

// Checks if object looks like HeadingProps
const isHeadingProps = (heading: unknown): heading is HeadingProps => {
  return typeof heading === 'object' && heading !== null && 'children' in heading;
};

function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    isValidElement(value)
  );
}

const getTitleProps = (title: HeadingProps | ReactNode | string) => {
  const defaultProps: HeadingProps = {
    as: 'span',
  };

  if (isHeadingProps(title)) {
    return { ...defaultProps, ...title };
  }
  if (isReactNode(title)) {
    return {
      ...defaultProps,
      children: title,
    };
  }
  return null;
};

const getDescriptionProps = (description: HeadingProps | ReactNode | string) => {
  const defaultProps: HeadingProps = {
    as: 'span',
    weight: 'normal',
    variant: 'subtle',
  };

  if (isHeadingProps(description)) {
    return { ...defaultProps, ...description };
  }
  if (isReactNode(description)) {
    return {
      ...defaultProps,
      children: description,
    };
  }
  return null;
};

export function getAriaLabelFromTitle(title: HeadingProps | ReactNode | string) {
  if (typeof title === 'string') {
    return title;
  }
  if (isHeadingProps(title)) {
    return title.children as string;
  }
  return;
}

export const MenuItemLabel = ({ className, size = 'sm', title, badge, description, children }: MenuItemLabelProps) => {
  const titleProps = title && getTitleProps(title);
  const descriptionProps = description && getDescriptionProps(description);

  return (
    <span className={cx(styles.label, className)} data-size={size}>
      {children ? (
        children
      ) : (
        <>
          {titleProps && (
            <Heading
              {...titleProps}
              className={styles.title}
              weight={titleProps?.weight || size === 'lg' ? 'medium' : 'normal'}
            >
              {titleProps.children}
              {badge && <Badge {...badge} />}
            </Heading>
          )}
          {descriptionProps && (
            <Heading {...descriptionProps} size={descriptionProps.size || size === 'lg' ? 'xs' : 'xxs'} />
          )}
        </>
      )}
    </span>
  );
};
