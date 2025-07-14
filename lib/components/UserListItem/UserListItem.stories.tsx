import { EyeIcon, TrashIcon } from "@navikt/aksel-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { List } from "../List";
import { UserListItem, UserListItemProps } from "./UserListItem";
import { ContextMenu } from "../ContextMenu";
import { useState } from "react";

const meta = {
  title: "Access/UserListItem",
  component: UserListItem,
  tags: ["autodocs", "beta"],
  parameters: {},
  args: {
    size: "md",
    loading: false,
    name: "Julie Josefine Beritsen",
    description: "født 01.02.1993",
    type: "person",
    roleNames: ["Styrets leder"],
    shadow: "sm",
    linkIcon: false,
    collapsible: false,
    as: "div",
    interactive: true,
    subUnit: false,
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: {
        type: "inline-radio",
      },
    },
    shadow: {
      options: ["none", "xs", "sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    type: {
      options: ["person", "company", "system"],
      control: {
        type: "inline-radio",
      },
      as: {
        type: "select",
        options: ["div", "button", "a", "span"],
      },
      // Disable complex controls
      children: { control: false },
      onClick: { control: false },
    },
  },
} satisfies Meta<typeof UserListItem>;

export default meta;

export const Default = (args: UserListItemProps) => {
  return (
    <List>
      <UserListItem {...args} onClick={() => alert(`You clicked me - yay!`)} />
    </List>
  );
};

export const MultipleRoles = (args: UserListItemProps) => {
  return (
    <List>
      <UserListItem
        {...args}
        name="Narvesen AS"
        type="company"
        description="Organisasjonsnummer: 123456789"
        roleNames={["Regnskapsfører", "Styrets leder"]}
        interactive={false}
      />
    </List>
  );
};

export const WithSubUnits = (args: UserListItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <List>
      <UserListItem
        {...args}
        name="Narvesen AS"
        type="company"
        description={undefined}
        roleNames={["Regnskapsfører"]}
        expanded={isOpen}
        collapsible={true}
        onClick={() => setIsOpen(!isOpen)}
        as={"button"}
      >
        <div style={{ padding: "0.5rem 0 0.5rem 1rem" }}>
          <List spacing={"sm"}>
            <UserListItem
              id="subunit1"
              name="Narvesen AS"
              type="company"
              size="xs"
              description="Org.nr. 987654321"
              roleNames={["Regnskapsfører"]}
              interactive={false}
              shadow="none"
            />
            <UserListItem
              id="subunit2"
              name="Narvesen AS"
              type="company"
              size="xs"
              description="Org.nr. 987654322 (subunit)"
              shadow="none"
              interactive={false}
              subUnit={true}
            />
            <UserListItem
              id="subunit3"
              name="Dattersen AS"
              type="company"
              size="xs"
              description="Org.nr. 987654323 (subunit)"
              interactive={false}
              shadow="none"
              subUnit={true}
            />
          </List>
        </div>
      </UserListItem>
    </List>
  );
};

export const WithControls = (args: UserListItemProps) => {
  const menu = (menuId: string) => (
    <ContextMenu
      id={"menu" + menuId}
      items={[
        { id: "settings" + menuId, title: "See accesses", icon: EyeIcon },
        { id: "delete" + menuId, title: "Delete user", icon: TrashIcon },
      ]}
    />
  );
  return (
    <List>
      <UserListItem
        {...args}
        name="Ådne Makrussen"
        roleNames={["Styrets leder"]}
        controls={menu("1")}
        linkIcon={true}
        onClick={() => alert(`You clicked the link - yay!`)}
        as={"button"}
      />
      <UserListItem
        {...args}
        name="Jack Ripper"
        roleNames={undefined}
        controls={menu("2")}
        linkIcon={true}
        onClick={() => alert(`You clicked the link - yay!`)}
        as={"button"}
      />
      <UserListItem
        {...args}
        name="Bankmarked AS"
        type="company"
        description="Organisasjonsnummer: 987654321"
        roleNames={["Regnskapsfører"]}
        controls={menu("3")}
        linkIcon={true}
        onClick={() => alert(`You clicked the link - yay!`)}
        as={"button"}
      />
    </List>
  );
};
