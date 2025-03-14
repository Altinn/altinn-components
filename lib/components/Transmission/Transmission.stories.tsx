import type { Meta, StoryObj } from "@storybook/react";
import { ListBase, Byline, Transmission } from "..";
import { transmissions } from "../../../examples";

const meta = {
  title: "Transmission/Transmission",
  component: Transmission,
  tags: ["beta"],
  parameters: {},
  args: {
    ...transmissions[0],
  },
} satisfies Meta<typeof Transmission>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const UsingBadges = () => {
  return (
    <ListBase spacing={2}>
      <ListBase spacing={2}>
        <Byline>
          <strong>Bedriftsdata er godkjent, </strong> {transmissions[1].byline}
        </Byline>
        <ListBase>
          <Transmission {...transmissions[1]} />
          <Transmission {...transmissions[0]} />
        </ListBase>
      </ListBase>
      <ListBase spacing={2}>
        <Byline>
          <strong>Bedriftsdata er avvist, </strong> {transmissions[3].byline}
        </Byline>
        <ListBase>
          <Transmission {...transmissions[3]} />
          <Transmission {...transmissions[2]} />
        </ListBase>
      </ListBase>
    </ListBase>
  );
};
