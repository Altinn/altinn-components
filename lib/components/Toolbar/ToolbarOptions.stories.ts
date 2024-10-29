import type { Meta, StoryObj } from "@storybook/react";
import { ToolbarOptions } from "./ToolbarOptions";

const meta = {
  title: "Toolbar/ToolbarOptions",
  component: ToolbarOptions,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof ToolbarOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkboxes: Story = {
  args: {
    optionType: "checkbox",
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
};

export const Radio: Story = {
  args: {
    optionType: "radio",
    options: [
      {
        type: "radio",
        label: "Skatteetaten",
        value: "1",
      },
      {
        type: "radio",
        label: "Digdir",
        value: "2",
      },
      {
        type: "radio",
        checked: true,
        label: "Helstilsynet",
        value: "3",
      },
    ],
  },
};

export const RadioCheckbox: Story = {
  args: {
    optionGroups: {
      a: {
        title: "Velg skadedyr",
        optionType: "radio",
      },
      b: {
        title: "Velg straff",
        optionType: "checkbox",
      },
    },
    options: [
      {
        group: "a",
        name: "animal",
        label: "Katt",
        value: "cat",
        checked: true,
      },
      {
        group: "a",
        name: "animal",
        label: "Mus",
        value: "mouse",
      },
      {
        group: "a",
        name: "animal",
        label: "Veggdyr",
        value: "spider",
      },
      {
        group: "b",
        label: "Husarrest",
        value: "digdir",
      },
      {
        group: "b",
        checked: true,
        label: "Piskeslag",
        value: "helse",
      },
    ],
  },
};
