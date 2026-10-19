var p=Object.defineProperty;var n=(t,a)=>p(t,"name",{value:a,configurable:!0});import{a7 as e}from"./iframe-BhbNl8M-.js";import{G as u}from"./GlobalAccountButton-DJLFYXlr.js";import{u as s}from"./useAccountMenu-CB1eDk4k.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-BNyDKZi7.js";import"./ChevronDown-FDOS9kby.js";import"./Enter-DgJZC0JW.js";import"./getAccount-B6DocGW1.js";import"./HeartFill-DKoAVF2-.js";const M={title:"Account",parameters:{layout:"centered"}},r=n(()=>{const{currentAccount:t}=s({accountId:"user"});return e.jsx(u,{currentAccount:{...t,type:"person"}})},"CurrentAccount"),c=n(()=>{const{currentAccount:t}=s({accountId:"diaspora"});return e.jsx(u,{currentAccount:{...t,type:"company"}})},"CompanyAccount"),o=n(()=>e.jsx(u,{}),"Login");r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const b=["CurrentAccount","CompanyAccount","Login"];export{c as CompanyAccount,r as CurrentAccount,o as Login,b as __namedExportsOrder,M as default};
