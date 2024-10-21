import {useState, useEffect } from "react";
import { ToolbarBase } from "./ToolbarBase";
import { ToolbarItem, type ToolbarItemProps } from "./ToolbarItem";
import { ToolbarAdd } from "./ToolbarAdd";

export interface ToolbarProps {
  items?: ToolbarItemProps[];
  values?: Record<string, string>;
}

export const Toolbar = ({ items }: ToolbarProps) => {
  const [openId, setOpenId] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string>('');
  const [hiddenItems, setHiddenItems] = useState<ToolbarItemProps[]>(items?.filter((item) => item.hidden) || []);
  const [visibleItems, setVisibleItems] = useState<ToolbarItemProps[]>(items?.filter((item) => !item.hidden) || []);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const onToggle = (id: string) => {
    setExpandedId((prevState) => (prevState === id ? "" : id));
  }

  return (
    <ToolbarBase>
      {visibleItems.map((item, index) => {
        return (
          <ToolbarItem
            key={index}
            onToggle={() => onToggle(item.id)}
            expanded={expandedId === item.id}
            onRemove={() => {}}
            onChange={() => {}}
            {...item}
          />
        );
      })}
      {hiddenItems?.length > 0 && (
        <ToolbarAdd
          expanded={isAdding}
          onToggle={() => setIsAdding((prevState) => !prevState)}
          items={hiddenItems}
        />
      )}
    </ToolbarBase>
  );
};

