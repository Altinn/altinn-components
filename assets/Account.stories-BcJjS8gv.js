import{j as t}from"./iframe-Dj7Cj6th.js";import{G as p}from"./GlobalAccountButton-0PyjBcdU.js";import{u as s}from"./useAccountMenu-Be5qqc25.js";import{G as m}from"./GlobalMenuButton-at_G1dDS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CddsnUaU.js";import"./XMark-CFOHUWx0.js";import"./useId-ByPI58ip.js";import"./ChevronDown-sTkixeUo.js";import"./Enter-sPrpAKYg.js";import"./Button-CSjIyK1w.js";import"./button-BKLxmUvr.js";import"./use-merge-refs-YImFlbky.js";import"./lite-DaUVFjkg.js";import"./Avatar-BthLZDba.js";import"./Skeleton-D2EJPpRT.js";import"./useAccountsToolbar-8HoKFADG.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-ByYTYDoa.js";import"./PadlockLocked-DMO0v4Jz.js";import"./ButtonLabel-DExUchGn.js";import"./ButtonIcon-B8pHyvH7.js";import"./AvatarGroup-CKpZaMLG.js";import"./Icon-ClXNgiA2.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";const z={title:"Account",parameters:{layout:"centered"}},n=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(p,{currentAccount:{...r,type:"person"}})},c=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(p,{currentAccount:{...r,type:"company"}})},o=()=>t.jsx(p,{}),e=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(m,{currentAccount:{...r,type:"person"}})},u=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(m,{currentAccount:{...r,type:"company"}})},a=()=>t.jsx(m,{});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
