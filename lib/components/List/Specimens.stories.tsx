import { TeddyBearIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react';
import { Fragment } from 'react';
import { List, ListItem, type ListItemProps } from '../';

const variants = ['default', 'subtle', 'tinted'] as ListItemProps['variant'][];
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as ListItemProps['size'][];

const meta = {
  title: 'List/Specimens',
  component: ListItem,
  //  tags: ["autodocs"],
  parameters: {},
  args: {
    id: 'id',
    title: 'Title',
    description: 'Description',
  },
} satisfies Meta<typeof ListItem>;

export default meta;

export const Variant = (args: ListItemProps) => {
  return (
    <List>
      {variants.map((variant) => {
        return (
          <Fragment key={variant}>
            <ListItem {...args} icon={TeddyBearIcon} variant={variant} label={variant} linkIcon />
          </Fragment>
        );
      })}
    </List>
  );
};

export const Options = ({ variant = 'default', ...args }: ListItemProps) => {
  return (
    <List>
      <ListItem {...args} icon={TeddyBearIcon} variant={variant} label={variant} linkIcon />
      <ListItem
        {...args}
        icon={{ theme: 'tinted', svgElement: TeddyBearIcon }}
        variant={variant}
        title={variant}
        description="icon as iconProps"
        linkIcon
      />
      <ListItem
        {...args}
        icon={{ name: 'Alfa', type: 'company' }}
        variant={variant}
        title={variant}
        description="icon as avatarProps"
        linkIcon
      />
      <ListItem
        {...args}
        icon={{
          items: [{ name: 'Alfa' }, { name: 'Beta' }, { name: 'Charlie' }],
        }}
        variant={variant}
        title={variant}
        description="icon as avatarGroupProps"
        linkIcon
      />
      <ListItem
        {...args}
        icon={TeddyBearIcon}
        variant={variant}
        title={variant}
        description="shadow:none"
        shadow="none"
        linkIcon
      />
      <ListItem
        {...args}
        icon={TeddyBearIcon}
        variant={variant}
        title={variant}
        description="shadow:none, border:solid"
        shadow="none"
        border="solid"
        linkIcon
      />
      <ListItem
        {...args}
        icon={TeddyBearIcon}
        variant={variant}
        title={variant}
        description="shadow:none, border:dotted"
        shadow="none"
        border="dotted"
        linkIcon
      />
    </List>
  );
};

export const Size = (args: ListItemProps) => {
  return (
    <List>
      {sizes.map((size) => {
        return (
          <Fragment key={size}>
            <ListItem {...args} label={size} icon={TeddyBearIcon} size={size} linkIcon />
          </Fragment>
        );
      })}
    </List>
  );
};

export const VariantSize = (args: ListItemProps) => {
  return (
    <List>
      {sizes.map((size) => {
        return (
          <li key={size}>
            <Variant {...args} size={size} />
          </li>
        );
      })}
    </List>
  );
};
