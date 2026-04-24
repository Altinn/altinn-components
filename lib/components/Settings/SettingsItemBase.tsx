import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import {
  Badge,
  type BadgeProps,
  Heading,
  type HeadingProps,
  ItemBase,
  type ItemBaseProps,
  ItemControls,
  ItemLink,
  type ItemLinkProps,
  ItemMedia,
  type ItemMediaProps,
  Typography,
} from '..';

import styles from './settingsItemBase.module.css';

export interface SettingsItemBaseProps extends ItemLinkProps {
  id?: string;
  groupId?: string;
  hidden?: boolean;
  ref?: ItemBaseProps['ref'];
  color?: ItemBaseProps['color'];
  icon?: ItemMediaProps['icon'];
  label?: ReactNode;
  titleProps?: HeadingProps;
  descriptionProps?: HeadingProps;
  highlightWords?: string[];
  badge?: BadgeProps;
  colllapsible?: boolean;
  expanded?: boolean;
  linkIcon?: boolean;
  controls?: ReactNode;
  children?: ReactNode;
  summary?: ReactNode;
}

export const SettingsItemBase = ({
  as,
  ref,
  hidden,
  loading,
  color,
  collapsible,
  expanded,
  icon,
  label,
  titleProps = {},
  descriptionProps = {},
  summary,
  children,
  highlightWords,
  badge,
  linkIcon,
  controls,
  ...rest
}: SettingsItemBaseProps) => {
  return (
    <li className={styles.listItem}>
      <ItemBase ref={ref} className={styles.item} color={color} aria-hidden={hidden} data-loading={loading}>
        <ItemLink {...rest} className={styles.link} as={as}>
          <ItemMedia icon={icon} className={styles.media} />
          {label || (
            <span className={styles.label}>
              <Heading
                {...titleProps}
                as="span"
                highlightWords={highlightWords}
                loading={loading}
                maxRows={2}
                className={styles.title}
              />
              <Heading
                {...descriptionProps}
                as="span"
                highlightWords={highlightWords}
                loading={loading}
                maxRows={2}
                className={styles.description}
              />
            </span>
          )}
        </ItemLink>
        <ItemControls className={styles.controls}>
          {controls}
          {badge && <Badge {...badge} />}

          {(collapsible &&
            (expanded ? (
              <ChevronUpIcon className={styles.linkIcon} />
            ) : (
              <ChevronDownIcon className={styles.linkIcon} />
            ))) ||
            (linkIcon && <ChevronRightIcon className={styles.linkIcon} />)}
        </ItemControls>
        {children}
      </ItemBase>
      {summary && (
        <Typography className={styles.summary} size="xs" variant="subtle">
          {summary}
        </Typography>
      )}
    </li>
  );
};
