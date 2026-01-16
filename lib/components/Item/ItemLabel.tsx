import cx from 'classnames';
import type { ReactNode } from 'react';
import { Heading, type HeadingProps } from '../Typography';
import styles from './itemLabel.module.css';

export interface MenuItemLabelProps {
  className?: string;
  label?: string;
  loading?: boolean;
  highlightWords?: string[];
  title?: ReactNode | string;
  titleProps?: HeadingProps;
  description?: ReactNode | string;
  descriptionProps?: HeadingProps;
  children?: ReactNode;
}

export const ItemLabel = ({
  className,
  title,
  titleProps = {},
  description,
  descriptionProps = {},
  highlightWords,
  loading,
  children,
}: MenuItemLabelProps) => {
  return (
    <span className={cx(styles.label, className)}>
      {children ? (
        children
      ) : (
        <>
          {title && (
            <Heading {...titleProps} as="span" loading={loading} highlightWords={highlightWords} maxRows={2}>
              {title}
            </Heading>
          )}
          {description && (
            <Heading
              {...descriptionProps}
              as="span"
              weight="normal"
              leading="inherit"
              loading={loading}
              highlightWords={highlightWords}
              maxRows={2}
            >
              {description}
            </Heading>
          )}
        </>
      )}
    </span>
  );
};
