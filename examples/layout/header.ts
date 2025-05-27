import type { HeaderProps } from "../../lib";
import { globalMenu, localeSwitcher } from "../";

export const header: HeaderProps = {
  menu: globalMenu,
  locale: localeSwitcher,
  search: {
    name: "global-search",
    placeholder: "Søk i Altinn",
  },
};
