import type { Meta, StoryObj } from "@storybook/react";
import { ResourceListItem } from "./ResourceList";
import { Button } from "../Button";
import React from "react";

const meta = {
  title: "Resource/ListItem",
  component: ResourceListItem,
  tags: ["autodocs"],
  parameters: {},
  args: {
    title: "Title",
    description: "Description",
    size: "md",
    avatar: {
      name: "Fiskeridirektoratet",
      imageUrl: "https://altinncdn.no/orgs/fd/fiskeridirektoratet.png",
      imageUrlAlt: "fiskeridirektoratet logo",
    },
    controls: <Button icon="pencil" variant="text" size="sm">Endre</Button>,
  },
} satisfies Meta<typeof ResourceListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

