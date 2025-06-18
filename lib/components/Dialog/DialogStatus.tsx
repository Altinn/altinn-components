import { MetaItem, type MetaItemSize, MetaProgress } from '../Metadata';

export enum DialogStatusEnum {
  /** No explicit status. This is the default. */
  'not-applicable' = 'NOT_APPLICABLE',
  /** Used to indicate user-initiated dialogs not yet sent. */
  draft = 'DRAFT',
  /** Awaiting action by the service owner. Indicates that the dialog is in a state where the party representative has no further tasks, and the responsibility lies with the service owner. */
  awaiting = 'AWAITING',
  /** The dialogue was completed. This typically means that the dialogue is moved to a GUI archive or similar. */
  completed = 'COMPLETED',
  /** Started. In a serial process, this is used to indicate that, for example, a form filling is ongoing. */
  'in-progress' = 'IN_PROGRESS',
  /** Used to indicate that the dialogue is in progress/under work, but is in a state where the user must do something - for example, correct an error, or other conditions that hinder further processing. */
  'requires-attention' = 'REQUIRES_ATTENTION',
}

export type DialogStatusValue = keyof typeof DialogStatusEnum;

export interface DialogStatusProps {
  loading?: boolean;
  size?: MetaItemSize;
  value?: DialogStatusValue;
  label?: string;
}

/**
 * Dialog status.
 */

export const DialogStatus = ({ loading, size = 'xs', value = 'not-applicable', label }: DialogStatusProps) => {
  if (loading) {
    return null;
  }

  switch (value) {
    case 'draft':
      return (
        <MetaItem size={size} variant="dotted">
          {label || value}
        </MetaItem>
      );
    case 'awaiting':
      return (
        <MetaItem size={size} variant="outline">
          {label || value}
        </MetaItem>
      );

    case 'requires-attention':
      return <MetaItem variant="solid">{label || value}</MetaItem>;
    case 'in-progress':
      return (
        <MetaProgress size={size} variant="outline" progress={75}>
          {label || value}
        </MetaProgress>
      );
    case 'completed':
      return (
        <MetaProgress size={size} variant="outline" progress={100}>
          {label || value}
        </MetaProgress>
      );
    default:
      return null;
  }
};
