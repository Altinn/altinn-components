import { CaretDownCircleIcon, CaretUpCircleIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { AccountMenu, type AccountMenuProps } from '../Account';
import { Button } from '../Button';
import { DsHeading, DsSpinner } from '../DsComponents';
import { SearchField } from '../Forms';
import { useRootContext } from '../RootProvider';
import styles from './accountSelector.module.css';

export interface AccountSelectorProps {
  accountMenu: AccountMenuProps;
  /** External control of fullscreen mode. When this flag is true, the account menu will open and cannot be minimized or closed.
   * Otherwise, open state is handled internally and the user can toggle fullscreen mode via the button below the account list.
   */
  forceOpenFullScreen?: boolean;
  className?: string;
  loading?: boolean;
}

export const AccountSelector = ({ accountMenu, forceOpenFullScreen, className, loading }: AccountSelectorProps) => {
  const { currentId, openId, closeAll, languageCode } = useRootContext();
  const isFullScreen = currentId === 'accountFullscreen';
  const [searchString, setSearchString] = useState('');
  const [forceOpenFullScreenState, setForceOpenFullScreenState] = useState<boolean | undefined>(forceOpenFullScreen);

  // biome-ignore lint/correctness/useExhaustiveDependencies: we want to run this effect only when forceOpenFullScreen changes
  useEffect(() => {
    if (!forceOpenFullScreen && forceOpenFullScreenState && isFullScreen) {
      closeAll();
    }
    setForceOpenFullScreenState(forceOpenFullScreen);
  }, [forceOpenFullScreen]);

  useEffect(() => {
    if (forceOpenFullScreenState === true && !isFullScreen) {
      openId('accountFullscreen');
    }
  }, [forceOpenFullScreenState, isFullScreen, openId]);

  const { minimize, fullscreen, searchText, heading } = getTexts(languageCode);

  const toggleExpansion = () => {
    if (isFullScreen) {
      openId('account');
    } else {
      openId('accountFullscreen');
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
    <div className={cx(className, styles.accountSelector)}>
      {isFullScreen && (
        <DsHeading data-size="md" level={2} className={styles.heading}>
          {heading}
        </DsHeading>
      )}
      <div className={styles.searchSection}>
        <SearchField
          name={searchText}
          placeholder={searchText}
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          onClear={() => setSearchString('')}
          className={styles.searchField}
        />
      </div>
      <div
        className={cx(
          styles.accountMenu,
          isFullScreen && styles.fullScreen,
          accountMenu.isVirtualized && styles.virtualized,
        )}
      >
        <AccountMenu
          {...accountMenu}
          onSelectAccount={onAccountSelection}
          keyboardEvents={false}
          search={{
            hidden: true,
            name: '',
            value: searchString,
            getResultsLabel: (hits) => getHitsLabel(hits, languageCode),
          }}
          scrollRefStyles={!isFullScreen && accountMenu.isVirtualized ? { maxHeight: 'calc(40vh)' } : undefined}
        />
      </div>
      {forceOpenFullScreenState !== true && (
        <Button
          icon={
            isFullScreen ? (
              <CaretUpCircleIcon className={styles.btnIcon} aria-hidden="true" />
            ) : (
              <CaretDownCircleIcon className={styles.btnIcon} aria-hidden="true" />
            )
          }
          variant="text"
          onClick={toggleExpansion}
        >
          {isFullScreen ? minimize : fullscreen}
        </Button>
      )}
    </div>
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        minimize: 'Minimer',
        fullscreen: 'Vis i fullskjerm',
        searchText: 'Søk i aktørar',
        heading: 'Kven vil du representere?',
      };
    case 'en':
      return {
        minimize: 'Minimize',
        fullscreen: 'Show in fullscreen',
        searchText: 'Search in actors',
        heading: 'Who do you want to represent?',
      };
    default:
      return {
        minimize: 'Minimer',
        fullscreen: 'Vis i fullskjerm',
        searchText: 'Søk i aktører',
        heading: 'Hvem vil du representere?',
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
