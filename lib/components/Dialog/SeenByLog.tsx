'use client';
import { EyeIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { type AvatarProps, Badge, Byline, ListBase, MetaBase, MetaItem, Section } from '..';
import styles from './SeenByLog.module.css';

export interface SeenByLogItem extends AvatarProps {
  id: string;
  seenAt: string;
  seenAtLabel: string;
  isEndUser?: boolean;
}

export interface SeenByLogProps {
  title?: string;
  collapsible?: boolean;
  expanded?: boolean;
  items: SeenByLogItem[];
  endUserLabel?: string;
}

/**
 * SeenByLog
 */

export const SeenByLog = ({ collapsible, expanded, title, items, endUserLabel = 'You' }: SeenByLogProps) => {
  const [open, setOpen] = useState<boolean>(expanded || !collapsible);

  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Section spacing={2}>
      {title && (
        <MetaBase>
          <MetaItem icon={EyeIcon} as="button" onClick={onToggle}>
            {title}
          </MetaItem>
        </MetaBase>
      )}
      {open && (
        <ListBase className={styles.list}>
          {items?.map((item) => {
            const { id, name, seenAt, seenAtLabel, isEndUser } = item;

            return (
              <li key={id} className={styles.item}>
                <Byline size="sm" datetime={seenAt} avatar={{ name, type: 'person' }}>
                  <strong>{name + ','}</strong> {seenAtLabel}
                </Byline>
                {isEndUser && <Badge theme="surface">{endUserLabel}</Badge>}
              </li>
            );
          })}
        </ListBase>
      )}
    </Section>
  );
};
