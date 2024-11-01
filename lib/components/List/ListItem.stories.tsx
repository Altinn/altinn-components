import { Fragment, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { MetaItem } from "../Meta";
import { ListBase, ListItem, List } from "./";

const sizes = ["lg", "md", "sm", "xs"];

const meta = {
  title: "List/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: {},
  args: {
    title: "Title",
    description: "Description",
    size: "md",
    href: "#",
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Icon: Story = {
  args: {
    icon: "teddy-bear",
  },
};

export const IconAccent: Story = {
  args: {
    color: "accent",
    icon: "teddy-bear",
  },
};

export const Person: Story = {
  args: {
    avatar: {
      type: "person",
      name: "Erik Huseklepp",
    },
  },
};

export const Company: Story = {
  args: {
    avatar: {
      type: "company",
      name: "Sportsklubben Brann",
    },
  },
};

export const Logo: Story = {
  args: {
    avatar: {
      type: "company",
      name: "Politiets sikkerhetstjeneste",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQH7Yv86kmHN5g/company-logo_200_200/company-logo_200_200/0/1688735908848?e=1738195200&v=beta&t=f-Mkzd03bqzdQN4IT0h89VQ9_Jri1iJ6XphYYnjsgEo",
    },
  },
};

export const PeopleGroup: Story = {
  args: {
    avatarGroup: {
      items: [
        {
          type: "person",
          name: "Albert Åberg",
        },
        {
          type: "person",
          name: "Birger Meling",
        },
        {
          type: "person",
          name: "Celine Dion",
        },
      ],
    },
  },
};

export const CompanyGroup: Story = {
  args: {
    avatarGroup: {
      items: [
        {
          type: "company",
          name: "Albert Åberg",
        },
        {
          type: "company",
          name: "Birger Meling",
        },
        {
          type: "company",
          name: "Celine Dion",
        },
      ],
    },
  },
};

export const LongTitle: Story = {
  args: {
    avatar: {
      type: "company",
      name: "Direktoratet for samfunnssikkerhet og beredskap",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/C510BAQHlQiOWI4f45w/company-logo_200_200/company-logo_200_200/0/1631389121726?e=1738195200&v=beta&t=Q1P8kOwpgLvoqHBxyrHCaYd2upNkPQVi2zSSxJzbdCA",
    },
    title:
      "Samtykke for å reparere elektrisk utstyr hvis bruk er forbundet med særlig risiko, herunder elektromedisinsk utstyr",
    description: "Direktoratet for samfunnssikkerhet og beredskap",
  },
};

export const Sizes = (args) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <Fragment key={size}>
            <ListItem {...args} size={size} selected={size === args?.size} />
            <MetaItem>{size}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};

export const Collapsible = (args) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  const people = [
    {
      name: "Per Ove Ludvigsen",
      role: "Sportlig leder",
      rights: "Admin",
    },
    {
      name: "Eirik Horneland",
      role: "Trener",
      rights: "Admin",
    },
    {
      name: "Erik Huseklepp",
      role: "Assistenttrener",
      rights: "Lese og skrive",
    },
    {
      name: "Hassan El Fakiri",
      role: "Toppspillerutvikler",
      rights: "Ingen rettigheter",
    },
  ];

  const items = people?.map((item) => {
    return {
      avatar: {
        ...item,
        type: "person",
      },
      title: item?.name,
      description: item?.role,
      badge: { label: item?.rights },
      linkIcon: "menu-elipsis-horizontal",
    };
  });

  const avatarGroup = {
    items: people?.map((item) => {
      return {
        name: item?.name,
        type: "person",
      };
    }),
  };

  return (
    <Fragment>
      <ListItem
        {...args}
        avatarGroup={avatarGroup}
        collapsible={true}
        expanded={expanded}
        onClick={onToggle}
        as="button"
      ></ListItem>
      {expanded && <List size="xs" items={items} />}
    </Fragment>
  );
};
