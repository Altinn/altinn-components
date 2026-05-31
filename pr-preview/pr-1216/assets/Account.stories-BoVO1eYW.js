import{p as c}from"./iframe-B0raGbVc.js";import{G as e}from"./GlobalAccountButton-CHYERUMO.js";import{u}from"./useAccountMenu-xM7JxiDO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BFPoepm_.js";import"./Avatar-C_p7vVVJ.js";import"./Skeleton-Bie46BNt.js";import"./useId-DjmMrSjF.js";import"./XMark-Vu63tlKp.js";import"./ChevronDown-CNqUwOXO.js";import"./Enter-Cd7cTmaf.js";import"./Button-DaZ5Xj9O.js";import"./tooltip-C563LrpG.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill--8H9FBxU.js";const f={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <GlobalAccountButton />;
}`,...n.parameters?.docs?.source}}};const j=["CurrentAccount","CompanyAccount","Login"];export{r as CompanyAccount,t as CurrentAccount,n as Login,j as __namedExportsOrder,f as default};
