import {
  Buildings2Icon,
  ChatExclamationmarkIcon,
  PadlockLockedFillIcon,
} from "@navikt/aksel-icons";
import type { MenuProps } from "../../lib";

export const loginMenu: MenuProps = {
  items: [
    {
      id: "login",
      groupId: "login",
      size: "lg",
      icon: { svgElement: PadlockLockedFillIcon, theme: "base" },
      title: "Logg inn",
    },
    {
      id: "startup",
      groupId: "help",
      size: "sm",
      icon: Buildings2Icon,
      title: "Starte og drive bedrift",
    },
    {
      id: "help",
      groupId: "help",
      size: "sm",
      icon: ChatExclamationmarkIcon,
      title: "Trenger du hjelp?",
    },
  ],
};
