import type { Meta, StoryObj } from "@storybook/react";
import {
  Timeline,
  TimelineBase,
  TimelineItem,
  Byline,
  Transmission,
  ListBase,
  Typography,
  AvatarGroup,
} from "..";
import {
  CircleFillIcon,
  EyeIcon,
  DiamondFillIcon,
  SquareFillIcon,
} from "@navikt/aksel-icons";

const meta = {
  title: "Timeline/Timeline",
  component: Timeline,
  tags: ["autodocs", "beta"],
  parameters: {},
  args: {},
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Composition = () => {
  return (
    <Timeline>
      <TimelineItem
        avatar={{ name: "Kari Nordmann" }}
        byline={
          <>
            <strong>Kari Nordmann, </strong> mandag kl 7
          </>
        }
      >
        <p>En samtale med Skatteetaten.</p>
      </TimelineItem>
      <TimelineItem
        icon={CircleFillIcon}
        byline={
          <>
            <strong>Skattetaten, </strong> mandag kl 7
          </>
        }
      >
        <ListBase style={{ marginTop: ".5rem" }}>
          <Transmission
            title="Tilbakemelding 2"
            sender={{ type: "company", name: "Skatteetaten" }}
          />
          <Transmission
            title="Tilbakemelding 1"
            sender={{ type: "company", name: "Skatteetaten" }}
          />
          <Transmission
            title="Leveranse levert"
            sender={{ name: "Klara Klok" }}
          />
        </ListBase>
      </TimelineItem>
      <TimelineItem
        border="dashed"
        size="sm"
        icon={DiamondFillIcon}
        byline="14.–18. august"
      >
        <p>
          <a href="#">Sett av 5 personer</a>
        </p>
      </TimelineItem>
      <TimelineBase borderHidden icon={CircleFillIcon}>
        <Byline>
          <strong>Dialogen ble opprettet, </strong> i går kl 14.00
        </Byline>
      </TimelineBase>
    </Timeline>
  );
};
