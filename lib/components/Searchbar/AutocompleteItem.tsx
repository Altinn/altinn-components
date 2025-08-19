import {
  BookmarksListItem,
  type BookmarksListItemProps,
  DialogListItem,
  type DialogListItemProps,
  ListItem,
  type ListItemProps,
  ScopeListItem,
  type ScopeListItemProps,
  SuggestListItem,
  type SuggestListItemProps,
} from '..';
import type { BadgeProps } from '../Badge';

export type AutocompleteItemType = 'scope' | 'suggest' | 'dialog' | 'bookmark' | 'information';

export interface AutoCompleteItemWithType {
  type: AutocompleteItemType;
  onClick?: () => void;
  groupId?: string;
  active?: boolean;
}

export interface ScopeAutocompleteItemProps extends AutoCompleteItemWithType, ScopeListItemProps {
  type: 'scope';
}

export interface SuggestAutocompleteItemProps extends AutoCompleteItemWithType, SuggestListItemProps {
  type: 'suggest';
}

export interface DialogAutocompleteItemProps extends AutoCompleteItemWithType, DialogListItemProps {
  type: 'dialog';
}

export interface BookmarkAutocompleteItemProps extends AutoCompleteItemWithType, BookmarksListItemProps {
  type: 'bookmark';
}

export interface InformationAutocompleteItemProps extends AutoCompleteItemWithType, ListItemProps {
  type: 'information';
  badge?: BadgeProps | undefined;
}

export type AutocompleteItemProps =
  | ScopeAutocompleteItemProps
  | SuggestAutocompleteItemProps
  | DialogAutocompleteItemProps
  | BookmarkAutocompleteItemProps
  | InformationAutocompleteItemProps;

export const AutocompleteItem = ({ type, ...props }: AutocompleteItemProps) => {
  switch (type) {
    case 'scope':
      return (
        <ScopeListItem
          {...(props as ScopeAutocompleteItemProps)}
          variant="default"
          shadow="none"
          size="sm"
          tabIndex={-1}
          linkIcon
        />
      );
    case 'suggest':
      return (
        <SuggestListItem
          {...(props as SuggestAutocompleteItemProps)}
          variant="default"
          shadow="none"
          size="sm"
          tabIndex={-1}
          linkIcon
        />
      );
    case 'bookmark':
      return (
        <BookmarksListItem
          {...(props as BookmarksListItemProps)}
          variant="default"
          shadow="none"
          size="sm"
          tabIndex={-1}
        />
      );
    case 'dialog':
      return (
        <DialogListItem
          {...(props as DialogListItemProps)}
          variant="default"
          shadow="none"
          size="sm"
          tabIndex={-1}
          linkIcon
        />
      );
    case 'information':
      return (
        <ListItem
          as="div"
          {...(props as ListItemProps)}
          variant="default"
          shadow="none"
          tabIndex={-1}
          size="sm"
          interactive={false}
        />
      );
    default:
      return <ListItem {...(props as ListItemProps)} variant="default" shadow="none" size="sm" tabIndex={-1} />;
  }
};
