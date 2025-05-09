import { DatabaseIcon, DogHarnessIcon, PackageIcon, TeddyBearIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react';
import { useState } from 'react';
import {
  type AvatarProps,
  type BadgeProps,
  ContextMenu,
  type IconProps,
  List,
  ListItem,
  type ListItemColor,
  Section,
  Typography,
} from '../';
import { categoryItems } from '../../../examples';
import { brreg, nav, skatt } from '../../../examples/avatar';

const meta = {
  title: 'List/List',
  component: List,
  tags: ['autodocs'],
  parameters: {},
} satisfies Meta<typeof List>;

export default meta;

export const Default = () => {
  return (
    <List>
      <ListItem icon={DatabaseIcon} label="Item 1" linkIcon />
      <ListItem icon={DogHarnessIcon} label="Item 2" linkIcon />
      <ListItem icon={TeddyBearIcon} label="Item 3" linkIcon />
    </List>
  );
};

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
    <List color="neutral">
      {people.map((item, index) => (
        <ListItem
          size="md"
          key={index}
          icon={{
            name: item.name,
          }}
          badge={item?.badge}
          title={item.name}
          description={item.role}
          variant="default"
        />
      ))}
    </List>
  );
};

export const ListOfServices = () => {
  return (
    <List color="neutral">
      {services.map((item, index) => (
        <ListItem
          size="md"
          key={index}
          icon={item.owner}
          title={item.title}
          description={item.owner.name}
          variant="subtle"
        />
      ))}
    </List>
  );
};

export const ListOfCategories = () => {
  return (
    <List color="company">
      {categoryItems?.slice(0, 3).map((item, index) => (
        <ListItem
          size="md"
          key={index}
          icon={{ svgElement: item.icon, theme: 'tinted' } as IconProps}
          title={item.title}
          description={item?.items?.length + ' tjenester'}
        />
      ))}
    </List>
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
    <List>
      {items.map((item) => {
        const expanded = item.id === expandedId;
        return (
          <ListItem
            color={item.color as ListItemColor}
            icon={{ svgElement: item.icon, theme: 'tinted' } as IconProps}
            size="md"
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
            ariaLabel={item.title}
            key={item.id}
          >
            {expanded && (
              <Section padding={4} spacing={4}>
                <Typography>Beskrivelse av område. Lorem ipsum dolor.</Typography>
                <List>
                  {item?.items?.map((child, index) => (
                    <ListItem
                      key={'c' + index}
                      icon={PackageIcon}
                      size="xs"
                      color={child.color as ListItemColor}
                      variant="subtle"
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
                </List>
              </Section>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};
