import{j as c}from"./iframe-JDDu8qct.js";import{G as e}from"./GlobalAccountButton-ShTzW6cT.js";import{u}from"./useAccountMenu-BHRRUMJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./index--LOES4hQ.js";import"./XMark-YkWOq4QK.js";import"./useId-BWG34Gxg.js";import"./ChevronDown-Bp0cSPFx.js";import"./Enter-8voGXUw8.js";import"./Button-DJdKIqrT.js";import"./button-xt_-egYh.js";import"./use-merge-refs-Dm0wt9US.js";import"./lite-DaUVFjkg.js";import"./Avatar-C90IY9ut.js";import"./Skeleton-CG77vT0k.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-CgHryWGN.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
