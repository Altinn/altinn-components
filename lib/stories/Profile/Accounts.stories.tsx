import {
  HeartIcon,
  HeartFillIcon,
  InboxIcon,
  PencilIcon,
} from "@navikt/aksel-icons";
import { Fragment } from "react";
import type { Meta } from "@storybook/react";
import { accountListItems, useAccountList } from "../../../examples";
import * as SettingsStories from "./Settings.stories";
import {
  List,
  Section,
  Flex,
  Button,
  AccountListItem,
  type AccountListItemProps,
  Heading,
  Toolbar,
  Divider,
  SettingsItem,
} from "../../components";

const meta = {
  title: "Demo/Profile/Accounts",
  tags: ["autodocs"],
  parameters: {},
  args: {
    items: accountListItems,
  },
} satisfies Meta;

export default meta;

interface AccountListProps {
  items: AccountListItemProps[];
}

export const Accounts = () => {
  const { toolbar, favourites, otherItems, results } = useAccountList();

  const AccountList = ({ items }: AccountListProps) => {
    return (
      <List size="md">
        {items.map((item) => {
          return (
            <AccountListItem {...item} key={item.id}>
              <AccountDetails {...item} />
            </AccountListItem>
          );
        })}
      </List>
    );
  };

  return (
    <Section spacing={6}>
      <Toolbar {...toolbar} />
      {results ? (
        <>
          <Heading size="lg">{results.title}</Heading>
          <AccountList items={results.items} />
        </>
      ) : (
        <>
          <Heading size="lg">Favoritter og grupper</Heading>
          <AccountList items={favourites} />

          <Heading size="lg">Andre aktører</Heading>
          <AccountList items={otherItems} />
        </>
      )}
    </Section>
  );
};

interface AccountDetailsProps {
  type?: AccountListItemProps["type"];
  favourite?: AccountListItemProps["favourite"];
}

export const AccountDetails = ({ type, favourite }: AccountDetailsProps) => {
  if (type === "group") {
    const groupItems = accountListItems.filter(
      (item) => item.type === "company"
    );

    return (
      <Section color="company" padding={6} spacing={2}>
        <Flex spacing={2}>
          <Button size="sm" icon={InboxIcon} variant="outline">
            Innboks
          </Button>
          <Button size="sm" icon={PencilIcon} variant="outline">
            Rediger gruppe
          </Button>
        </Flex>
        <Divider />
        <Section spacing={4}>
          <Heading size="sm">6 medlemmer</Heading>
          <List size="sm" spacing={0}>
            {groupItems?.map((item, index) => {
              return (
                <Fragment key={item.title}>
                  {index > 0 && <Divider />}
                  <SettingsItem {...item} description={undefined} linkIcon />
                </Fragment>
              );
            })}
          </List>
        </Section>
      </Section>
    );
  }

  return (
    <Section color="company" padding={6} spacing={2}>
      <Flex spacing={2}>
        <Button
          size="sm"
          icon={favourite ? HeartFillIcon : HeartIcon}
          variant="outline"
        >
          Favoritt
        </Button>
        <Button size="sm" icon={InboxIcon} variant="outline">
          Innboks
        </Button>
        <Button size="sm" icon={PencilIcon} variant="outline">
          Grupper
        </Button>
      </Flex>
      <Divider />
      {type === "company" ? (
        <SettingsStories.CompanySettings />
      ) : (
        <SettingsStories.PersonSettings />
      )}
    </Section>
  );
};

export const CompanyDetails = () => {
  return <AccountDetails type="company" />;
};

export const PersonDetails = () => {
  return <AccountDetails type="person" />;
};

export const GroupDetails = () => {
  return <AccountDetails type="group" />;
};
