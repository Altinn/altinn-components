import { TeddyBearIcon } from "@navikt/aksel-icons";
import type { Meta } from "@storybook/react";
import { Fragment } from "react";
import { ListBase, ListItem, type ListItemProps, MetaItem } from "../";

const variants = [
  "default",
  "tinted",
  "border",
  "inline",
] as ListItemProps["variant"][];
const sizes = ["xs", "sm", "md", "lg", "xl"] as ListItemProps["size"][];

const meta = {
  title: "List/Specimens",
  component: ListItem,
  //  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "id",
    title: "Title",
  },
} satisfies Meta<typeof ListItem>;

export default meta;

export const Theme = (args: ListItemProps) => {
  return variants?.map((variant) => {
    return (
      <div key={variant}>
        <MetaItem>{variant}</MetaItem>
        <ListBase>
          {sizes.map((size) => {
            return (
              <Fragment key={variant}>
                <ListItem
                  {...args}
                  icon={TeddyBearIcon}
                  variant={variant}
                  description={variant + "/" + size}
                  size={size}
                  linkIcon
                />
              </Fragment>
            );
          })}
        </ListBase>
      </div>
    );
  });
};

export const Size = (args: ListItemProps) => {
  return sizes?.map((size) => {
    return (
      <div key={size}>
        <MetaItem>{size}</MetaItem>
        <ListBase>
          <ListItem {...args} description={undefined} size={size} linkIcon />
          <ListItem {...args} size={size} linkIcon />
          <ListItem {...args} select={{ checked: true }} size={size} linkIcon />
          <ListItem {...args} icon={TeddyBearIcon} size={size} linkIcon />
          <ListItem
            {...args}
            icon={{ svgElement: TeddyBearIcon, theme: "surface" }}
            size={size}
            linkIcon
          />
          <ListItem
            {...args}
            avatar={{ name: "Avatar" }}
            size={size}
            linkIcon
          />
          <ListItem
            {...args}
            avatarGroup={{
              items: [{ name: "Alfa" }, { name: "Beta" }, { name: "Charlie" }],
            }}
            size={size}
            linkIcon
          />
        </ListBase>
      </div>
    );
  });
};
