import{a7 as o}from"./iframe-BOq385O8.js";import{G as e}from"./GlobalAccountButton-a3opwitw.js";import{u}from"./useAccountMenu-zilSzJ3H.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DGnXzkTF.js";import"./ChevronDown-ByPuuZmk.js";import"./Enter-C9D2pmVO.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-DYBbyooL.js";const x={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:c}=u({accountId:"user"});return o.jsx(e,{currentAccount:{...c,type:"person"}})},n=()=>{const{currentAccount:c}=u({accountId:"diaspora"});return o.jsx(e,{currentAccount:{...c,type:"company"}})},r=()=>o.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
