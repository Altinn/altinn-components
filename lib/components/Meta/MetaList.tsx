import { MetaListBase } from "./MetaListBase";
import type { MetaItemBaseProps, MetaItemSize } from "./MetaItemBase";
import { MetaItem } from "./MetaItem";
import { MetaProgress } from "./MetaProgress";
import { MetaTimestamp } from "./MetaTimestamp";

export type MetaListItemType = "default" | "progress" | "timestamp";

export interface MetaListItemProps extends MetaItemBaseProps {
  type?: MetaListItemType;
  label: string;
}

export interface MetaListProps {
  size?: MetaItemSize;
  items?: MetaListItemProps[];
}

export const MetaListItem = ({
  type = "default",
  label,
  ...rest
}: MetaListItemProps) => {
  switch (type) {
    case "progress":
      return <MetaProgress {...rest}>{label}</MetaProgress>;
      break;
    case "timestamp":
      return <MetaTimestamp {...rest}>{label}</MetaTimestamp>;
      break;
    default:
      return <MetaItem {...rest}>{label}</MetaItem>;
  }
};

export const MetaList = ({ size = "xs", items = [] }: MetaListProps) => {
  return (
    <MetaListBase size={size}>
      {items?.map((item, index) => (
        <MetaListItem {...item} key={"meta-" + index} />
      ))}
    </MetaListBase>
  );
};
