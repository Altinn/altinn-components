import { useEffect, useRef } from "react";
import { Button } from "../Button/Button";
import classes from "./ListItemMenu.module.css";
import React from "react";

import { useClickOutside } from "../Menu/useClickOutside";
import { useEscapeKey } from "../Menu/useEscapeKey";
import { Icon, IconName } from "../Icon";

export interface MenuItem {
  label: string;
  onClick: () => void;
  icon?: IconName;
}

interface ListItemMenuProps {
  expanded?: boolean;
  icon?: IconName;
  items?: MenuItem[];
}

export const ListItemMenu = ({
  expanded = false,
  items,
  icon = "menu-elipsis-vertical",
}: ListItemMenuProps) => {
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  useClickOutside(menuRef, () => {
    setIsExpanded(false);
  });

  useEscapeKey(() => {
    setIsExpanded(false);
  });

  return (
    <div className={classes.dropdownContainer}>
      <button
        className={classes.toggleButton}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setIsExpanded(true);
        }}
      >
        <Icon className={classes.icon} name={icon} />
      </button>
      <div
        ref={menuRef}
        className={classes.dropdown}
        aria-expanded={isExpanded}
      >
        {isExpanded &&
          items?.map((item, index) => {
            return (
              <Button
                className={classes.dropdownItem}
                key={index}
                variant="text"
                icon={item.icon}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  item.onClick();
                  setIsExpanded(false);
                }}
              >
                {item.label}
              </Button>
            );
          })}
      </div>
    </div>
  );
};
