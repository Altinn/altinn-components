'use client';
import { useVirtualizer } from '@tanstack/react-virtual';
import { type ReactNode, useEffect, useRef } from 'react';
import { Heading, SettingsItem, type SettingsItemProps } from '..';
import { useMenu } from '../../hooks';
import type { SettingsGroupProps, SettingsListProps } from './SettingsList';
import styles from './settingsListVirtual.module.css';

interface TitleEntry {
  type: 'title';
  title: string | ReactNode;
}

interface ItemEntry {
  type: 'item';
  itemProps: SettingsItemProps;
  isFirstInGroup: boolean;
  isLastInGroup: boolean;
}

type SettingsEntry = TitleEntry | ItemEntry;

export interface SettingsListVirtualProps {
  variant?: SettingsListProps['variant'];
  items: SettingsItemProps[];
  groups?: Record<string, SettingsGroupProps>;
  sortGroupBy?: SettingsListProps['sortGroupBy'];
}

export const SettingsListVirtual = ({
  items,
  variant = 'default',
  groups = {},
  sortGroupBy,
}: SettingsListVirtualProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { menu } = useMenu<SettingsItemProps, SettingsGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
    sortGroupBy,
  });

  const flatList: SettingsEntry[] = menu.flatMap((group) => {
    const groupProps: SettingsGroupProps = group?.props || {};
    const { title } = groupProps;
    const groupItems = group?.items || [];

    const entries: SettingsEntry[] = [];
    if (title) {
      entries.push({ type: 'title', title });
    }
    groupItems.forEach((item, idx) => {
      entries.push({
        type: 'item',
        itemProps: item.props || ({} as SettingsItemProps),
        isFirstInGroup: idx === 0,
        isLastInGroup: idx === groupItems.length - 1,
      });
    });
    return entries;
  });

  const virtualizer = useVirtualizer({
    count: flatList.length,
    useAnimationFrameWithResizeObserver: true,
    gap: 0,
    estimateSize: (index) => {
      const entry = flatList[index];
      if (!entry) return 56;
      if (entry.type === 'title') return index === 0 ? 48 : 72;
      const groupGap = variant === 'menu' ? 8 : 24;
      return entry.isLastInGroup ? 56 + groupGap : 56;
    },
    getScrollElement: () => scrollRef.current,
  });

  const virtualItems = virtualizer.getVirtualItems();

  // biome-ignore lint/correctness/useExhaustiveDependencies: matches AccountListVirtual
  useEffect(() => {
    for (const virtualItem of virtualItems) {
      const element =
        (scrollRef.current?.querySelector(`[data-index="${virtualItem.index}"]`) as HTMLElement | null) ??
        (scrollRef.current?.querySelector(`[dataindex="${virtualItem.index}"]`) as HTMLElement | null) ??
        (scrollRef.current?.querySelector(`[dataIndex="${virtualItem.index}"]`) as HTMLElement | null);
      if (element) {
        virtualizer.measureElement(element);
      }
    }
  }, [virtualItems]);

  return (
    <div className={styles.virtualScrollRefWrapper}>
      <div ref={scrollRef} className={styles.virtualScrollRef}>
        <ul
          className={styles.virtualList}
          style={{
            position: 'relative',
            height: `${virtualizer.getTotalSize()}px`,
          }}
        >
          {virtualItems.map((virtualRow) => {
            const entry = flatList[virtualRow.index];
            if (!entry) return null;

            if (entry.type === 'title') {
              return (
                <li
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  className={styles.virtualTitleItem}
                  style={{
                    transform: `translateY(${virtualRow.start}px)`,
                    paddingBottom: variant === 'menu' ? '0.5rem' : '1.5rem',
                  }}
                >
                  {variant === 'menu' ? (
                    <Heading size="xs" weight="normal" variant="subtle">
                      {entry.title as string}
                    </Heading>
                  ) : (
                    <Heading size="lg">{entry.title as string}</Heading>
                  )}
                </li>
              );
            }

            const showCard = variant === 'default';
            const wrapperClasses = [
              styles.virtualListItem,
              entry.isLastInGroup ? (variant === 'menu' ? styles.groupGapMenu : styles.groupGapDefault) : '',
            ]
              .filter(Boolean)
              .join(' ');
            const cardClasses = [
              showCard ? styles.groupCard : '',
              showCard && entry.isFirstInGroup ? styles.groupCardFirst : '',
              showCard && entry.isLastInGroup ? styles.groupCardLast : '',
              showCard && !entry.isFirstInGroup ? styles.groupCardNotFirst : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <li
                key={virtualRow.key}
                data-index={virtualRow.index}
                className={wrapperClasses}
                style={{ transform: `translateY(${virtualRow.start}px)` }}
              >
                <div className={cardClasses}>
                  <SettingsItem {...entry.itemProps} containerAs="div" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
