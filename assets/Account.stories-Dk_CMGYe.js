import{j as t}from"./iframe-yBEatwQ0.js";import{G as p}from"./GlobalAccountButton-CmvgP5cm.js";import{u as s}from"./useAccountMenu-8QZdwbVN.js";import{G as m}from"./GlobalMenuButton-zUenl8-k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7J_eA84.js";import"./XMark-DRdfunCf.js";import"./useId-DyCIbqyR.js";import"./ChevronDown-BJoDwoph.js";import"./Enter-B7qZag5n.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./Avatar-BHAY-jNJ.js";import"./Skeleton-D2AOT5bt.js";import"./useAccountsToolbar-BHTWjE-3.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-DJA7wNNg.js";import"./PadlockLocked-Dj7qNhL4.js";import"./ButtonLabel-DWbU693S.js";import"./ButtonIcon-kXMu6eE8.js";import"./AvatarGroup-Em3MhneF.js";import"./Icon-m6GSRHhZ.js";import"./Badge-Bt5kdhhY.js";const v={title:"Account",parameters:{layout:"centered"}},n=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(p,{currentAccount:{...r,type:"person"}})},c=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(p,{currentAccount:{...r,type:"company"}})},o=()=>t.jsx(p,{}),e=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(m,{currentAccount:{...r,type:"person"}})},u=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(m,{currentAccount:{...r,type:"company"}})},a=()=>t.jsx(m,{});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
