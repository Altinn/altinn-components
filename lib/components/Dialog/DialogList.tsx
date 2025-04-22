import { Section } from '../';
import { DialogListGroup, type DialogListGroupProps, DialogListItem, type DialogListItemProps } from '../';
import { useMenu } from '../../hooks';

export interface DialogListProps {
  items: DialogListItemProps[];
  groups?: Record<string, DialogListGroupProps>;
  sortGroupBy?: (a: [string, DialogListItemProps[]], b: [string, DialogListItemProps[]]) => number;
  isLoading?: boolean;
}

export const DialogList = ({ items, groups = {}, sortGroupBy, isLoading }: DialogListProps) => {
  const { menu } = useMenu<DialogListItemProps, DialogListGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
    sortGroupBy,
  });

  return (
    <Section spacing={3} margin="section" aria-busy={isLoading}>
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
