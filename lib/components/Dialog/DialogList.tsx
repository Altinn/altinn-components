import { Section } from '../';
import { DialogListGroup, type DialogListGroupProps, DialogListItem, type DialogListItemProps } from '../';
import { useMenu } from '../../hooks';

export interface DialogListProps {
  items: DialogListItemProps[];
  groups?: Record<string, DialogListGroupProps>;
}

export const DialogList = ({ items, groups = {} }: DialogListProps) => {
  const { menu } = useMenu<DialogListItemProps, DialogListGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
  });

  return (
    <Section spacing="md" margin="md">
      {menu?.map((group, groupIndex) => {
        const groupProps = group.props || {};

        return (
          <DialogListGroup {...groupProps} key={groupIndex}>
            {group?.items.map((item, index) => {
              const itemProps = item.props || {};
              return <DialogListItem {...itemProps} key={index} />;
            })}
          </DialogListGroup>
        );
      })}
    </Section>
  );
};
