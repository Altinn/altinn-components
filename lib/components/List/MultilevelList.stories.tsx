import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { ContextMenu, type IconName, List, ListBase, ListItem, type ListItemColor, Section } from '../';
import { categoryItems } from '../../../examples';

const meta: Meta<typeof List> = {
  title: 'List/Examples/MultilevelList',
  component: List,
  parameters: {
    items: categoryItems,
  },
  args: {},
};

export default meta;

export const Default = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const onToggle = (id: string) => {
    setExpandedId((prevState) => (prevState === id ? null : id));
  };

  const access: Record<string, boolean> = {
    a1b1: true,
    a1b2: true,
    a2b1: true,
  };

  const items = categoryItems
    .map((item, aIndex) => {
      const aId = 'a' + (aIndex + 1);

      const bItems = item.items?.map((subItem, bIndex) => {
        const bId = aId + 'b' + (bIndex + 1);

        return {
          ...subItem,
          id: bId,
          color: access[bId] ? 'company' : 'neutral',
        };
      });

      const total = bItems?.length || 0;
      const count = bItems?.filter((subItem) => subItem.color === 'company').length || 0;

      const label = count ? `${count} av ${total}` : 'Gi tilgang';

      return {
        ...item,
        id: aId,
        color: count ? 'company' : 'neutral',
        badge: { theme: 'surface', label },
        items: bItems,
      };
    })
    .slice(0, 3);

  return (
    <ListBase>
      {items.map((item) => {
        const expanded = item.id === expandedId;
        return (
          <ListItem
            color={item.color as ListItemColor}
            size="md"
            icon={{
              theme: 'surface',
              name: item.icon as IconName,
            }}
            title={item.title}
            badge={{
              theme: 'surface',
              label: item.badge.label,
            }}
            description={expanded ? '' : 'Click to expand'}
            collapsible={true}
            expanded={expanded}
            onClick={() => onToggle(item.id)}
            as="button"
            key={item.id}
          >
            {expanded && (
              <Section padding={4}>
                <ListBase>
                  {item?.items?.map((child, index) => (
                    <ListItem
                      key={'c' + index}
                      icon="package"
                      size="sm"
                      color={child.color as ListItemColor}
                      theme="subtle"
                      title={child.title}
                      controls={
                        <ContextMenu
                          id={'menu' + index}
                          items={[
                            { id: '1', title: 'Option 1' },
                            { id: '2', title: 'Option 2' },
                            { id: '3', title: 'Option 3' },
                          ]}
                        />
                      }
                    />
                  ))}
                </ListBase>
              </Section>
            )}
          </ListItem>
        );
      })}
    </ListBase>
  );
};
