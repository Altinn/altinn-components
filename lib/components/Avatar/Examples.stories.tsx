import { Avatar, AvatarGroup, type AvatarSize, type AvatarType, Flex, SizeEnum } from '..';

import type { Meta } from '@storybook/react';

const meta = {
  title: 'Avatar/Specimens',
  component: Avatar,
  parameters: {},
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;

export const AvatarSizes = ({ type = 'person', name = 'Alfa' }) => {
  return (
    <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map((size) => {
        return <Avatar type={type as AvatarType} name={name} size={size as AvatarSize} key={size} />;
      })}
    </Flex>
  );
};

export const PeopleAvatars = () => {
  return <AvatarSizes type="person" />;
};

export const CompanyAvatars = () => {
  return <AvatarSizes type="company" />;
};

export const AvatarGroups = ({ defaultType = 'person' }) => {
  const items = [{ name: 'Alfa' }, { name: 'Beta' }, { name: 'Charlie' }];

  return (
    <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map((size) => {
        return (
          <AvatarGroup defaultType={defaultType as AvatarType} items={items} size={size as AvatarSize} key={size} />
        );
      })}
    </Flex>
  );
};

export const PeopleAvatarGroups = () => {
  return <AvatarGroups defaultType="person" />;
};

export const CompanyAvatarGroups = () => {
  return <AvatarGroups defaultType="company" />;
};
