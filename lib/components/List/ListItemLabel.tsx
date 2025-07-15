import cx from 'classnames';
import { type ReactNode, isValidElement } from 'react';
import { Heading, type HeadingProps } from '..';
import type { ListItemSize } from './ListItemBase';
import styles from './listItemLabel.module.css';

export interface ListItemLabelProps {
  id?: string;
  loading?: boolean;
  size?: ListItemSize;
  title?: HeadingProps | ReactNode | string;
  value?: HeadingProps | ReactNode | string;
  description?: HeadingProps | ReactNode | string;
  children?: ReactNode;
  className?: string;
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
    as: 'h3',
    size: 'sm',
    //    leading: "tight",
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
    size: 'xs',
    weight: 'normal',
    variant: 'subtle',
    //    leading: "tight",
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

export const ListItemLabel = ({
  loading = false,
  size,
  title,
  value,
  description,
  children,
  id,
  className,
}: ListItemLabelProps) => {
  if (title && value) {
    const titleProps = title && getTitleProps(title);
    const descriptionProps = value && getDescriptionProps(value);
    console.log('value', value); // Debugging line, can be removed later

    return (
      <span className={cx(styles.label, className)} id={id} data-size={size}>
        {children ? (
          children
        ) : (
          <>
            {titleProps && <Heading {...titleProps} loading={loading} />}
            {descriptionProps && <Heading {...descriptionProps} loading={loading} />}
          </>
        )}
      </span>
    );
  }

  const titleProps = title && getTitleProps(title);
  const descriptionProps = description && getDescriptionProps(description);

  console.log('titleProps', titleProps); // Debugging line, can be removed later
  console.log('descriptionProps', descriptionProps); // Debugging line, can be removed later
  return (
    <span className={cx(styles.label, className)} id={id} data-size={size}>
      {children ? (
        children
      ) : (
        <>
          {titleProps && <Heading {...titleProps} loading={loading} />}
          {descriptionProps && <Heading {...descriptionProps} loading={loading} />}
        </>
      )}
    </span>
  );
};
