import{j as c}from"./iframe-CXxOXnma.js";import{G as e}from"./GlobalAccountButton-CuYPQP23.js";import{u}from"./useAccountMenu-C-8yiJi6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvzmMrBu.js";import"./XMark-DvGwYctt.js";import"./useId-CYy4MNIP.js";import"./ChevronDown-BI53cl-V.js";import"./Enter-CyUcFaj8.js";import"./Button-Dot-dF6F.js";import"./tooltip-F-8CLWbq.js";import"./Avatar-De_JFqYW.js";import"./Skeleton-DaZzKoDP.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-CfcGO9BY.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
