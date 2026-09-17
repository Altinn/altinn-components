import{a7 as o}from"./iframe-BlyVQ5Wf.js";import{G as e}from"./GlobalAccountButton-Dc4bMZ5Z.js";import{u}from"./useAccountMenu-BCYl5C36.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DQIgsQd2.js";import"./ChevronDown-Bxa_Upno.js";import"./Enter-Bs5XnApl.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-C3HM61e6.js";const x={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:c}=u({accountId:"user"});return o.jsx(e,{currentAccount:{...c,type:"person"}})},n=()=>{const{currentAccount:c}=u({accountId:"diaspora"});return o.jsx(e,{currentAccount:{...c,type:"company"}})},r=()=>o.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
