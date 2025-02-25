import type { Meta, StoryObj } from "@storybook/react";
import {
  Timeline,
  TimelineBase,
  TimelineItem,
  Byline,
  Transmission,
  ListBase,
} from "..";
import {
  CircleFillIcon,
  DiamondFillIcon,
  SquareFillIcon,
} from "@navikt/aksel-icons";

const meta = {
  title: "Timeline/Avatars",
  component: Timeline,
  tags: ["autodocs", "beta"],
  parameters: {},
  args: {
    items: [
      {
        id: "1",
        avatarGroup: {
          items: [
            {
              name: "A",
            },
            {
              name: "B",
            },
            {
              name: "C",
            },
          ],
        },
        children: "Content only",
      },
      {
        id: "2",
        datetime: "2024-12-12 11:15",
        byline: "12. desember 2024",
        children: "With byline",
      },
      {
        id: "3",
        avatar: {
          name: "Per Person",
        },
        datetime: "2024-12-12 11:15",
        byline: "12. desember 2024",
        children: "XS avatar and byline",
      },
      {
        id: "4",
        avatar: {
          name: "Per Person",
        },
        datetime: "2024-12-12 11:15",
        byline: "12. desember 2024",
        children: "Small avatar and byline",
      },
      {
        id: "5",
        avatar: {
          type: "company",
          name: "Bergen bar",
        },
        datetime: "2024-12-12 11:15",
        byline: (
          <>
            <strong>Bergen Bar, </strong> 12. desember 2024
          </>
        ),
        children: "Large avatar and byline",
      },
    ],
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Composition = () => {
  return (
    <Timeline>
      <TimelineBase icon={CircleFillIcon}>
        <Byline>
          <strong>Dialogen ble opprettet, </strong> i går kl 14.00
        </Byline>
      </TimelineBase>
      <TimelineBase>
        <p>Noe skjedde, men det har vi skjult.</p>
      </TimelineBase>
      <TimelineItem
        avatar={{ name: "Kari Nordmann" }}
        byline={
          <>
            <strong>Kari Nordmann, </strong> mandag kl 7
          </>
        }
      >
        <ListBase>
          <Transmission />
          <Transmission />
          <Transmission />
        </ListBase>
      </TimelineItem>
      <TimelineItem
        byline={
          <>
            <strong>Skattetaten, </strong> mandag kl 7
          </>
        }
      >
        <ListBase>
          <Transmission />
          <Transmission />
          <Transmission />
        </ListBase>
      </TimelineItem>
      <TimelineItem icon={CircleFillIcon}>asdasdsa</TimelineItem>
    </Timeline>
  );
};
