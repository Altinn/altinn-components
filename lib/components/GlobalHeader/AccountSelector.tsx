import { CaretDownCircleIcon, CaretUpCircleIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { AccountMenu, type AccountMenuProps } from '../Account';
import { Button } from '../Button';
import { DsHeading } from '../DsComponents';
import { SearchField } from '../Forms';
import { useRootContext } from '../RootProvider';
import styles from './accountSelector.module.css';

export interface AccountSelectorProps {
  accountMenu: AccountMenuProps;
  /** External control of fullscreen mode. When this flag is true, the account menu cannot be minimized or closed.
   * When the flag is set to false, the account menu cannot be maximized but can be opened and closed.
   * Set it to undefined to allow internal control of fullscreen mode
   */
  externalFullScreen?: boolean;
  className?: string;
  loading?: boolean;
}

export const AccountSelector = ({ accountMenu, externalFullScreen, className, loading }: AccountSelectorProps) => {
  const { currentId, openId, toggleId, languageCode } = useRootContext();
  const isFullScreen = currentId === 'accountFullscreen';
  const [searchString, setSearchString] = useState('');

  const { minimize, fullscreen, searchText, heading } = getTexts(languageCode);

  useEffect(() => {
    if (externalFullScreen !== undefined && !isFullScreen && externalFullScreen) {
      openId('accountFullscreen');
    } else if (externalFullScreen === false && isFullScreen) {
      toggleId('accountFullscreen');
    }
  }, [externalFullScreen, isFullScreen, openId, toggleId]);

  const toggleExpansion = () => {
    if (isFullScreen) {
      openId('account');
    } else {
      openId('accountFullscreen');
    }
  };

  if (loading) {
    return;
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
        <AccountMenu {...accountMenu} keyboardEvents={false} search={{ hidden: true, name: '', value: searchString }} />
      </div>
      {externalFullScreen === undefined && (
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
