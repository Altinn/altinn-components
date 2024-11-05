import { MetaItem, type MetaItemSize, MetaProgress } from '../Meta';

export enum DialogStatusEnum {
  /** Used to indicate user-initiated dialogs not yet sent. */
  draft = 'DRAFT',
  /** Sent by the service owner. In a serial process, this is used after a submission is made. */
  sent = 'SENT',
  /** The dialogue is considered new. Typically used for simple messages that do not require any interaction, or as an initial step for dialogues. This is the default. */
  new = 'NEW',
  /** The dialogue was completed. This typically means that the dialogue is moved to a GUI archive or similar. */
  completed = 'COMPLETED',
  /** Started. In a serial process, this is used to indicate that, for example, a form filling is ongoing. */
  'in-progress' = 'IN_PROGRESS',
  /** Used to indicate that the dialogue is in progress/under work, but is in a state where the user must do something - for example, correct an error, or other conditions that hinder further processing. */
  'requires-attention' = 'REQUIRES_ATTENTION',
}

export type DialogStatusValue = keyof typeof DialogStatusEnum;

export interface DialogStatusProps {
  size?: MetaItemSize;
  value?: DialogStatusValue;
  label?: string;
}

/**
 * Dialog status.
 */

export const DialogStatus = ({ size = 'xs', value = 'new', label }: DialogStatusProps) => {
  switch (value) {
    case 'new':
      return null;
    case 'draft':
      return (
        <MetaItem size={size} variant="dotted">
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
      return (
        <MetaItem size={size} variant="outline">
          {label || value}
        </MetaItem>
      );
  }
};
