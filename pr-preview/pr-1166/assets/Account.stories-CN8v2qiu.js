import{j as c}from"./iframe-0B_Yudin.js";import{G as e}from"./GlobalAccountButton-BQF_lDUM.js";import{u}from"./useAccountMenu-CY3f9UY9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bzqtFzN_.js";import"./XMark-4vnuAWTz.js";import"./useId-BUxMg0Ir.js";import"./ChevronDown-DyrNm3cx.js";import"./Enter-0Yba7b_H.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./Avatar-BGwRUT15.js";import"./Skeleton-CCW5QxrE.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-B029Znip.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
