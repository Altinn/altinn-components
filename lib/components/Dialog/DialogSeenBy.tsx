import { ElementType, MouseEventHandler } from "react";
import { MetaItem, type MetaItemSize } from "../Meta";

export interface DialogSeenByProps {
  size?: MetaItemSize;
  seenByEndUser?: boolean;
  seenByOthersCount?: number;
  label: string;
  as?: ElementType;
  onClick?: MouseEventHandler;
  href?: string;
}

export const DialogSeenBy = ({
  size = "xs",
  label = "Seen by label",
  seenByEndUser = false,
  seenByOthersCount = 0,
  ...rest
}: DialogSeenByProps) => {
  const seen = seenByEndUser || seenByOthersCount > 0;

  return (
    <MetaItem size={size} icon={seen ? "eye" : "eye-closed"} {...rest}>
      {label}
    </MetaItem>
  );
};
