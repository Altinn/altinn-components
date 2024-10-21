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
        title: "Gruppens tittel A",
      },
      b: {
        title: "Gruppens tittel B",
      },
    },
    options: [
      {
        group: "a",
        name: "animal",
        type: "radio",
        label: "Katt",
        value: "cat",
        checked: true,
      },
      {
        group: "a",
        name: "animal",
        type: "radio",
        label: "Mus",
        value: "mouse",
      },
      {
        group: "b",
        type: "checkbox",
        label: "Digdir",
        value: "digdir",
      },
      {
        group: "b",
        type: "checkbox",
        checked: true,
        label: "Helstilsynet",
        value: "helse",
      },
    ],
  },
};
