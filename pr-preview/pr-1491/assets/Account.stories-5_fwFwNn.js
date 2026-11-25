var p=Object.defineProperty;var n=(t,a)=>p(t,"name",{value:a,configurable:!0});import{a6 as e}from"./iframe-CZm9Z2L_.js";import{G as u}from"./GlobalAccountButton-B5kGcy7l.js";import{u as s}from"./useAccountMenu-DC0KMFHI.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-BfR_UP2W.js";import"./ChevronDown-Bb4C_BOJ.js";import"./Enter-Bs0dFK5F.js";import"./getAccount-B6DocGW1.js";import"./HeartFill-DoCB_GBg.js";const M={title:"Account",parameters:{layout:"centered"}},r=n(()=>{const{currentAccount:t}=s({accountId:"user"});return e.jsx(u,{currentAccount:{...t,type:"person"}})},"CurrentAccount"),c=n(()=>{const{currentAccount:t}=s({accountId:"diaspora"});return e.jsx(u,{currentAccount:{...t,type:"company"}})},"CompanyAccount"),o=n(()=>e.jsx(u,{}),"Login"),b=["CurrentAccount","CompanyAccount","Login"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'user'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'person'
  } as AccountMenuItemProps} />;
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'diaspora'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'company'
  } as AccountMenuItemProps} />;
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <GlobalAccountButton />;
}`,...o.parameters?.docs?.source}}};export{c as CompanyAccount,r as CurrentAccount,o as Login,b as __namedExportsOrder,M as default};
