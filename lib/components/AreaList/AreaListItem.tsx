import { ListItemBase, ListItemHeader } from "../List";
import type { ListItemProps } from "../List";
import styles from "./areaListItem.module.css";

export interface AreaListItemProps extends Pick<ListItemProps, "size" | "onClick" | "expanded"> {
  id: string;
  name: string;
  icon: string;
  children?: React.ReactNode;
}

export const AreaListItem = ({
  name,
  icon,
  size = "md",
  children,
  expanded = false,
  onClick,
  ...props
}: AreaListItemProps) => {
    return (
    <ListItemBase size={size} color="subtle" expanded={expanded}>
      <ListItemHeader
        as="button"
        avatar={{
          name,
          imageUrl: icon,
          type: "company",
        }}
        title={name}
        size={size}
        collapsible={true}
        expanded={expanded}
        onClick={onClick}
        {...props}
      />
      {expanded && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </ListItemBase>
  );
};
