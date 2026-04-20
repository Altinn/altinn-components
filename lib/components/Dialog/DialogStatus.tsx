import { Badge } from '../';

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
  value?: DialogStatusValue;
  tooltip?: string;
  label?: string;
}

/**
 * Dialog status.
 */

export const DialogStatus = ({ loading, value = 'not-applicable', label, tooltip }: DialogStatusProps) => {
  if (loading) {
    return null;
  }

  switch (value) {
    case 'draft':
      return (
        <Badge tooltip={tooltip} variant="dotted">
          {label || value}
        </Badge>
      );
    case 'requires-attention':
      return (
        <Badge tooltip={tooltip} variant="strong">
          {label || value}
        </Badge>
      );
    case 'not-applicable':
      return null;
    default:
      return (
        <Badge tooltip={tooltip} variant="outline">
          {label || value}
        </Badge>
      );
  }
};
