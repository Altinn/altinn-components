/**
 * This file defines a set of account objects that can be used  to build menus and lists.
 */

import type { AccountListItemProps, MenuGroupProps } from '../../lib';

export interface AccountDataGroup extends MenuGroupProps {
  title?: string;
}

export type AccountDataGroups = Record<string, AccountDataGroup>;

export interface AccountDataProps extends AccountListItemProps {
  groupId?: string;
  email?: string;
  phone?: string;
  address?: string;
  smsAlerts?: boolean;
  emailAlerts?: boolean;
}

export interface AccountSettings {
  email?: string;
  phone?: string;
  address?: string;
  smsAlerts?: boolean;
  emailAlerts?: boolean;
}

export type AccountSettingsById = Record<string, AccountSettings>;

export interface AccountDataListProps {
  items?: AccountDataProps[];
  groups?: AccountDataGroups;
  onToggle?: (id: string) => void;
  onChange?: (id: string, settings?: AccountSettings) => void;
}

export const accounts: AccountDataProps[] = [
  {
    id: 'user',
    type: 'person',
    name: 'Mathias Dyngeland',
    uniqueId: '071095XXXXX',
    isCurrentEndUser: true,
    email: 'mathias@hotmail.com',
    phone: '99007700',
    address: 'Inndalsveien 28, 5063 Bergen',
    emailAlerts: true,
    smsAlerts: true,
  },
  {
    id: 'brann',
    type: 'company',
    name: 'Sportsklubben Brann',
    uniqueId: '934908988',
    favourite: true,
    email: 'mathias@brann.no',
    emailAlerts: true,
    smsAlerts: true,
  },
  {
    id: 'brann-2',
    type: 'company',
    name: 'Sportsklubben Brann',
    uniqueId: '971877057',
    parentId: 'brann',
    phone: '99007700',
    email: 'mathias@brann.no',
  },
  {
    id: 'nff',
    type: 'company',
    name: 'Norges Fotballforbund',
    uniqueId: '963460449',
    favourite: true,
    smsAlerts: true,
  },
  {
    id: 'nff-2',
    type: 'company',
    name: 'Norges Fotballforbund',
    uniqueId: '974127245',
    parentId: 'nff',
  },
  {
    id: 'diaspora',
    type: 'company',
    name: 'Diaspora Bergensis',
    email: 'mathias@hotmail.com',
    phone: '99007700',
    uniqueId: '428743989',
    emailAlerts: true,
    smsAlerts: true,
  },
  {
    id: 'diaspora-2',
    type: 'company',
    name: 'Diaspora Bergensis',
    uniqueId: '498665381',
    parentId: 'diaspora',
  },
  {
    id: 'bbb',
    type: 'company',
    name: 'Brann Bataljonen Bergen',
    uniqueId: '985813841',
  },
  {
    id: 'bbb-2',
    type: 'company',
    name: 'Brann Bataljonen Bergen',
    uniqueId: '994485199',
    parentId: 'bbb',
  },

  {
    id: 'vif',
    type: 'company',
    name: 'Vålerengens idrettsforening',
    uniqueId: '983906729',
    isDeleted: true,
  },
  {
    id: 'sogndal',
    type: 'company',
    name: 'Sogndal idrettslag',
    uniqueId: '983981178',
    isDeleted: true,
  },

  {
    id: 'group:1',
    type: 'group',
    name: 'Mine lag',
    accountIds: ['nff', 'brann'],
  },
  {
    id: 'group:2',
    type: 'group',
    name: 'Supportergrupper',
    accountIds: ['bbb', 'diaspora'],
  },
];

export const accounts2 = [
  {
    id: 'user',
    type: 'person',
    name: 'Mathias Dyngeland',
    uniqueId: '071095XXXXX',
    isCurrentEndUser: true,
  },
  {
    id: 'diaspora',
    type: 'company',
    name: 'Diaspora Bergensis',
    uniqueId: '428 743 989',
  },
];

export const defaultAccounts = accounts;
