import { AvatarGroup, type AvatarSize } from '../Avatar';

export interface DialogTouchedByActor {
  name: string;
}

export interface DialogTouchedByProps {
  loading?: boolean;
  size?: AvatarSize;
  touchedBy?: DialogTouchedByActor[];
  className?: string;
}

export const DialogTouchedBy = ({ loading, size = 'sm', touchedBy = [], className }: DialogTouchedByProps) => {
  if (!touchedBy?.length || loading) {
    return null;
  }

  return <AvatarGroup defaultType="person" items={touchedBy} size={size} className={className} />;
};
