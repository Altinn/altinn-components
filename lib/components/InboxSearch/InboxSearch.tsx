import { Backdrop } from '../Dropdown';
import { useRootContext } from '../RootProvider';
import { Searchbar, type SearchbarProps } from '../Searchbar';

export interface InboxSearchProps {
  search: SearchbarProps;
}

export const InboxSearch = ({ search }: InboxSearchProps) => {
  const { currentId, toggleId, openId } = useRootContext();

  const onInboxSearchFocus = () => {
    openId('inboxSearch');
  };

  const onInboxSearchClose = () => {
    toggleId('inboxSearch');
  };

  return (
    <>
      {currentId === 'inboxSearch' && <Backdrop onClick={onInboxSearchClose} />}
      <Searchbar
        {...search}
        expanded={currentId === 'inboxSearch'}
        onClose={onInboxSearchClose}
        onFocus={onInboxSearchFocus}
        useGlobalHeader={true}
      />
    </>
  );
};
