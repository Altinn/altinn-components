import { AvatarGroup, type AvatarSize } from '../Avatar';

export interface DialogTouchedByActor {
  name: string;
}

export interface DialogTouchedByProps {
  size?: AvatarSize;
  touchedBy?: DialogTouchedByActor[];
  className?: string;
}

export const DialogTouchedBy = ({ size = 'sm', touchedBy = [], className }: DialogTouchedByProps) => {
  if (!touchedBy?.length) {
    return null;
  }

  return <AvatarGroup defaultType="person" items={touchedBy} size={size} className={className} />;
};
