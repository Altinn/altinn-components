import{j as c}from"./iframe-CZMLD2fe.js";import{G as e}from"./GlobalAccountButton-DltMrGPB.js";import{u}from"./useAccountMenu-BUPU4Djz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iGjPLQV7.js";import"./XMark-BBRiAlI8.js";import"./useId-Dmu9AgSD.js";import"./ChevronDown-Bjx7qU4A.js";import"./Enter-B5HAdrS7.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./Avatar-DzGFAhDt.js";import"./Skeleton-D52MvI5U.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-Bo9xq64m.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const C=["CurrentAccount","CompanyAccount","Login"];export{r as CompanyAccount,t as CurrentAccount,o as Login,C as __namedExportsOrder,B as default};
