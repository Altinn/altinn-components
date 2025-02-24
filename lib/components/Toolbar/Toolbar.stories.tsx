import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  accountMenu,
  inboxFilters,
  inboxStatusFilter,
} from "../../../examples";
import { type FilterState, Toolbar } from "./Toolbar";

const meta = {
  title: "Toolbar/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
  parameters: {},
  args: {
    showResultsLabel: `Vis alle treff`,
  },
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accountMenu: {
      ...accountMenu,
      currentAccount: accountMenu.accounts?.[0],
    },
    filters: inboxFilters,
  },
};

export const CustomFilterLabel: Story = {
  args: {
    ...Default.args,
    getFilterLabel: (_, value) => {
      return (
        Array.isArray(value) && value.length > 1
          ? `${value.length} selected`
          : value
      ) as string;
    },
  },
};

export const AccountSearchFilters: Story = {
  args: {
    ...Default.args,
    search: {
      name: "search",
      placeholder: "Søk i listen",
    },
  },
};

export const NoFilters: Story = {
  args: {
    ...Default.args,
    filters: [],
  },
};

export const StaticFilters: Story = {
  args: {
    filters: Default?.args?.filters?.map((item) => {
      return {
        ...item,
        removable: false,
      };
    }),
  },
};

export const HiddenFilters: Story = {
  args: {
    filters: inboxFilters,
  },
};

export const WithAccountMenu: Story = {
  args: {
    accountMenu: {
      ...accountMenu,
      currentAccount: accountMenu.accounts?.[0],
    },
    filters: inboxFilters,
  },
};

export const WithSearch: Story = {
  args: {
    search: {
      name: "search",
      placeholder: "Søk i listen",
    },
    filters: [inboxStatusFilter],
  },
};

export const ControlledStateFilters = (args: typeof Toolbar) => {
  const [filterState, setFilterState] = React.useState<FilterState>({
    from: ["skatt", "brreg"],
  });
  return (
    <Toolbar
      {...args}
      filters={Default.args!.filters}
      filterState={filterState}
      onFilterStateChange={setFilterState}
      removeButtonAltText="remove"
    />
  );
};

export const ControlledStateAccount = () => {
  const [currentAccountId, setCurrentAccountId] =
    React.useState<string>("party:mathias");
  const [filterState, setFilterState] = React.useState<FilterState>({
    from: ["skatt", "brreg"],
  });

  return (
    <Toolbar
      accountMenu={{
        ...accountMenu,
        onSelectAccount: (id) => setCurrentAccountId(id),
        currentAccount: accountMenu.accounts?.find(
          (account) => account.id === currentAccountId
        ),
      }}
      filters={Default.args!.filters}
      filterState={filterState}
      onFilterStateChange={setFilterState}
      removeButtonAltText="remove"
    />
  );
};
