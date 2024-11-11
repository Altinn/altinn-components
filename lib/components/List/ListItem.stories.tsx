import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";
import { ListItem } from "./ListItem";
import React from "react";
import { Button } from "../Button/Button";
import { ListItemMenu } from "./ListItemMenu";


const meta = {
  title: "List/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: {},
  args: {
    title: "Doe INC.",
    subtitle: "Subtitle",
    size: "lg",
    media: {
      avatar: {
        type: "company",
        name: "Doe INC.",
      },
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <List>
      <ListItem {...args} />
    </List>
  ),
};

export const CollapsableListItem: Story = {
  render: (args) => (
    <List>
      <ListItem
        {...args}
        title="Skatt, avgift, regnskap og toll"
        size="lg"
        elementType="button"
        expanded={true}
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
              <span style={{ textDecoration: "underline" }}>2 tjenester </span>
            }
            background="neutral"
          />
          <ListItem
            elementType="a"
            title="Skattegrunnlag"
            subtitle={
              <span style={{ textDecoration: "underline" }}>3 tjenester </span>
            }
            background="neutral"
          />
          <ListItem
            elementType="a"
            title="Regnskap og økonomirapportering"
            subtitle={
              <span style={{ textDecoration: "underline" }}>13 tjenester </span>
            }
            background="neutral"
          />
          <ListItem
            elementType="a"
            title="Revisorattesterer"
            subtitle={
              <span style={{ textDecoration: "underline" }}>14 tjenester </span>
            }
            background="neutral"
          />
          <ListItem
            elementType="a"
            title="Toll"
            subtitle={
              <span style={{ textDecoration: "underline" }}>15 tjenester </span>
            }
            background="neutral"
          />
        </List>
      </ListItem>
    </List>
  ),
};

export const ListItemWithActions: Story = {
  render: (args) => (
    <List>
      <ListItem
        {...args}
        title="Forhold ved virksomheten"
        subtitle="Tjenester som er relatert til å etablere og drive en virksomhet"
        size="lg"
        elementType="button"
        expanded={false}
        media={{
          icon: {
            name: "buildings3",
            backgroundColor: "company",
            variant: "outline",
          },
        }}
        actions={[
          <Button
            onClick={(e) => {
              e.stopPropagation();
              alert("Action clicked");
            }}
            size="sm"
            variant="text"
            color="primary"
            icon="trash"
          >
            Slett
          </Button>,
          <Button
            onClick={(e) => {
              e.stopPropagation();
              alert("Action clicked");
            }}
            size="sm"
            variant="text"
            color="primary"
            icon="pencil"
          >
            Rediger
          </Button>,
        ]}
      />
      <ListItem
        {...args}
        title="Personale"
        subtitle="Ansettelse, lønn, pensjon og sykefravær"
        size="lg"
        elementType="button"
        expanded={false}
        media={{
          icon: {
            name: "person-tall-short",
            backgroundColor: "company",
            variant: "outline",
          },
        }}
        actions={
          <ListItemMenu
            icon="menu-elipsis-vertical"
            items={[
              {
                onClick: () => alert("Action clicked"),
                icon: "trash",
                label: "Slett",
              },
              {
                onClick: () => alert("Action clicked"),
                icon: "pencil",
                label: "Rediger",
              },
            ]}
          />
        }
      />
    </List>
  ),
};
