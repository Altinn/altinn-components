import type { Meta } from '@storybook/react';
import { Fragment } from 'react';

import { ListBase, ListItem, type ListItemProps, MetaItem } from '../';

const themes = ['default', 'subtle', 'surface', 'base', 'transparent'] as ListItemProps['theme'][];
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as ListItemProps['size'][];

const meta = {
  title: 'List/Specimens',
  component: ListItem,
  //  tags: ["autodocs"],
  parameters: {},
  args: {
    id: 'id',
    title: 'Title',
  },
} satisfies Meta<typeof ListItem>;

export default meta;

export const Theme = (args: ListItemProps) => {
  return themes?.map((theme) => {
    return (
      <>
        <MetaItem>{theme}</MetaItem>
        <ListBase key={theme}>
          {sizes.map((size) => {
            return (
              <Fragment key={theme}>
                <ListItem
                  {...args}
                  icon="teddy-bear"
                  theme={theme}
                  description={theme + '/' + size}
                  size={size}
                  linkIcon
                />
              </Fragment>
            );
          })}
        </ListBase>
      </>
    );
  });
};

export const Size = (args: ListItemProps) => {
  return sizes?.map((size) => {
    return (
      <>
        <MetaItem>{size}</MetaItem>
        <ListBase key={size}>
          <ListItem {...args} description={undefined} size={size} linkIcon />
          <ListItem {...args} size={size} linkIcon />
          <ListItem {...args} select={{ checked: true }} size={size} linkIcon />
          <ListItem {...args} icon="teddy-bear" size={size} linkIcon />
          <ListItem {...args} icon={{ name: 'teddy-bear', theme: 'surface' }} size={size} linkIcon />
          <ListItem {...args} avatar={{ name: 'Avatar' }} size={size} linkIcon />
          <ListItem
            {...args}
            avatarGroup={{
              items: [{ name: 'Alfa' }, { name: 'Beta' }, { name: 'Charlie' }],
            }}
            size={size}
            linkIcon
          />
        </ListBase>
      </>
    );
  });
};
