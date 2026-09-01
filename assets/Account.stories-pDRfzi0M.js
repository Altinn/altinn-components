import{a7 as o}from"./iframe-CD11FhkO.js";import{G as e}from"./GlobalAccountButton-CN7oEsou.js";import{u}from"./useAccountMenu-BA2e4k1G.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DnWg8nkP.js";import"./ChevronDown-Z-rCEWMI.js";import"./Enter-BNdrBqs7.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-DrzRVXmd.js";const x={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:c}=u({accountId:"user"});return o.jsx(e,{currentAccount:{...c,type:"person"}})},n=()=>{const{currentAccount:c}=u({accountId:"diaspora"});return o.jsx(e,{currentAccount:{...c,type:"company"}})},r=()=>o.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'user'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'person'
  } as AccountMenuItemProps} />;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'diaspora'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'company'
  } as AccountMenuItemProps} />;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <GlobalAccountButton />;
}`,...r.parameters?.docs?.source}}};const I=["CurrentAccount","CompanyAccount","Login"];export{n as CompanyAccount,t as CurrentAccount,r as Login,I as __namedExportsOrder,x as default};
