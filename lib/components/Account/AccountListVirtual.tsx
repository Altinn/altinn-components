'use client';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useRef } from 'react';
import { AccountListItem, type AccountListItemProps, Heading, Section } from '..';
import { useMenu } from '../../hooks';
import type { AccountListGroupProps } from './AccountList';
import styles from './accountListVirtual.module.css';

interface TitleEntry {
  type: 'title';
  title: string;
}

interface ItemEntry {
  type: 'item';
  itemProps: AccountListItemProps;
}

type AccountEntry = TitleEntry | ItemEntry;

export interface AccountListVirtualProps {
  items: AccountListItemProps[];
  groups?: Record<string, AccountListGroupProps>;
  sortGroupBy?: (a: [string, AccountListItemProps[]], b: [string, AccountListItemProps[]]) => number;
}

export const AccountListVirtual = ({ items, groups = {}, sortGroupBy }: AccountListVirtualProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { menu } = useMenu<AccountListItemProps, AccountListGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
    sortGroupBy,
  });

  const flatList = menu.flatMap((group) => {
    const groupProps: AccountListGroupProps = group?.props || {};
    const { title } = groupProps;

    const items = group?.items || [];

    return [
      ...(title ? [{ type: 'title' as const, title }] : []),
      ...items.map((item) => ({
        type: 'item' as const,
        itemProps: item.props || {},
      })),
    ];
  });

  const virtualizer = useVirtualizer({
    count: flatList.length,
    gap: 8,
    estimateSize: (index) => {
      const entry = flatList[index];
      if (!entry) return 44;
      if (entry.type === 'title') return index === 0 ? 48 : 88;

      // Check if this item is the last child in a parent-child group
      const nextEntry = flatList[index + 1];
      const currentItem = entry.itemProps;
      const isLastChild =
        currentItem?.parentId &&
        (!nextEntry || nextEntry.type === 'title' || (nextEntry.type === 'item' && !nextEntry.itemProps?.parentId));

      // Last children get extra height to create spacing between company groups
      return isLastChild ? 96 : 80;
    },
    getScrollElement: () => scrollRef.current,
  });

  const virtualItems = virtualizer.getVirtualItems();

  // biome-ignore lint/correctness/useExhaustiveDependencies: This hook does not specify all of its dependencies
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
    <Section spacing={6}>
      <div ref={scrollRef} className={styles.virtualScrollRef}>
        <ul
          className={styles.virtualList}
          style={{
            position: 'relative',
            height: `${virtualizer.getTotalSize()}px`,
          }}
        >
          {virtualItems.map((virtualRow) => {
            const entry = flatList[virtualRow.index] as AccountEntry;
            if (!entry) return null;

            if (entry.type === 'title') {
              return (
                <li
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  className={styles.virtualTitleItem}
                  style={{ transform: `translateY(${virtualRow.start}px)` }}
                >
                  <Heading size="lg">{entry.title}</Heading>
                </li>
              );
            }

            if (entry.type === 'item') {
              // Check if this is the last child before a new parent/title
              const nextEntry = flatList[virtualRow.index + 1];
              const isLastChild =
                entry.itemProps?.parentId &&
                (!nextEntry ||
                  nextEntry.type === 'title' ||
                  (nextEntry.type === 'item' && !nextEntry.itemProps?.parentId));

              return (
                <li
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  className={`${styles.virtualListItem} ${isLastChild ? styles.lastChild : ''}`}
                  style={{ transform: `translateY(${virtualRow.start}px)` }}
                >
                  <AccountListItem {...entry.itemProps} containerAs="div" />
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>
    </Section>
  );
};
