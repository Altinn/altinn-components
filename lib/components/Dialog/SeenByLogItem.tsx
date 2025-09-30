import { type AvatarProps, Badge, type BadgeProps, Byline, Flex } from '..';

export interface SeenByLogItemProps extends AvatarProps {
  id: string;
  seenAt: string;
  seenAtLabel: string;
  isEndUser?: boolean;
  endUserLabel?: string;
  badge?: BadgeProps;
  size?: 'sm' | 'md';
}

/**
 * SeenByLog item
 */

export const SeenByLogItem = ({
  name,
  seenAt,
  seenAtLabel,
  isEndUser,
  endUserLabel,
  size = 'sm',
}: SeenByLogItemProps) => {
  const badge = isEndUser && { label: endUserLabel };

  return (
    <Flex align="center" spacing={2} as={'li'}>
      <Byline size={size} datetime={seenAt} avatar={{ name, type: 'person' }}>
        <strong>{name + ','}</strong> {seenAtLabel}
      </Byline>
      {badge && <Badge variant="subtle" {...badge} />}
    </Flex>
  );
};
