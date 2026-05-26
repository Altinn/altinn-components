import{p as c}from"./iframe-Ca1pxjCh.js";import{G as e}from"./GlobalAccountButton-B6jHkhdr.js";import{u}from"./useAccountMenu-Jp11mm4_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qsemo-NB.js";import"./Avatar-D6lLgCNX.js";import"./Skeleton-CjJRr45L.js";import"./useId-DKdvhqLE.js";import"./XMark-D_G5yHBr.js";import"./ChevronDown-BSf8h3gX.js";import"./Enter-Mj2oKyhG.js";import"./Button-BUoYLOjU.js";import"./tooltip-DBInG_0S.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-l7YS5VL-.js";const f={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
