import{j as t}from"./iframe-CULgtZWU.js";import{G as p}from"./GlobalAccountButton-CEvViDAG.js";import{u as s}from"./useAccountMenu-Ch9XZgGH.js";import{G as m}from"./GlobalMenuButton-CVLMagrS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvBdYXxj.js";import"./XMark-BCb0_aBA.js";import"./useId-COk2q28h.js";import"./ChevronDown-BFG40PP5.js";import"./Enter-BQaYlrrr.js";import"./Button-EDUaKVqz.js";import"./button-DZmMky1p.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";import"./Avatar-DIXtsktU.js";import"./Skeleton-B_F13Udl.js";import"./useAccountsToolbar-CRMrejUj.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-8__0yAQ7.js";import"./PadlockLocked-D7rnItsj.js";import"./ButtonLabel-CGNJgIpu.js";import"./ButtonIcon-B5uSU7rb.js";import"./AvatarGroup-C5aSOTjU.js";import"./Icon-G4wS9E1h.js";import"./Badge-CMQ7i3tF.js";const v={title:"Account",parameters:{layout:"centered"}},n=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(p,{currentAccount:{...r,type:"person"}})},c=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(p,{currentAccount:{...r,type:"company"}})},o=()=>t.jsx(p,{}),e=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(m,{currentAccount:{...r,type:"person"}})},u=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(m,{currentAccount:{...r,type:"company"}})},a=()=>t.jsx(m,{});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
