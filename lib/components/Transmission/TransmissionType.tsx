import { Badge } from '../';

export enum TransmissionTypeEnum {
  /** Incoming transmissions */
  information = 'information',
  acceptance = 'acceptance',
  rejection = 'rejection',
  request = 'request',
  alert = 'alert',
  decision = 'decision',
  /** Outgoing transmissions should not display anything */
  submission = 'submission',
  correction = 'correction',
}

export type TransmissionTypeValue = keyof typeof TransmissionTypeEnum;

export interface TransmissionTypeProps {
  loading?: boolean;
  value?: TransmissionTypeValue;
  label?: string;
}

/**
 * Transmission type.
 */

export const TransmissionType = ({ loading, value, label }: TransmissionTypeProps) => {
  if (loading) {
    return null;
  }

  switch (value) {
    case 'submission':
      return null;
    case 'correction':
      return null;
    case 'acceptance':
      return <Badge color="success">{label || value}</Badge>;
    case 'rejection':
      return <Badge color="danger">{label || value}</Badge>;
    default:
      return <Badge>{label || value}</Badge>;
  }
};
