import{j as c}from"./iframe-u1jxS1Oq.js";import{G as e}from"./GlobalAccountButton-B4zbMdHn.js";import{u}from"./useAccountMenu-DrPzkboV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CuIYfQx6.js";import"./XMark-Bsujigqn.js";import"./useId-MxiBxM6f.js";import"./ChevronDown-CLYLhVpz.js";import"./Enter-Cwv7FqNn.js";import"./Button-BY9-KzE0.js";import"./button-CanOz9MC.js";import"./use-merge-refs-DeN80SPN.js";import"./lite-DaUVFjkg.js";import"./Avatar-DVgGPyAb.js";import"./Skeleton-vSjDGrjA.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill--7goPbEq.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
