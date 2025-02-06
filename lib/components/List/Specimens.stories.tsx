import { ChevronRightIcon, TeddyBearIcon } from '@navikt/aksel-icons';
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
  return (
    <ListBase>
      {themes?.map((theme) => {
        return (
          <Fragment key={theme}>
            {sizes.map((size) => {
              return (
                <Fragment key={theme}>
                  <ListItem
                    {...args}
                    icon={TeddyBearIcon}
                    theme={theme}
                    description={theme + '/' + size}
                    size={size}
                    linkIcon={ChevronRightIcon}
                  />
                </Fragment>
              );
            })}
            <MetaItem>{theme}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Size = (args: ListItemProps) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <Fragment key={size}>
            <ListItem {...args} description={undefined} size={size} linkIcon={ChevronRightIcon} />
            <ListItem {...args} size={size} linkIcon={ChevronRightIcon} />
            <ListItem {...args} select={{ checked: true }} size={size} linkIcon={ChevronRightIcon} />
            <ListItem {...args} icon={TeddyBearIcon} size={size} linkIcon={ChevronRightIcon} />
            <ListItem
              {...args}
              icon={{ svgElement: TeddyBearIcon, theme: 'surface' }}
              size={size}
              linkIcon={ChevronRightIcon}
            />
            <ListItem {...args} avatar={{ name: 'Avatar' }} size={size} linkIcon={ChevronRightIcon} />
            <ListItem
              {...args}
              avatarGroup={{
                items: [{ name: 'Alfa' }, { name: 'Beta' }, { name: 'Charlie' }],
              }}
              size={size}
              linkIcon={ChevronRightIcon}
            />
            <MetaItem>{size}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};
