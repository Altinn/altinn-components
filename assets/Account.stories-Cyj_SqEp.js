import{j as t}from"./iframe-DolAyTrH.js";import{G as p}from"./GlobalAccountButton-XGIWnErk.js";import{u as s}from"./useAccountMenu-CEqvZMOt.js";import{G as m}from"./GlobalMenuButton-fDfC7Urt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGgdxP5s.js";import"./XMark-DTdVjjyM.js";import"./useId-CHjpN4lF.js";import"./ChevronDown-BVkX7yzQ.js";import"./Enter-D2mFNsxJ.js";import"./Button-BnKV4VN-.js";import"./button-DvTcN5eG.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./Avatar-koXMFN1u.js";import"./Skeleton-CgJZAB6S.js";import"./useAccountsToolbar-CLVUcwRy.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-CbEiIFG7.js";import"./PadlockLocked-BB5yMzM8.js";import"./ButtonLabel-DHuLovfa.js";import"./ButtonIcon-BQckLi1i.js";import"./AvatarGroup-B7A0z_e3.js";import"./Icon-DyTdluPS.js";import"./Badge-XZ4zcUXX.js";const v={title:"Account",parameters:{layout:"centered"}},n=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(p,{currentAccount:{...r,type:"person"}})},c=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(p,{currentAccount:{...r,type:"company"}})},o=()=>t.jsx(p,{}),e=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(m,{currentAccount:{...r,type:"person"}})},u=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(m,{currentAccount:{...r,type:"company"}})},a=()=>t.jsx(m,{});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const w=["CurrentAccount","CompanyAccount","Login","DeprecatedCurrentAccount","DeprecatedCompanyAccount","DeprecatedLogin"];export{c as CompanyAccount,n as CurrentAccount,u as DeprecatedCompanyAccount,e as DeprecatedCurrentAccount,a as DeprecatedLogin,o as Login,w as __namedExportsOrder,v as default};
