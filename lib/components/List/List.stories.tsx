import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";
import { ListItem } from "./ListItem";
import React from "react";
import { AvatarType } from "../Avatar/Avatar";

const meta = {
  title: "List/List",
  component: List,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: [],
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const companyListItemsArgs = {
  title: "Doe INC.",
  subtitle: "Subtitle",
  media: {
    avatar: {
      type: "company" as AvatarType,
      name: "Doe INC.",
    },
  },
};

const groupListItemsArgs = {
  title: "Doe INC.",
  subtitle: "Subtitle",
  media: {
    avatarGroup: {
      items: [
        {
          type: "person" as AvatarType,
          name: "Initials Only",
        },
        {
          type: "person" as AvatarType,
          name: "Initials Only",
        },
        {
          type: "person" as AvatarType,
          name: "Name Surname",
        },
        {
          type: "person" as AvatarType,
          name: "Person 3",
        },
      ],
    },
  },
};

const personListItemsArgs = {
  title: "Jane Doe",
  subtitle: "Subtitle",
  media: {
    avatar: {
      type: "person" as AvatarType,
      name: "Jane Doe",
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <List {...args}>
        <ListItem {...companyListItemsArgs} size="lg" />
        <ListItem {...companyListItemsArgs} size="md" />
        <ListItem {...companyListItemsArgs} size="sm" />
      </List>

      <List {...args}>
        <ListItem {...groupListItemsArgs} size="lg" />
        <ListItem {...groupListItemsArgs} size="md" />
        <ListItem {...groupListItemsArgs} size="sm" />
      </List>

      <List {...args}>
        <ListItem {...personListItemsArgs} size="lg" />
        <ListItem {...personListItemsArgs} size="md" />
        <ListItem {...personListItemsArgs} size="sm" /> 
        </List>
    </div>
  ),
};

export const CollapsableList: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <List {...args}>
        <ListItem
          title="Skatt, avgift, regnskap og toll"
          size="lg"
          elementType="button"
          media={{
            icon: {
              name: "sack",
              backgroundColor: "company",
              variant: "outline",
            },
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            consectetur, nisl id ultrices vehicula, mi eros tincidunt orci, nec
            fermentum turpis turpis id nisi. Nulla facilisi.
          </p>
          <List spacing="none">
            <ListItem
              elementType="a"
              title="Foretaksskatt"
              subtitle={
                <span style={{ textDecoration: "underline" }}>1 tjeneste </span>
              }
              background="neutral"
            />
            <ListItem
              elementType="a"
              title="Merverdiavgift"
              subtitle={
                <span style={{ textDecoration: "underline" }}>
                  2 tjenester{" "}
                </span>
              }
              background="neutral"
            />
            <ListItem
              title="Skattegrunnlag"
              subtitle={
                <span style={{ textDecoration: "underline" }}>
                  3 tjenester{" "}
                </span>
              }
              background="neutral"
            />
            <ListItem
              title="Regnskap og økonomirapportering"
              subtitle={
                <span style={{ textDecoration: "underline" }}>
                  13 tjenester{" "}
                </span>
              }
              background="neutral"
            />
            <ListItem
              title="Revisorattesterer"
              subtitle={
                <span style={{ textDecoration: "underline" }}>
                  14 tjenester{" "}
                </span>
              }
              background="neutral"
            />
            <ListItem
              title="Toll"
              subtitle={
                <span style={{ textDecoration: "underline" }}>
                  15 tjenester{" "}
                </span>
              }
              background="neutral"
            />
          </List>
        </ListItem>
        <ListItem
          title="Transport og lagring"
          size="lg"
          media={{
            icon: {
              name: "truck",
              variant: "outline",
              backgroundColor: "company",
            },
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            consectetur, nisl id ultrices vehicula, mi eros tincidunt orci, nec
            fermentum turpis turpis id nisi. Nulla facilisi.
          </p>
        </ListItem>
        <ListItem
          title="Oppvekst og utdanning"
          size="lg"
          media={{
            icon: {
              name: "teddy-bear",
              variant: "outline",
              backgroundColor: "person",
            },
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            consectetur, nisl id ultrices vehicula, mi eros tincidunt orci, nec
            fermentum turpis turpis id nisi. Nulla facilisi.
          </p>
        </ListItem>
        <ListItem
          title="Energi, vann, avløp, avfall"
          size="lg"
          media={{
            icon: {
              name: "tap-water",
              backgroundColor: "company",
              variant: "outline",
            },
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            consectetur, nisl id ultrices vehicula, mi eros tincidunt orci, nec
            fermentum turpis turpis id nisi. Nulla facilisi.
          </p>
        </ListItem>
      </List>

      <List>
        <ListItem
          title="Anne Annesen"
          size="lg"
          elementType={"a"}
          media={{
            avatar: {
              name: "Anne Annesen",
              type: "person",
            },
          }}
        />
        <ListItem
          title="Talleksperten"
          size="lg"
          elementType="button"
          media={{
            avatar: {
              type: "company",
              name: "Talleksperten",
            },
          }}
        >
          <List spacing="none">
            <ListItem
              media={{
                avatar: {
                  type: "company",
                  name: "Talleksperten",
                },
              }}
              elementType="a"
              title="Talleksperten"
              background="neutral"
            />
            <ListItem
              media={{
                avatar: {
                  type: "person",
                  name: "Finn Feilbruk",
                },
              }}
              elementType="a"
              title="Finn Feilbruk"
              background="neutral"
            />
          </List>
        </ListItem>
        <ListItem
          title="Karlstad AS"
          size="lg"
          media={{
            avatar: {
              type: "company",
              name: "Karlstad AS",
            },
          }}
        >
          <List spacing="none">
            <ListItem
              media={{
                avatar: {
                  type: "company",
                  name: "Karlstad AS",
                },
              }}
              elementType="a"
              title="Karlstad AS"
              background="neutral"
            />
            <ListItem
              media={{
                avatar: {
                  type: "person",
                  name: "Karl Karlstad",
                },
              }}
              elementType="a"
              title="Karl Karlstad"
              background="neutral"
            />
          </List>
        </ListItem>
      </List>
    </div>
  ),
};
