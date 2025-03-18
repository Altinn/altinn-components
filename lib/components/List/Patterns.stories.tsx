import { PackageIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react';
import { useState } from 'react';
import {
  type AvatarProps,
  type BadgeProps,
  ContextMenu,
  List,
  ListBase,
  ListItem,
  type ListItemColor,
  Section,
  Typography,
} from '../';
import { categoryItems } from '../../../examples';
import { brreg, nav, skatt } from '../../../examples/avatar';

const meta: Meta<typeof List> = {
  title: 'List/Patterns',
  component: List,
  parameters: {},
  args: {},
};

export default meta;

interface DemoService {
  title: string;
  owner: AvatarProps;
}

const services: DemoService[] = [
  {
    title: 'Klage på myndighetenes fastsetting av formues- og inntektsskatt',
    owner: skatt,
  },
  {
    title: 'Bekreftelse fra konkursregisteret',
    owner: brreg,
  },
  {
    title: 'Inntektsmelding',
    owner: nav,
  },
];

interface DemoPerson {
  name: string;
  role?: string;
  badge?: BadgeProps;
}

const people: DemoPerson[] = [
  {
    name: 'Per Egil Ahlsen',
    role: 'Daglig leder',
  },
  {
    name: 'Vidar Bahus',
    role: 'Styremedlem',
    badge: {
      color: 'accent',
      theme: 'base',
      label: 'Deg selv',
    },
  },
  {
    name: 'Niklas Castro',
    role: 'Regnskap',
  },
];

export const ListOfPeople = () => {
  return (
    <ListBase color="neutral">
      {people.map((item, index) => (
        <ListItem
          size="md"
          key={index}
          avatar={{
            name: item.name,
          }}
          badge={item?.badge}
          title={item.name}
          description={item.role}
          theme="default"
        />
      ))}
    </ListBase>
  );
};

export const ListOfServices = () => {
  return (
    <ListBase color="neutral">
      {services.map((item, index) => (
        <ListItem
          size="md"
          key={index}
          avatar={item.owner}
          title={item.title}
          description={item.owner.name}
          theme="subtle"
        />
      ))}
    </ListBase>
  );
};

export const ListOfCategories = () => {
  return (
    <ListBase color="company">
      {categoryItems?.slice(0, 3).map((item, index) => (
        <ListItem
          size="md"
          key={index}
          icon={item.icon}
          title={item.title}
          description={item?.items?.length + ' tjenester'}
          theme="default"
        />
      ))}
    </ListBase>
  );
};

export const MultilevelList = () => {
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
            theme="default"
            size="md"
            icon={item.icon}
            title={item.title}
            badge={{
              theme: 'surface',
              label: item.badge.label,
            }}
            description={expanded ? '' : item?.items?.length + ' tjenester'}
            collapsible
            expanded={expanded}
            onClick={() => onToggle(item.id)}
            as="button"
            key={item.id}
          >
            {expanded && (
              <Section padding={4} spacing={4}>
                <Typography>Beskrivelse av område. Lorem ipsum dolor.</Typography>
                <ListBase>
                  {item?.items?.map((child, index) => (
                    <ListItem
                      key={'c' + index}
                      icon={PackageIcon}
                      size="sm"
                      color={child.color as ListItemColor}
                      theme="subtle"
                      title={child.title}
                      controls={
                        <ContextMenu
                          size="sm"
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
