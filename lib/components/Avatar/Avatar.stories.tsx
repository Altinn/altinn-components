import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, type AvatarProps, type AvatarSize, type AvatarType, Flex, SizeEnum } from '..';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['stable'],
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'Jane Doe',
    type: 'person',
    style: {
      fontSize: '2.25rem',
      width: '2.25rem',
      height: '2.25rem',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Person: Story = {
  args: {
    type: 'person',
    name: 'Jane Doe',
  },
};

export const Company: Story = {
  args: {
    type: 'company',
    name: 'Boligeksperten',
  },
};

export const CompanyOutline: Story = {
  args: {
    type: 'company',
    name: 'Juletreeksperten',
    variant: 'outline',
  },
};

export const DeletedCompany: Story = {
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isDeleted: true,
  },
};

export const Subunit: Story = {
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isParent: false,
  },
};

export const DeletedSubunit: Story = {
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isParent: false,
    isDeleted: true,
  },
};

export const Logo: Story = {
  args: {
    type: 'company',
    imageUrl: 'https://avatars.githubusercontent.com/u/1536293?s=200&v=4',
    size: 'xl',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Sizes = ({ type = 'person', name = 'Alfa', imageUrl }: AvatarProps) => {
  return (
    <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map((size) => {
        return (
          <Avatar type={type as AvatarType} name={name} size={size as AvatarSize} imageUrl={imageUrl} key={size} />
        );
      })}
    </Flex>
  );
};

export const People = () => {
  return <Sizes name="Person" type="person" />;
};

export const Companies = () => {
  return <Sizes name="Company" type="company" />;
};

export const Logos = () => {
  return (
    <Sizes type="company" name="Skatteetaten" imageUrl="https://avatars.githubusercontent.com/u/1536293?s=200&v=4" />
  );
};
