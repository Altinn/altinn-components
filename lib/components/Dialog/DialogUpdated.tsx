import { MetaTimestamp, type MetaItemSize } from "../Meta";

export interface DialogUpdatedProps {
  size?: MetaItemSize;
  updatedAt?: string;
  updatedByName?: string;
  label?: string;
}

export const DialogUpdated = ({
  size,
  updatedAt,
  updatedByName,
}: DialogUpdatedProps) => {
  if (!updatedAt) {
    return;
  }

  const label = updatedByName
    ? [updatedByName, updatedAt].join(", ")
    : updatedAt;

  return (
    <MetaTimestamp size={size} datetime={updatedAt}>
      {label}
    </MetaTimestamp>
  );
};
