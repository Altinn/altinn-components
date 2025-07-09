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

const testArea = areaGroups[1].areas[1];

/* eslint-disable react/no-danger */
const svgStringToComponent = (
  dataString: string,
  altText: string
): React.FC<React.SVGProps<SVGSVGElement>> => {
  // @ts-ignore
  // biome-ignore lint/security/noDangerouslySetInnerHtml: Let's trust the test
  return (props) => (
    <svg
      aria-label={altText}
      dangerouslySetInnerHTML={{ __html: dataString }}
      {...props}
    />
  );
};

const children = (colorTheme: Color | undefined) => (
  <>
    {testArea.description && <p>{testArea.description}</p>}
    <List spacing={2}>
      {testArea.packages.map((pkg, index) => (
        <AccessPackageListItem
          id={pkg.id}
          key={pkg.id}
          title={pkg.name}
          color={index < 2 ? colorTheme : "neutral"}
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
    iconUrl: "https://www.svgrepo.com/show/457192/home.svg",
    badgeText: "2 of 7",
    colorTheme: "company",
    loading: false,
    shadow: "xs",
  },
  argTypes: {
    expanded: {
      control: {
        type: "boolean",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
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

export const AreaWithPackages = (args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return (
    <List spacing={2}>
      <AccessAreaListItem
        {...args}
        colorTheme="company"
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        badgeText={`2 of ${testArea.packages.length}`}
      >
        {children(args.colorTheme)}
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
                icon={svgStringToComponent(area.icon, area.name)}
                colorTheme="neutral"
                size={args.size}
                expanded={expanded === area.id}
                onClick={() =>
                  setExpanded((prev) => (prev === area.id ? null : area.id))
                }
                badgeText={`0 of ${area.packages.length}`}
              >
                {area.description && <p>{area.description}</p>}
                <List spacing={2}>
                  {area.packages.map((pkg) => (
                    <AccessPackageListItem
                      id={pkg.id}
                      key={pkg.id}
                      title={pkg.name}
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
