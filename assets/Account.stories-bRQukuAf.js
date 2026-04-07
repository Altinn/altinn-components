import{j as t}from"./iframe-D8UVhXtj.js";import{G as p}from"./GlobalAccountButton-C6YXzlSA.js";import{u as s}from"./useAccountMenu-C39NbMwX.js";import{G as m}from"./GlobalMenuButton-tij3rl8x.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZ6CWLt4.js";import"./XMark-RzwOtF1Q.js";import"./useId-B_5z_sER.js";import"./ChevronDown-B-wfcPIe.js";import"./Enter-mHn0qkqX.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./Avatar-DcRqiXhT.js";import"./Skeleton-DuOqXwDT.js";import"./useAccountsToolbar-MJd7b_--.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-B0BUtMFf.js";import"./PadlockLocked-B9n2XiiK.js";import"./ButtonLabel-DjMPs_6z.js";import"./ButtonIcon-Dy7UhGq8.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Icon-DPTwfvyC.js";import"./Badge-FbSzRhwU.js";const v={title:"Account",parameters:{layout:"centered"}},n=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(p,{currentAccount:{...r,type:"person"}})},c=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(p,{currentAccount:{...r,type:"company"}})},o=()=>t.jsx(p,{}),e=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(m,{currentAccount:{...r,type:"person"}})},u=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(m,{currentAccount:{...r,type:"company"}})},a=()=>t.jsx(m,{});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
