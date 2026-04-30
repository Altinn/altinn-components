import{j as c}from"./iframe-CHILL5tZ.js";import{G as e}from"./GlobalAccountButton-adWmBg9P.js";import{u}from"./useAccountMenu-1jVKCAcE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0JdUEkn.js";import"./XMark-DQxCv5Yn.js";import"./useId-CxjMVxT3.js";import"./ChevronDown-D4I_nLcA.js";import"./Enter-C7OsDEIN.js";import"./Button-BhP7fHb4.js";import"./button-BIgBCVIC.js";import"./use-merge-refs-BXZnV1dm.js";import"./lite-DaUVFjkg.js";import"./Avatar-BEHn6hs3.js";import"./Skeleton-BX9QnUCy.js";import"./useAccountsToolbar-x1be4tOl.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-DB-9jMfH.js";const C={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'user'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'person'
  } as AccountMenuItemProps} />;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'diaspora'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'company'
  } as AccountMenuItemProps} />;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <GlobalAccountButton />;
}`,...o.parameters?.docs?.source}}};const S=["CurrentAccount","CompanyAccount","Login"];export{r as CompanyAccount,t as CurrentAccount,o as Login,S as __namedExportsOrder,C as default};
