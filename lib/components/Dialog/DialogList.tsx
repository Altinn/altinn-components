import { Section } from '..';
import { DialogListGroup, type DialogListGroupProps, DialogListItem, type DialogListItemProps } from '..';
import { useMenu } from '../../hooks';

export interface DialogListProps {
  items: DialogListItemProps[];
  groups?: Record<string, DialogListGroupProps>;
  sortGroupBy?: (a: [string, DialogListItemProps[]], b: [string, DialogListItemProps[]]) => number;
  highlightWords?: string[];
  isLoading?: boolean;
}

export const DialogList = ({ items, groups = {}, sortGroupBy, highlightWords, isLoading }: DialogListProps) => {
  const { menu } = useMenu<DialogListItemProps, DialogListGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
    sortGroupBy,
  });

  return (
    <Section spacing={6} aria-busy={isLoading}>
      {menu?.map((group, groupIndex) => {
        return (
          <DialogListGroup {...(group.props || {})} key={'dialog-list-group-' + groupIndex}>
            {group?.items.map((item) => {
              const itemProps = item.props || {};
              return (
                <DialogListItem {...itemProps} highlightWords={highlightWords} key={itemProps.id ?? item.menuIndex} />
              );
            })}
          </DialogListGroup>
        );
      })}
    </Section>
  );
};
