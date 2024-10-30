import type { ReactNode } from "react";

import {
  MetaItemBase,
  type MetaItemSize,
  type MetaItemVariant,
} from "./MetaItemBase";
import { MetaItemLabel } from "./MetaItemLabel";
import { MetaItemMedia } from "./MetaItemMedia";
import type { IconName } from "../Icon";

export interface MetaItemProps {
  /** Meta size */
  size?: MetaItemSize;
  /** Variant */
  variant?: MetaItemVariant;
  /** Icon name */
  icon?: IconName;
  /** Label */
  children?: ReactNode;
}

export const MetaItem = ({
  size = "xs",
  variant = "text",
  icon,
  children,
}: MetaItemProps) => {
  return (
    <MetaItemBase variant={variant} size={size}>
      {icon ? <MetaItemMedia icon={icon} size={size} /> : ""}
      <MetaItemLabel variant={variant} size={size}>
        {children}
      </MetaItemLabel>
    </MetaItemBase>
  );
};
