import React, { ElementType, useEffect } from "react";
import cn from "classnames";

import classes from "./List.module.css";
import { IconProps, ListItemMedia } from "./ListItemMedia";
import { AvatarGroupProps, AvatarProps } from "../Avatar";
import { Icon } from "../Icon";
import { useUniqueId } from "../../hooks/useUniqueId";

export type listItemSize = "sm" | "md" | "lg";

interface ListItemProps {
  /** The title of the list item. */
  title: string | React.ReactNode;
  /** The subtitle of the list item. */
  subtitle?: React.ReactNode;
  /** The children elements of the list item. */
  children?: React.ReactNode;
  /** Additional information to display in the list item. */
  info?: React.ReactNode;
  /** Click handler for the list item. */
  onClick?: () => void;
  /** The href for the list item if it is a link. */
  href?: string;
  /** The size of the list item. */
  size?: listItemSize;
  /** The type of HTML element to render for the list item. */
  elementType?: ElementType;
  /** Whether the list item is expanded. */
  expanded?: boolean;
  /** The background of the list item. */
  background?: "transparent" | "neutral";
  /** Actions to display in the list item. */
  actions?: React.ReactNode[] | React.ReactNode;
  /** Additional class names for the list item. */
  className?: string;
  /** Media to display in the list item. */
  media?: {
    icon?: IconProps;
    avatar?: AvatarProps;
    avatarGroup?: AvatarGroupProps;
  };
}

/**
 * ListItem component to render a list item with optional media, actions, and expandable content.
 */
export const ListItem = ({
  title,
  subtitle,
  info,
  size = "md",
  media,
  className,
  href,
  onClick,
  children,
  elementType = "div",
  expanded: externalExpanded,
  background,
  actions,
  ...props
}: ListItemProps) => {
  const isClickable = !!href || !!onClick;
  const isExpandable = !!children;
  const Element = (elementType ??= !!href
    ? "a"
    : !!onClick || isExpandable
    ? "button"
    : "div");
  const [isExpanded, setIsExpanded] = React.useState(externalExpanded);
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const contentId = useUniqueId("list-item-content");

  useEffect(() => {
    setIsExpanded(externalExpanded);
  }, [externalExpanded]);

  return (
    <li
      data-background={background}
      data-size={size}
      className={cn(classes.listItem, className)}
      data-varaint={background}
      {...props}
    >
      <div className={classes.flex}>
        <Element
          aria-expanded={isExpandable ? isExpanded : undefined}
          aria-controls={isExpandable ? contentId : undefined}
          href={href}
          className={cn(classes.content, isClickable && classes.clickableItem)}
          onClick={() => {
            onClick?.();
            if (isExpandable) {
              toggleExpanded();
            }
          }}
          data-size={size}
        >
          {!!media && <ListItemMedia size={size} {...media} />}
          <div className={classes.text} data-size={size}>
            <span className={classes.mainText} data-size={size}>
              {title}
            </span>
            {subtitle && <span className={classes.secondaryText}>{subtitle}</span>}
          </div>
        </Element>

        {info && <div>{info}</div>}
        <div className={classes.actions}>
          {actions}
          {elementType === "a" && <Icon name="chevron-right" />}
          {isExpandable && (
            <Icon
              name="chevron-down"
              className={cn(
                classes.expandableIcon,
                isExpanded && classes.expanded
              )}
            />
          )}
        </div>
      </div>
      {children && isExpanded && (
        <div id={contentId} data-size={size} className={classes.children}>
          {children}
        </div>
      )}
    </li>
  );
};
