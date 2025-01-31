"use client";
import {
  ListBase,
  TransmissionListItem,
  type TransmissionListItemProps,
  type ListItemSize,
  type ListItemColor,
  type ListItemTheme,
} from "../";

export interface TransmissionListProps {
  level?: number;
  expanded?: boolean;
  expandLabel?: string;
  collapseLabel?: string;
  items: TransmissionListItemProps[];
  defaultItemSize?: ListItemSize;
  defaultItemColor?: ListItemColor;
  defaultItemTheme?: ListItemTheme;
}

export const TransmissionList = ({
  level = 0,
  items,
  expandLabel = "{count} answers",
  collapseLabel = "Collapse answers",
  defaultItemSize,
  defaultItemColor,
  defaultItemTheme,
}: TransmissionListProps) => {
  return (
    <ListBase spacing={level > 0 ? 2 : 4}>
      {items.map((item, index) => {
        return (
          <TransmissionListItem
            key={index}
            {...item}
            level={level}
            items={item?.items}
            expandLabel={expandLabel}
            collapseLabel={collapseLabel}
            defaultItemSize={defaultItemSize}
            defaultItemColor={defaultItemColor}
            defaultItemTheme={defaultItemTheme}
          />
        );
      })}
    </ListBase>
  );
};
