import { MetaItem, type MetaItemProps } from './MetaItem';

export interface MetaTimestampProps extends MetaItemProps {
  /** Datetime in ISO format */
  datetime?: string;
}

export const MetaTimestamp = ({ datetime, children, ...rest }: MetaTimestampProps) => {
  return (
    <MetaItem as="time" datetime={datetime} {...rest}>
      {children}
    </MetaItem>
  );
};
