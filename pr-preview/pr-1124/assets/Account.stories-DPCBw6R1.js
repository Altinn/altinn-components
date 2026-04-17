import{j as t}from"./iframe-C30XMp4u.js";import{G as p}from"./GlobalAccountButton-CQof3x8e.js";import{u as s}from"./useAccountMenu-DOKkCLzC.js";import{G as m}from"./GlobalMenuButton-_oCUabds.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dfjgmy9H.js";import"./XMark-ZCF0kQw6.js";import"./useId-k4Xjw1TB.js";import"./ChevronDown-BpTniz1S.js";import"./Enter-D_Sz2Y-Z.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./Avatar-md5Lcy6_.js";import"./Skeleton-DYu3bsVd.js";import"./useAccountsToolbar-C22P-BSb.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-n4y15MUI.js";import"./PadlockLocked-CvUaHTOs.js";import"./ButtonLabel-D_0Lmxqy.js";import"./ButtonIcon-DGwnrj7G.js";import"./AvatarGroup-BxUIiam6.js";import"./Icon-BW7eZq3t.js";import"./Badge-BL5WZhsc.js";const v={title:"Account",parameters:{layout:"centered"}},n=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(p,{currentAccount:{...r,type:"person"}})},c=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(p,{currentAccount:{...r,type:"company"}})},o=()=>t.jsx(p,{}),e=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(m,{currentAccount:{...r,type:"person"}})},u=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(m,{currentAccount:{...r,type:"company"}})},a=()=>t.jsx(m,{});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
