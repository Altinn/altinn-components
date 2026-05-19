import{j as c}from"./iframe-CPVbSj3C.js";import{G as e}from"./GlobalAccountButton-CtFwuVqI.js";import{u}from"./useAccountMenu-BXGFvz9G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-yq3MoC.js";import"./XMark-DWjKCZtX.js";import"./useId-CeU55pH0.js";import"./ChevronDown-Dne2Ro5q.js";import"./Enter-CVOd6v7z.js";import"./Button-D-Q0AT9s.js";import"./button-ChrWDnnK.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./Avatar-Ctx52zko.js";import"./Skeleton-O-y9i0gG.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-Diwb-etP.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
