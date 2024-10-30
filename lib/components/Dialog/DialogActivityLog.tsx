import { MetaItem, type MetaItemSize } from "../Meta";

export interface DialogActivityLogProps {
  size: MetaItemSize;
  label?: string;
}

export const DialogActivityLog = ({
  size = "xs",
  label = "ActivityLog",
}: DialogActivityLogProps) => {
  return (
    <MetaItem size={size} icon={"clock-dashed"}>
      {label}
    </MetaItem>
  );
};
