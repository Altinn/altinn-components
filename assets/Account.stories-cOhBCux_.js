import{j as c}from"./iframe-BakMcPB9.js";import{G as e}from"./GlobalAccountButton-D1ZtEyDi.js";import{u}from"./useAccountMenu-B3wqCLAq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAwqyEdM.js";import"./XMark-D8cLqedS.js";import"./useId-Btw-Kuqp.js";import"./ChevronDown-DMRBxZop.js";import"./Enter-DtzLbGWD.js";import"./Button-BJ-P2q8B.js";import"./button-Dqq-cscz.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./Avatar-bwZt4czp.js";import"./Skeleton-CIZGLt5B.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-C97JobCu.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
