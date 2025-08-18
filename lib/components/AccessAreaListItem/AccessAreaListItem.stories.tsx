import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import areaGroups from "../../../test-data/accesspackages.json";
import type { Color } from "../../types";
import { AccessPackageListItem } from "../AccessPackageListItem";
import { List } from "../List";
import {
  AccessAreaListItem,
  type AccessAreaListItemProps,
} from "./AccessAreaListItem";
import { AvatarGroup, AvatarGroupProps } from "../Avatar";
import { BadgeProps } from "../..";

const testArea = areaGroups[1].areas[1];

const children = (colorTheme: Color | undefined, showBadge?: boolean) => (
  <>
    {testArea.description && <p>{testArea.description}</p>}
    <List spacing={2}>
      {testArea.packages.map((pkg, index) => (
        <AccessPackageListItem
          id={pkg.id}
          key={pkg.id}
          name={pkg.name}
          color={index < 2 ? colorTheme : "neutral"}
          badge={
            showBadge ? (
              <AvatarGroup items={avatarItems as AvatarGroupProps["items"]} />
            ) : undefined
          }
        />
      ))}
    </List>
  </>
);

const meta = {
  title: "Access/AccessAreaListItem",
  component: AccessAreaListItem,
  tags: ["autodocs", "beta"],
  args: {
    id: testArea.id,
    size: "md",
    name: testArea.name,
    titleAs: "h3",
    iconUrl: testArea.icon,
    badge: { label: "2 of 7" } as BadgeProps,
    colorTheme: "company",
    loading: false,
    shadow: "sm",
    border: "none",
  },
  argTypes: {
    expanded: {
      control: {
        type: "boolean",
      },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: {
        type: "inline-radio",
      },
    },
    colorTheme: {
      options: ["neutral", "company", "person"],
      control: {
        type: "select",
      },
    },
    shadow: {
      options: ["none", "xs", "sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    border: {
      options: ["none", "solid", "dotted"],
      control: {
        type: "select",
      },
    },
    titleAs: {
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "div", "span"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof AccessAreaListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AreaListItemStory: Story = {
  render: (args) => (
    <List>
      <AccessAreaListItem {...args}>
        {children(args.colorTheme)}
      </AccessAreaListItem>
    </List>
  ),
};

const avatarItems = [
  {
    name: "Linda Lavhøy",
    type: "person",
  },
  {
    name: "Digdir",
    type: "company",
  },
  {
    name: "Kari Nordmann",
    type: "person",
  },
  {
    name: "Test AS",
    type: "company",
  },
  {
    name: "Kjell Hansen",
    type: "person",
  },
];

export const AreaWithPackages = (args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return (
    <List spacing={2}>
      <AccessAreaListItem
        {...args}
        colorTheme="company"
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        badge={{ label: `2 of ${testArea.packages.length}` }}
      >
        {children(args.colorTheme)}
      </AccessAreaListItem>
    </List>
  );
};

export const AreaWithPermissions = (args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return (
    <List spacing={2}>
      <AccessAreaListItem
        {...args}
        colorTheme="company"
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        badge={
          <AvatarGroup
            maxItemsCount={4}
            items={avatarItems as AvatarGroupProps["items"]}
          />
        }
      >
        {children(args.colorTheme, true)}
      </AccessAreaListItem>
    </List>
  );
};

export const AllAreas = (args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<string | null>(null);
  return (
    <div>
      {areaGroups.map((group) => (
        <div
          key={group.id}
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <h2>{group.name}</h2>
          <p>{group.description}</p>
          <List spacing={2}>
            {group.areas.map((area) => (
              <AccessAreaListItem
                id={area.id}
                key={area.id}
                name={area.name}
                iconUrl={area.icon}
                colorTheme="neutral"
                size={args.size}
                expanded={expanded === area.id}
                onClick={() =>
                  setExpanded((prev) => (prev === area.id ? null : area.id))
                }
                badge={{ label: `0 of ${area.packages.length}` }}
                shadow="sm"
              >
                {area.description && <p>{area.description}</p>}
                <List spacing={2}>
                  {area.packages.map((pkg) => (
                    <AccessPackageListItem
                      id={pkg.id}
                      key={pkg.id}
                      name={pkg.name}
                    />
                  ))}
                </List>
              </AccessAreaListItem>
            ))}
          </List>
        </div>
      ))}
    </div>
  );
};
