'use client';
import { type FocusEvent, type RefObject, useCallback, useEffect, useRef } from 'react';

const ITEM_SELECTOR = '[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="option"]';

/** Frames to wait for a row a virtualized list has not rendered yet. */
const MAX_FRAMES = 30;

/**
 * Moves real focus to the active item, like the proposed `focusgroup`. Hover moves focus only while
 * focus is already in the list. Not used with a search field, which keeps `aria-activedescendant`.
 */
export const useRovingFocus = ({
  enabled,
  listRef,
  activeId,
}: {
  enabled: boolean;
  listRef: RefObject<HTMLElement | null>;
  activeId?: string;
}) => {
  const frameRef = useRef(0);

  const focusItem = useCallback(
    (id: string | undefined) => {
      cancelAnimationFrame(frameRef.current);
      let frames = 0;
      const attempt = () => {
        const list = listRef.current;
        if (!list || !list.contains(document.activeElement)) return;
        const byId = id ? document.getElementById(id) : null;
        const item =
          byId && list.contains(byId)
            ? byId
            : id
              ? null
              : list.querySelector<HTMLElement>(`${ITEM_SELECTOR}:not([aria-disabled="true"])`);
        if (item) {
          if (document.activeElement !== item) item.focus({ preventScroll: true });
          return;
        }
        if (++frames < MAX_FRAMES) frameRef.current = requestAnimationFrame(attempt);
      };
      attempt();
    },
    [listRef],
  );

  useEffect(() => {
    if (!enabled || !activeId) return;
    focusItem(activeId);
  }, [enabled, activeId, focusItem]);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  /** When the list itself gets focus, pass it on to the active item. */
  const onFocus = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      if (!enabled || event.target !== event.currentTarget) return;
      focusItem(activeId);
    },
    [enabled, activeId, focusItem],
  );

  return { onFocus };
};
