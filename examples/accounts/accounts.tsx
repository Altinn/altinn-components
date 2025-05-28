/**
 * This file defines a set of account objects that can be used  to build menus and lists.
 */

import type { AccountListItemProps } from "../../lib";

export const accounts: AccountListItemProps[] = [
  {
    id: "user",
    type: "person",
    name: "Mathias Dyngeland",
    uniqueId: "071095XXXXX",
    isCurrentEndUser: true,
  },
  {
    id: "brann",
    type: "company",
    name: "Sportsklubben Brann",
    uniqueId: "934908988",
    favourite: true,
  },
  {
    id: "brann-2",
    type: "company",
    name: "Sportsklubben Brann",
    uniqueId: "971877057",
    parentId: "brann",
  },
  {
    id: "nff",
    type: "company",
    name: "Norges Fotballforbund",
    uniqueId: "963460449",
    favourite: true,
  },
  {
    id: "nff-2",
    type: "company",
    name: "Norges Fotballforbund",
    uniqueId: "974127245",
    parentId: "nff",
  },
  {
    id: "diaspora",
    type: "company",
    name: "Diaspora Bergensis",
    uniqueId: "428 743 989",
  },
  {
    id: "diaspora-2",
    type: "company",
    name: "Diaspora Bergensis",
    uniqueId: "498 665 381",
    parentId: "diaspora",
  },
  {
    id: "bbb",
    type: "company",
    name: "Brann Bataljonen Bergen",
    uniqueId: "985813841",
  },
  {
    id: "bbb-2",
    type: "company",
    name: "Brann Bataljonen Bergen",
    uniqueId: "994485199",
    parentId: "bbb",
  },

  {
    id: "vif",
    type: "company",
    name: "Vålerengens idrettsforening",
    uniqueId: "983906729",
    isDeleted: true,
  },
  {
    id: "sogndal",
    type: "company",
    name: "Sogndal idrettslag",
    uniqueId: "983981178",
    isDeleted: true,
  },

  {
    id: "group:1",
    type: "group",
    name: "Mine lag",
    accountIds: ["nff", "brann"],
  },
  {
    id: "group:2",
    type: "group",
    name: "Supportergrupper",
    accountIds: ["bbb", "diaspora"],
  },
];

export const accounts2 = [
  {
    id: "user",
    type: "person",
    name: "Mathias Dyngeland",
    uniqueId: "071095XXXXX",
    isCurrentEndUser: true,
  },
  {
    id: "diaspora",
    type: "company",
    name: "Diaspora Bergensis",
    uniqueId: "428 743 989",
  },
];

export const defaultAccounts = accounts;
