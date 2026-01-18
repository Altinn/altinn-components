'use client';
import { GlobeIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { MouseEventHandler } from 'react';
import { Button } from '../';
import styles from './localeButton.module.css';

export interface LocaleButtonProps {
  id?: string;
  expanded?: boolean;
  onClick?: MouseEventHandler;
  onBlurCapture?: React.FocusEventHandler<HTMLButtonElement>;
}

export const LocaleButton = ({ id = 'language-switcher', expanded, onClick, onBlurCapture }: LocaleButtonProps) => {
  return (
    <Button
      className={cx(styles.button, expanded && styles.expanded)}
      rounded
      size="lg"
      variant="ghost"
      onClick={onClick}
      aria-label={`Open ${id}`}
      onBlurCapture={onBlurCapture}
    >
      <GlobeIcon />
    </Button>
  );
};
