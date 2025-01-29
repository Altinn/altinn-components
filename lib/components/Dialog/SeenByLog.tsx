import { type AvatarProps, ListBase, ListItem, MetaTimestamp } from '..';

export interface SeenByActor extends AvatarProps {
  isEndUser?: boolean;
}

export interface SeenByLogItem {
  id: string;
  seenAt: string;
  seenAtLabel: string;
  seenBy: SeenByActor;
}

export interface SeenByLogProps {
  items: SeenByLogItem[];
  endUserLabel: string;
}

/**
 * SeenByLog
 */

export const SeenByLog = ({ items, endUserLabel = 'you' }: SeenByLogProps) => {
  return (
    <ListBase spacing="xs">
      {items?.map((item) => {
        const { id, seenAt, seenAtLabel, seenBy } = item;
        return (
          <ListItem
            interactive={false}
            size="xs"
            avatar={{ type: 'person', name: seenBy?.name }}
            title={seenBy?.name}
            description={seenBy?.isEndUser ? endUserLabel : ''}
            linkIcon={null}
            badge={<MetaTimestamp datetime={seenAt}>{seenAtLabel}</MetaTimestamp>}
            key={id}
          />
        );
      })}
    </ListBase>
  );
};
