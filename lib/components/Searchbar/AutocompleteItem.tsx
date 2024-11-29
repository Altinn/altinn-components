import { BookmarksListItem, type BookmarksListItemProps } from '../Bookmarks';
import { DialogListItem, type DialogListItemProps } from '../Dialog/';
import { ListItem, type ListItemProps } from '../List/';
import { ScopeListItem, type ScopeListItemProps } from './ScopeListItem';

import type { BadgeProps } from '../Badge';

export type AutocompleteItemType = 'scope' | 'dialog' | 'bookmark' | 'information';

export interface AutoCompleteItemWithType {
  type: AutocompleteItemType;
  groupId?: string;
  active?: boolean;
}

export interface ScopeAutocompleteItemProps extends AutoCompleteItemWithType, ScopeListItemProps {
  type: 'scope';
}

export interface DialogAutocompleteItemProps extends AutoCompleteItemWithType, DialogListItemProps {
  type: 'dialog';
}

export interface BookmarkAutocompleteItemProps extends AutoCompleteItemWithType, BookmarksListItemProps {
  type: 'bookmark';
}

export interface InformationAutocompleteItemProps extends AutoCompleteItemWithType {
  type: 'information';
  badge: BadgeProps;
}

export type AutocompleteItemProps =
  | ScopeAutocompleteItemProps
  | DialogAutocompleteItemProps
  | BookmarkAutocompleteItemProps
  | InformationAutocompleteItemProps;

export const AutocompleteItem = ({ type, ...props }: AutocompleteItemProps) => {
  switch (type) {
    case 'scope':
      return <ScopeListItem {...(props as ScopeAutocompleteItemProps)} shadow="none" tabIndex={-1} />;
    case 'bookmark':
      return <BookmarksListItem {...(props as BookmarksListItemProps)} shadow="none" size="sm" tabIndex={-1} />;
    case 'dialog':
      return <DialogListItem {...(props as DialogListItemProps)} shadow="none" size="sm" tabIndex={-1} />;
    case 'information':
      return <ListItem {...(props as ListItemProps)} shadow="none" tabIndex={-1} disabled={true} />;
    default:
      return <ListItem {...(props as ListItemProps)} shadow="none" size="sm" tabIndex={-1} />;
  }
};
