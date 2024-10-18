import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ToolbarOptions } from "./ToolbarOptions";
import { MenuOptionType } from "../Menu";

const meta = {
  title: "Toolbar/ToolbarOptions",
  component: ToolbarOptions,
  tags: ["autodocs"],
  parameters: {},
  args: {
    options: [
      {
        type: "checkbox",
        label: "Skatteetaten",
        value: "1",
      },
      {
        type: "checkbox",
        label: "Digdir",
        value: "2",
      },
      {
        type: "checkbox",
        checked: true,
        label: "Helstilsynet",
        value: "3",
      },
    ],
  },
} satisfies Meta<typeof ToolbarOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {},
};

export const RadioCheckbox: Story = {
  args: {
    options: [
      {
        group: "a",
        name: "animal",
        type: "radio",
        label: "Katt",
        value: "1",
        checked: true,
      },
      {
        group: "a",
        name: "animal",
        type: "radio",
        label: "Mus",
        value: "1",
      },
      {
        group: "b",
        type: "checkbox",
        label: "Digdir",
        value: "2",
      },
      {
        group: "b",
        type: "checkbox",
        checked: true,
        label: "Helstilsynet",
        value: "3",
      },
    ],
  },
};
