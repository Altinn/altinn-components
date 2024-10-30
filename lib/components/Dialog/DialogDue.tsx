import { MetaTimestamp, type MetaItemSize } from "../Meta";

export interface DialogDueProps {
  size: MetaItemSize;
  dueAt: string;
  label?: string;
}

export const DialogDue = ({ size = "xs", dueAt }: DialogDueProps) => {
  if (!dueAt) {
    return;
  }
  return (
    <MetaTimestamp size={size} icon="clock-dashed" datetime={dueAt}>
      {dueAt}
    </MetaTimestamp>
  );
};
