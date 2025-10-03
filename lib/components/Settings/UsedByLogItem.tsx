import { type AvatarProps, Badge, type BadgeProps, Byline, Flex } from '..';

export interface UsedByLogItemProps extends AvatarProps {
  id: string;
  description?: string;
  isEndUser?: boolean;
  endUserLabel?: string;
  badge?: BadgeProps;
  size?: 'sm' | 'md';
}

/**
 * SeenByLog item
 */

export const UsedByLogItem = ({
  type,
  name,
  description,
  isEndUser,
  endUserLabel,
  size = 'sm',
}: UsedByLogItemProps) => {
  const badge = isEndUser && { label: endUserLabel };

  return (
    <Flex align="center" spacing={2} as={'li'}>
      <Byline size={size} avatar={{ name, type }}>
        <strong>
          {name}
          {description && +','}
        </strong>{' '}
        {description}
      </Byline>
      {badge && <Badge variant="subtle" {...badge} />}
    </Flex>
  );
};
