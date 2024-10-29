import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ToolbarFilter } from "./ToolbarFilter";

const meta = {
  title: "Toolbar/ToolbarFilter",
  component: ToolbarFilter,
  tags: ["autodocs"],
  parameters: {},
  args: {
    label: "Velg avsender",
    options: [
      {
        label: "Skatteetaten",
        value: "skatt",
      },
      {
        label: "Digdir",
        value: "digdir",
      },
      {
        label: "Helstilsynet",
        value: "helse",
      },
    ],
  },
} satisfies Meta<typeof ToolbarFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    optionType: "radio",
  },
};

export const SingleExpanded: Story = {
  args: {
    ...Single.args,
    expanded: true,
  },
};

export const SingleValue: Story = {
  args: {
    optionType: "radio",
    value: "helse",
  },
};

export const Multiple: Story = {
  args: {
    optionType: "checkbox",
    value: ["skatt", "digdir"],
  },
};

export const MultipleExpanded: Story = {
  args: {
    optionType: "checkbox",
    value: ["skatt", "digdir"],
    expanded: true,
  },
};
