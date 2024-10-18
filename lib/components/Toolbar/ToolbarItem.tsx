import { ToolbarSearch } from "./ToolbarSearch";
import { ToolbarFilter } from "./ToolbarFilter";
import { ToolbarMenu } from "./ToolbarMenu";

export type ToolbarItemType = "search" | "filter" | "menu";

export interface ToolbarItemProps {
  type?: ToolbarItemType;
}

export const ToolbarItem = ({ type, ...rest }: ToolbarItemProps) => {
  if (type === "search") {
    return <ToolbarSearch {...rest} />;
  }

  if (type === "filter") {
    return <ToolbarFilter {...rest} />;
  }

  return <ToolbarMenu {...rest} />;
};
