import{a7 as o}from"./iframe-DxDA2A5n.js";import{G as e}from"./GlobalAccountButton-BxZcOP3U.js";import{u}from"./useAccountMenu-CLz_Znrm.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-CZW-u89b.js";import"./ChevronDown-Cl8SGDa2.js";import"./Enter-BtGZyTuG.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-D6SH56Jk.js";const x={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:c}=u({accountId:"user"});return o.jsx(e,{currentAccount:{...c,type:"person"}})},n=()=>{const{currentAccount:c}=u({accountId:"diaspora"});return o.jsx(e,{currentAccount:{...c,type:"company"}})},r=()=>o.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
