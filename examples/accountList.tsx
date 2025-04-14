import type { AccountListItemProps } from "../lib";
import { accountMenu } from "./accountMenu";

export const accountListItems: AccountListItemProps[] =
  accountMenu?.accounts?.map((item, index) => {
    const { id, type, name, items } = item;

    if (items) {
      return {
        id,
        type: "group",
        title: name,
        description: "Gruppe",
        label: items.length + " aktører",
        avatarGroup: {
          items,
        },
      };
    }

    return {
      id,
      type,
      title: name,
      label: !index && "Deg",
      favourite: !index,
      description:
        type === "person"
          ? "Fødselsnr: XX.XX.XXXX XXXXXX"
          : "Org nr. XXXXXXXXXXX",
      avatar: {
        type,
        name,
      },
    };
  });
