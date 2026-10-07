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
  disabled?: boolean;
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
  containerAs?: 'li' | 'div';
}

export const SettingsItemBase = ({
  as,
  ref,
  hidden,
  disabled,
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
  containerAs: ContainerTag = 'li',
  ...rest
}: SettingsItemBaseProps) => {
  return (
    <ContainerTag className={styles.listItem} data-collapsible={collapsible} data-expanded={expanded} id={rest.id}>
      <ItemBase ref={ref} as="div" className={styles.item} color={color} aria-hidden={hidden} data-loading={loading}>
        <ItemLink {...rest} className={styles.link} disabled={disabled} as={as}>
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
        {!disabled && (
          <>
            <ItemControls className={styles.controls}>{controls}</ItemControls>
            {badge && <Badge {...badge} />}
            {(collapsible &&
              (expanded ? (
                <ChevronUpIcon className={styles.linkIcon} aria-hidden="true" focusable="false" />
              ) : (
                <ChevronDownIcon className={styles.linkIcon} aria-hidden="true" focusable="false" />
              ))) ||
              (linkIcon && <ChevronRightIcon className={styles.linkIcon} aria-hidden="true" focusable="false" />)}
          </>
        )}
      </ItemBase>
      {summary && (
        <Typography className={styles.summary} size="xs" variant="subtle">
          {summary}
        </Typography>
      )}
      {children}
    </ContainerTag>
  );
};
