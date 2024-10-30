import { MetaItem, type MetaItemSize } from "../Meta";

export interface DialogSeenByProps {
  size?: MetaItemSize;
  seenByUser?: boolean;
  seenByOthersCount?: number;
  seenLabel?: string;
  userLabel?: string;
}

export const DialogSeenBy = ({
  size = "xs",
  seenLabel = "Sett av",
  userLabel = "deg",
  seenByUser = false,
  seenByOthersCount = 0,
}: DialogSeenByProps) => {
  let seen = false;
  let seenByLabel = [];

  if (seenByUser) {
    seen = true;
    seenByLabel.push(userLabel);
  }

  if (seenByOthersCount) {
    seen = true;
    seenByLabel.push(seenByOthersCount);
  }

  if (!seen) {
    return false;
  }

  const label = [seenLabel, seenByLabel.join("+")].join(" ");

  return (
    <MetaItem size={size} icon={seen ? "eye" : "eye-closed"}>
      {label}
    </MetaItem>
  );
};
