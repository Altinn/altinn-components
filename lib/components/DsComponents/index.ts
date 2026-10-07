import { Alert, type AlertProps } from '@digdir/designsystemet-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

/**
 * Support `xs` iby our own theme.css (`[data-size="xs"]`), but is missing from Designsystemet's `Size` type.
 */
export type DsAlertProps = Omit<AlertProps, 'data-size'> & {
  'data-size'?: 'xs' | AlertProps['data-size'];
};

export const DsAlert = Alert as ForwardRefExoticComponent<DsAlertProps & RefAttributes<HTMLDivElement>>;

export {
  Badge as DsBadge,
  Button as DsButton,
  type ButtonProps as DsButtonProps,
  Checkbox as DsCheckbox,
  Chip as DsChip,
  Combobox as DsCombobox,
  Switch as DsSwitch,
  Textfield as DsTextfield,
  Details as DsDetails,
  Dialog as DsDialog,
  Heading as DsHeading,
  Link as DsLink,
  ListItem as DsListItem,
  type ListItemProps as DsListItemProps,
  ListUnordered as DsListUnordered,
  type ListUnorderedProps as DsListUnorderedProps,
  Pagination as DsPagination,
  usePagination as useDsPagination,
  type PaginationProps as DsPaginationProps,
  Paragraph as DsParagraph,
  type ParagraphProps as DsParagraphProps,
  Popover as DsPopover,
  type PopoverProps as DsPopoverProps,
  Search as DsSearch,
  Skeleton as DsSkeleton,
  Spinner as DsSpinner,
  Tabs as DsTabs,
  ValidationMessage as DsValidationMessage,
  type ValidationMessageProps as DsValidationMessageProps,
} from '@digdir/designsystemet-react';
