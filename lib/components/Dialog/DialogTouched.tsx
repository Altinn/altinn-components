import { AvatarGroup, type AvatarSize } from "../Avatar";

export interface DialogTouchedByProps {
  name: string;
}

export interface DialogTouchedProps {
  size?: AvatarSize;
  touchedBy?: DialogTouchedByProps[];
  className?: string;
}

export const DialogTouched = ({
  size = "sm",
  touchedBy,
  className,
}: DialogTouchedProps) => {
  if (!touchedBy?.length) {
    return null;
  }

  return (
    <AvatarGroup
      type="person"
      items={touchedBy}
      size={size}
      className={className}
    />
  );
};
