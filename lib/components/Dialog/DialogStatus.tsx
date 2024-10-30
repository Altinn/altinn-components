import { MetaItem, MetaProgress, type MetaItemSize } from "../Meta";

export type DialogStatusValue =
  | "draft"
  | "sent"
  | "new"
  | "requires-attention"
  | "in-progress"
  | "completed";

export interface DialogStatusProps {
  size?: MetaItemSize;
  value?: DialogStatusValue;
  label?: string;
}

export const DialogStatus = ({
  size = "xs",
  value = "new",
  label = "New",
}: DialogStatusProps) => {
  switch (value) {
    case "draft":
      return (
        <MetaItem size={size} variant="dotted">
          {label}
        </MetaItem>
      );
    case "requires-attention":
      return <MetaItem variant="solid">{label}</MetaItem>;
    case "in-progress":
      return (
        <MetaProgress size={size} variant="outline" progress={75}>
          {label}
        </MetaProgress>
      );
    case "completed":
      return (
        <MetaProgress size={size} variant="outline" progress={100}>
          {label}
        </MetaProgress>
      );
    default:
      return (
        <MetaItem size={size} variant="outline">
          {label}
        </MetaItem>
      );
  }
};
