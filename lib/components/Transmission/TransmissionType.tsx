import { Badge, type BadgeSize } from '../Badge';

export enum TransmissionTypeEnum {
  /** Used to indicate a user-initiated transmission not yet sent. */
  draft = 'draft',
  /** Transmissions submitted by an end user. */
  submission = 'submission',
  /** User submitted correction. */
  correction = 'correction',
  /** The transmission has been accepted. */
  acceptance = 'acceptance',
  /** The transmission has been rejected. */
  rejection = 'Rejection',
  /** The transmission is an elert. */
  alert = 'Alert',
}

export type TransmissionTypeValue = keyof typeof TransmissionTypeEnum;

export interface TransmissionTypeProps {
  loading?: boolean;
  size?: BadgeSize;
  value?: TransmissionTypeValue;
  label?: string;
}

/**
 * Transmission type.
 */

export const TransmissionType = ({ loading, size = 'sm', label }: TransmissionTypeProps) => {
  if (loading) {
    return null;
  }

  return <Badge size={size}>{label}</Badge>;
};
