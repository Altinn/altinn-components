import{p as c}from"./iframe-D7BK96qe.js";import{G as e}from"./GlobalAccountButton-BSlA4uPB.js";import{u}from"./useAccountMenu-BFANgFKU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL9j6gFH.js";import"./Avatar-BzaJ_tLr.js";import"./Skeleton-C-TQnNEe.js";import"./useId-B1IjdNvC.js";import"./XMark-DKvmykI8.js";import"./ChevronDown-RBr9MJP5.js";import"./Enter-DaYQWjuH.js";import"./Button-UbmuloFB.js";import"./tooltip-B8elfXS-.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-BglTcypd.js";const f={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
