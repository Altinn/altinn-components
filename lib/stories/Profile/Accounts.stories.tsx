import {
  HeartIcon,
  HeartFillIcon,
  InboxIcon,
  PencilIcon,
  Buildings2Icon,
  HandshakeIcon,
  BellIcon,
} from "@navikt/aksel-icons";
import { Fragment } from "react";
import type { Meta } from "@storybook/react";
import { defaultAccounts, useAccountList } from "../../../examples";
import * as SettingsStories from "./Settings.stories";
import {
  List,
  Section,
  Flex,
  Button,
  AccountList,
  type AccountListItemProps,
  Heading,
  Toolbar,
  Divider,
  SettingsItem,
  Typography,
} from "../../components";

const meta = {
  title: "Demo/Profile/Accounts",
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta;

export default meta;

export const Accounts = () => {
  const { toolbar, items, groups, onToggleFavourite } = useAccountList({
    accounts: defaultAccounts,
  });

  const collapsibleItems = items?.map((item) => {
    if (item.expanded) {
      return {
        ...item,
        children: (
          <AccountDetails
            {...(item as AccountListItemProps)}
            onToggleFavourite={onToggleFavourite}
          />
        ),
      };
    }
    return item;
  });

  return (
    <Section spacing={6}>
      <Toolbar {...toolbar} />
      {items && (
        <AccountList
          groups={groups}
          items={collapsibleItems as AccountListItemProps[]}
        />
      )}
    </Section>
  );
};

export const AccountDetails = ({ type, ...props }: AccountListItemProps) => {
  switch (type) {
    case "company":
      return <CompanyDetails {...(props as AccountListItemProps)} />;
    case "person":
      return <PersonDetails {...(props as AccountListItemProps)} />;
    case "group":
      return <GroupDetails {...(props as AccountListItemProps)} />;
    default:
      return <PersonDetails {...(props as AccountListItemProps)} />;
  }
};

export const AccountToolbar = ({
  id,
  isCurrentEndUser,
  favourite,
  onToggleFavourite,
}: AccountListItemProps) => {
  return (
    <Flex spacing={2} size="xs">
      {!isCurrentEndUser && (
        <Button
          icon={favourite ? HeartFillIcon : HeartIcon}
          onClick={() => onToggleFavourite?.(id)}
          variant="outline"
        >
          {favourite ? "Fjern favoritt" : "Legg til favoritt"}
        </Button>
      )}
      <Button icon={InboxIcon} variant="outline">
        Gå til Innboks
      </Button>
      <Button icon={HandshakeIcon} variant="outline">
        Tilgangsstyring
      </Button>
    </Flex>
  );
};

export const CompanyDetails = ({
  id,
  parentId,
  uniqueId,
  ...props
}: AccountListItemProps) => {
  const { items } = useAccountList({
    accounts: defaultAccounts as AccountListItemProps[],
  });

  const parentAccount = items?.find((item) => item.id === parentId);

  return (
    <Section color="company" padding={6} spacing={2}>
      <AccountToolbar {...props} id={id} />
      <Divider />
      <List spacing={0} size="sm">
        <SettingsItem
          icon={{ svgElement: Buildings2Icon, theme: "default" }}
          title="Organisasjonsnummer"
          value={uniqueId}
          linkIcon
        />
        {parentAccount && (
          <>
            <Divider as="li" />
            <SettingsItem
              icon={{ svgElement: Buildings2Icon, theme: "default" }}
              title="Overordnet organisasjon"
              value={parentAccount.name}
              linkIcon
            />
          </>
        )}
        <Divider as="li" />
        <SettingsItem
          icon={{ svgElement: HandshakeIcon, theme: "default" }}
          title="Rolle og rettigheter"
          value="Daglig leder"
          linkIcon
        />
        <Divider as="li" />
        <SettingsItem
          color="neutral"
          icon={{ svgElement: BellIcon, theme: "default" }}
          title="Ingen varslinger"
          badge={<Typography size="xs">Sett opp varsling</Typography>}
          linkIcon
        />
      </List>
    </Section>
  );
};

export const PersonDetails = ({ id, ...props }: AccountListItemProps) => {
  return (
    <Section color="company" padding={6} spacing={2}>
      <AccountToolbar {...props} id={id} />

      <Divider />
      <SettingsStories.PersonSettings />
    </Section>
  );
};

export const GroupDetails = ({ accountIds }: AccountListItemProps) => {
  const { items } = useAccountList({
    accounts: defaultAccounts as AccountListItemProps[],
  });

  const groupItems = accountIds
    ? items?.filter((item) => accountIds.includes(item.id))
    : items?.filter((item) => item.type === "company");

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
                <SettingsItem
                  icon={item.icon}
                  title={item.name}
                  description={undefined}
                  linkIcon
                />
              </Fragment>
            );
          })}
        </List>
      </Section>
    </Section>
  );
};
