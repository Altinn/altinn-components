import{j as c}from"./iframe-Cppd0qv6.js";import{G as e}from"./GlobalAccountButton-D9Ci5lhW.js";import{u}from"./useAccountMenu-D7MN8GM9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRImx9w3.js";import"./XMark-xtLLERRk.js";import"./useId-BBgZM5Xr.js";import"./ChevronDown-DyFLAVGh.js";import"./Enter-C5TspCZF.js";import"./Button-DZtlkh8w.js";import"./button-DXqTFqXv.js";import"./use-merge-refs-BVudX8AY.js";import"./lite-DaUVFjkg.js";import"./Avatar-C8BEFMoW.js";import"./Skeleton-DZL_2b5i.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-Bgtm1EQq.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
