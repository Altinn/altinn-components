import{j as t}from"./iframe-BmFIVBn_.js";import{G as p}from"./GlobalAccountButton-Bf0ijC4c.js";import{u as s}from"./useAccountMenu-BonKHbVL.js";import{G as m}from"./GlobalMenuButton-CpiwPikz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3BUTcXKg.js";import"./XMark-DPeWQ31a.js";import"./useId-ClegSKnE.js";import"./ChevronDown-B_BWwBHT.js";import"./Enter-CrFD7q1W.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./Avatar-Zvdkk7EN.js";import"./Skeleton-DRn19mA6.js";import"./useAccountsToolbar-BQCyNlKc.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-DTduOV9l.js";import"./PadlockLocked-C26Pv4Gt.js";import"./ButtonLabel-JoMzXma_.js";import"./ButtonIcon-BhDAFAtm.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Icon-zZDqlwOf.js";import"./Badge-DoiHwmxA.js";const v={title:"Account",parameters:{layout:"centered"}},n=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(p,{currentAccount:{...r,type:"person"}})},c=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(p,{currentAccount:{...r,type:"company"}})},o=()=>t.jsx(p,{}),e=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(m,{currentAccount:{...r,type:"person"}})},u=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(m,{currentAccount:{...r,type:"company"}})},a=()=>t.jsx(m,{});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
