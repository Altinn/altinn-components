import type { Meta } from '@storybook/react-vite';
import type { MenuItemProps } from './MenuItem';
import { VirtualizedMenu } from './VirtualizedMenu';

export interface RawDataItem {
  id: string;
  groupId: string;
  name: string;
  orgNumber?: string;
  birthdate?: string;
  parentId?: string;
}

const adjectives = ['Nordic', 'Global', 'Norwegian', 'Alpha', 'Beta', 'Gamma', 'Rapid', 'Smart', 'Green', 'Future'];
const nouns = [
  'Solutions',
  'Logistics',
  'Systems',
  'Consulting',
  'Bakery',
  'Tech',
  'Holdings',
  'Ventures',
  'Media',
  'Group',
];
const suffixes = ['AS', 'ASA', 'AB', 'Inc', 'Ltd', 'Corp'];

const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const generateOrgNumber = () => Math.floor(100000000 + Math.random() * 900000000).toString();
const generateRandomCompanies = (count: number): RawDataItem[] => {
  const companies: RawDataItem[] = [];

  // Keep track of IDs to create valid parent-child relationships
  const createdIds: string[] = [];

  for (let i = 0; i < count; i++) {
    const id = `company-${i}`;
    const name = `${getRandomElement(adjectives)} ${getRandomElement(nouns)} ${getRandomElement(suffixes)}`;

    // Group by the first letter of the name (e.g., "N" for Nordic...)
    const groupId = name.charAt(0).toLowerCase();

    // 20% chance to be a child of a previous company (if any exist)
    // We only pick from createdIds to ensure the parent actually exists (no orphans)
    const isChild = i > 0 && Math.random() < 0.5;
    const parentId = isChild ? createdIds[Math.floor(Math.random() * createdIds.length)] : undefined;

    companies.push({
      id,
      groupId,
      name,
      orgNumber: generateOrgNumber(),
      parentId,
    });

    createdIds.push(id);
  }

  // Sort by name so they appear logically in the list (A-Z)
  return companies.sort((a, b) => a.name.localeCompare(b.name));
};

const meta = {
  title: 'MenuV2/VirtualizedMenu',
  component: VirtualizedMenu,
  parameters: {},
  args: {
    variant: 'default',
  },
} satisfies Meta<typeof VirtualizedMenu>;

export default meta;

const randomCompanies = generateRandomCompanies(10000);

export const AccountMenuWithSearch = () => {
  const items = [
    {
      id: 'user',
      groupId: 'favourites',
      name: 'Kari Nordmann',
      birthdate: '03037712345',
    },
    ...randomCompanies,
  ].map((item) => {
    const searchWords = [item.name, item.orgNumber, item.birthdate];

    if (item.birthdate) {
      return {
        ...item,
        searchWords,
        title: item.name,
        description: 'Født: ' + item.birthdate,
        icon: {
          type: 'person',
          name: item.name,
        },
      };
    }

    function splitOrgNumber(str?: string) {
      if (!str) {
        return '';
      }
      const length = str.length;
      const partLength = Math.ceil(length / 3);
      const part1 = str.slice(0, partLength);
      const part2 = str.slice(partLength, partLength * 2);
      const part3 = str.slice(partLength * 2);

      return [part1, part2, part3].join('\u00a0');
    }

    const description = 'Org. nr. ' + splitOrgNumber(item?.orgNumber);

    return {
      id: item.id,
      groupId: item?.parentId || item.id,
      title: item.name,
      description,
      searchWords,
      icon: {
        type: 'company',
        name: item.name,
        isParent: !!item.parentId,
      },
    };
  });

  const firstCompany = items.find((item) => item.icon.type === 'company');
  const firstCompanyGroupId = firstCompany?.groupId || 'aa';
  const groups = {
    favourites: { title: 'Favoritter' },
    [firstCompanyGroupId]: { title: 'Alle virksomheter' },
    search: { title: '{count} treff' },
  };

  return <VirtualizedMenu searchable items={items as MenuItemProps[]} groups={groups} size="md" />;
};
