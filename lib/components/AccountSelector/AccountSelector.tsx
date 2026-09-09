import cx from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { AccountMenu, type AccountMenuProps } from '../Account';
import { DsHeading, DsSpinner } from '../DsComponents';
import { SearchField, Switch } from '../Forms';
import { useRootContext } from '../RootProvider';
import styles from './accountSelector.module.css';

const MAX_ACCOUNTS_WITHOUT_SEARCH = 5;

const isIOS =
  typeof navigator !== 'undefined' &&
  (/iP(hone|ad|od)/.test(navigator.userAgent) ||
    // iPadOS 13+ reports itself as Mac
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

export interface AccountSelectorProps {
  accountMenu: AccountMenuProps;
  /** External control of fullscreen mode. When this flag is true, the account menu will open and cannot be minimized or closed.
   * Otherwise, open state is handled internally and the user can toggle fullscreen mode via the button below the account list.
   */
  forceOpenFullScreen?: boolean;
  className?: string;
  loading?: boolean;
  /** The external value of the include deleted accounts switch */
  showDeletedUnits?: boolean;
  /** Function to handle changes to the include deleted accounts switch */
  onShowDeletedUnitsChange?: (newValue: boolean) => void;
  /** Show in fullscreen*/
  isFullScreen?: boolean;
  /**
   * Total number of accounts the user has, including deleted ones. Used to
   * decide whether to show the search field, so the decision stays stable when
   * the user toggles deleted accounts on/off (toggling only changes how many
   * accounts are currently listed, not how many the user actually has).
   * Falls back to the number of currently listed accounts when not provided.
   */
  accountCount?: number;
}

export const AccountSelector = ({
  accountMenu,
  forceOpenFullScreen,
  className,
  loading,
  showDeletedUnits,
  onShowDeletedUnitsChange,
  isFullScreen,
  accountCount,
}: AccountSelectorProps) => {
  const { closeAll, languageCode, currentId } = useRootContext();
  const isOpen = currentId === 'account' || !!forceOpenFullScreen;

  const showSearch = (accountCount ?? accountMenu.items.length) > MAX_ACCOUNTS_WITHOUT_SEARCH;
  const showDeletedToggle = showDeletedUnits !== undefined;

  const [searchString, setSearchString] = useState('');
  const [forceOpenFullScreenState, setForceOpenFullScreenState] = useState<boolean | undefined>(forceOpenFullScreen);

  // Force a fresh AccountMenu (and thus a fresh @tanstack/react-virtual
  // instance) on every open. HeaderDrawer keeps children mounted inside its
  // `<dialog>`, so the virtualizer's internal scrollOffset and measured-size
  // cache otherwise survive across opens. After interacting with the list and
  // then having items shift (e.g. selection change), the stale state can leave
  // the list rendering only a small slice anchored at the previous offset.
  const [openCount, setOpenCount] = useState(0);
  const prevIsOpenRef = useRef(isOpen);
  const rootRef = useRef<HTMLDivElement>(null);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen && !prevIsOpenRef.current) {
      setOpenCount((c) => c + 1);
      // Reset scroll position on open. The drawer keeps children mounted, so
      // scroll offsets otherwise persist across opens. The virtualized list
      // resets via the openCount remount above; this also covers the
      // non-virtualized list, which scrolls within the enclosing <dialog>
      // drawer rather than the .accountMenu element itself.
      requestAnimationFrame(() => {
        accountMenuRef.current?.scrollTo({ top: 0 });
        rootRef.current?.closest('dialog')?.scrollTo({ top: 0 });
      });
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: we want to run this effect only when forceOpenFullScreen changes
  useEffect(() => {
    if (!forceOpenFullScreen && forceOpenFullScreenState) {
      closeAll();
    }
    setForceOpenFullScreenState(forceOpenFullScreen);
  }, [forceOpenFullScreen]);

  const { searchText, heading, switchLabel } = getTexts(languageCode);

  // On iOS Safari, focusing an input scrolls the document so the field sits
  // above the keyboard. Inside the fixed <dialog> drawer this shows up as a
  // jump. The search field is sticky at the top of the drawer, so it stays
  // visible regardless — undo the pan to keep the layout stable.
  const preventIOSFocusScroll: React.FocusEventHandler<HTMLInputElement> = () => {
    if (isIOS) {
      requestAnimationFrame(() => window.scrollTo({ top: -window.scrollY, behavior: 'instant' }));
    }
  };

  const onAccountSelection = (accountId: string) => {
    accountMenu.onSelectAccount?.(accountId);
    closeAll();
    setForceOpenFullScreenState(false);
  };

  if (loading) {
    return <DsSpinner aria-hidden data-color="neutral" className={styles.spinner} />;
  }

  return (
    <div ref={rootRef} className={cx(className, styles.accountSelector)}>
      <DsHeading data-size="sm" level={2} className={styles.heading} id="account-selector-heading">
        {heading}
      </DsHeading>
      {(showSearch || showDeletedToggle) && (
        <div className={styles.searchSection}>
          {showSearch && (
            <SearchField
              size="sm"
              aria-labelledby="account-selector-heading"
              label={searchText}
              hideLabel
              name={searchText}
              placeholder={searchText}
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              onClear={() => setSearchString('')}
              onBlur={preventIOSFocusScroll}
              className={styles.searchField}
            />
          )}
          {showDeletedToggle && (
            <Switch
              size="sm"
              checked={showDeletedUnits}
              onChange={(e) => onShowDeletedUnitsChange?.(e.target.checked)}
              label={switchLabel}
            />
          )}
        </div>
      )}
      <div
        ref={accountMenuRef}
        className={cx(
          styles.accountMenu,
          isFullScreen && styles.fullScreen,
          accountMenu.virtualized && styles.virtualized,
        )}
      >
        <AccountMenu
          key={openCount}
          {...accountMenu}
          onSelectAccount={onAccountSelection}
          keyboardEvents={false}
          search={{
            hidden: true,
            name: '',
            value: searchString,
            getResultsLabel: (hits) => getHitsLabel(hits, languageCode),
          }}
        />
      </div>
    </div>
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        searchText: 'Søk i aktørar',
        heading: 'Kven vil du bruke Altinn på vegner av?',
        switchLabel: 'Vis slettede',
      };
    case 'en':
      return {
        searchText: 'Search in actors',
        heading: 'Who do you want to use Altinn on behalf of?',
        switchLabel: 'Show deleted',
      };
    default:
      return {
        searchText: 'Søk i aktører',
        heading: 'Hvem vil du bruke Altinn på vegne av?',
        switchLabel: 'Vis slettede',
      };
  }
};

// TODO: Technical debt, move this to i18n later
const getHitsLabel = (hits: number, languageCode?: string): string => {
  const isNorwegian = languageCode === 'nb' || languageCode === 'nn';

  if (hits === 0) {
    return isNorwegian ? 'Ingen treff' : 'No hits';
  }

  if (isNorwegian) {
    return `${hits} treff`;
  }

  if (hits === 1) {
    return '1 hit';
  }

  return `${hits} hits`;
};
