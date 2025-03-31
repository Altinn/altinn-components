'use client';
import { GlobeIcon } from '@navikt/aksel-icons';
import type { MouseEventHandler } from 'react';
import { IconButton } from '../';
import styles from './localeButton.module.css';

export interface LocaleButtonProps {
  id?: string;
  expanded?: boolean;
  onClick?: MouseEventHandler;
}

export const LocaleButton = ({ id = 'language-switcher', expanded, onClick }: LocaleButtonProps) => {
  return (
    <IconButton
      className={styles.button}
      size="md"
      icon={GlobeIcon}
      iconSize="md"
      variant="text"
      selected={expanded}
      color="company"
      onClick={onClick}
      iconAltText={`Open ${id}`}
    />
  );
};
