import{j as t}from"./iframe-BJEbXdzo.js";import{G as p}from"./GlobalAccountButton-DSH6mgXV.js";import{u as s}from"./useAccountMenu-D1Be11yk.js";import{G as m}from"./GlobalMenuButton-BHTFYuDH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChGHkNNv.js";import"./XMark-sTHnj54s.js";import"./useId-DgrNWXh_.js";import"./ChevronDown-BptX0rEl.js";import"./Enter-CVX0CGOP.js";import"./Button-DNsjk1zC.js";import"./button-3a31VMtF.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./Avatar-CcIuhVy2.js";import"./Skeleton-DWcIZ1wH.js";import"./useAccountsToolbar-enxMbprp.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-4EROIPSJ.js";import"./PadlockLocked-WeDnmgJF.js";import"./ButtonLabel-BDM26i0_.js";import"./ButtonIcon-HUw-G-oR.js";import"./AvatarGroup-Cpo75nCB.js";import"./Icon-msEkDcFf.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";const z={title:"Account",parameters:{layout:"centered"}},n=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(p,{currentAccount:{...r,type:"person"}})},c=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(p,{currentAccount:{...r,type:"company"}})},o=()=>t.jsx(p,{}),e=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(m,{currentAccount:{...r,type:"person"}})},u=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(m,{currentAccount:{...r,type:"company"}})},a=()=>t.jsx(m,{});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
