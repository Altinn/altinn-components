import{j as t}from"./iframe-DUgQHy5z.js";import{G as p}from"./GlobalAccountButton-CFVCgB7k.js";import{u as s}from"./useAccountMenu-BzhCGaz3.js";import{G as m}from"./GlobalMenuButton-DpenfYJr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHKdKrFD.js";import"./XMark-CIC6hSAY.js";import"./useId-BEmmm-9F.js";import"./ChevronDown-BTaF_AA-.js";import"./Enter-B9HoLh_R.js";import"./Button-DAj4Vb1f.js";import"./button-D0axoqj3.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./Avatar-CQy8D3NB.js";import"./Skeleton-BWHbMU5J.js";import"./useAccountsToolbar-Bfww5QV_.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-BuCGHZZm.js";import"./PadlockLocked-OauvSILz.js";import"./ButtonLabel-3HSCNrVA.js";import"./ButtonIcon-CVfXAbGb.js";import"./AvatarGroup-DAp73R1d.js";import"./Icon-D31Usj2D.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";const z={title:"Account",parameters:{layout:"centered"}},n=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(p,{currentAccount:{...r,type:"person"}})},c=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(p,{currentAccount:{...r,type:"company"}})},o=()=>t.jsx(p,{}),e=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(m,{currentAccount:{...r,type:"person"}})},u=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(m,{currentAccount:{...r,type:"company"}})},a=()=>t.jsx(m,{});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'user'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'person'
  } as Account} />;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'diaspora'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'company'
  } as Account} />;
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <GlobalAccountButton />;
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'user'
  });
  return <GlobalMenuButton_old currentAccount={{
    ...currentAccount,
    type: 'person'
  } as Account} />;
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'diaspora'
  });
  return <GlobalMenuButton_old currentAccount={{
    ...currentAccount,
    type: 'company'
  } as Account} />;
}`,...u.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <GlobalMenuButton_old />;
}`,...a.parameters?.docs?.source}}};const F=["CurrentAccount","CompanyAccount","Login","DeprecatedCurrentAccount","DeprecatedCompanyAccount","DeprecatedLogin"];export{c as CompanyAccount,n as CurrentAccount,u as DeprecatedCompanyAccount,e as DeprecatedCurrentAccount,a as DeprecatedLogin,o as Login,F as __namedExportsOrder,z as default};
