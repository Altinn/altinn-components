import { SectionBase } from '../';
import { useMenu } from '../../hooks';
import { DialogGroup, type DialogGroupProps } from './DialogGroup';
import { DialogListItem, type DialogListItemProps } from './DialogListItem';

export interface DialogListProps {
  items: DialogListItemProps[];
  groups?: Record<string, DialogGroupProps>;
}

export const DialogList = ({ items, groups = {} }: DialogListProps) => {
  const { menu } = useMenu<DialogListItemProps, DialogGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
  });

  return (
    <SectionBase spacing="none" margin="md">
      {menu?.map((group, groupIndex) => {
        const groupProps = group.props || {};

        return (
          <DialogGroup {...groupProps} key={groupIndex}>
            {group?.items.map((item, index) => {
              const itemProps = item.props || {};
              return <DialogListItem {...itemProps} key={index} />;
            })}
          </DialogGroup>
        );
      })}
    </SectionBase>
  );
};
