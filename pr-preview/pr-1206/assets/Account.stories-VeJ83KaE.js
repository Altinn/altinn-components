import{j as c}from"./iframe-CdkbiINU.js";import{G as e}from"./GlobalAccountButton-PpS-HXEW.js";import{u}from"./useAccountMenu-RyIUwxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClUlC5r_.js";import"./XMark-CXTea0I2.js";import"./useId-BBNwfwR-.js";import"./ChevronDown-DqPtLl_G.js";import"./Enter-DES-VDJ8.js";import"./Button-DbqBa2Ra.js";import"./tooltip-ClrKYCC2.js";import"./Avatar-Dqj4y4ce.js";import"./Skeleton-DNrLKFK9.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-vVx3GXlt.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const f=["CurrentAccount","CompanyAccount","Login"];export{r as CompanyAccount,t as CurrentAccount,n as Login,f as __namedExportsOrder,b as default};
