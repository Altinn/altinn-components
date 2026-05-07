import{j as c}from"./iframe-Cqj3AiBb.js";import{G as e}from"./GlobalAccountButton-DzTdmx8c.js";import{u}from"./useAccountMenu-BNVwIEiq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHG1hv9Q.js";import"./XMark-ReENydG3.js";import"./useId-Bi-DL88I.js";import"./ChevronDown-g18mW4eX.js";import"./Enter-COG8qags.js";import"./Button-DYwdzfZG.js";import"./button-CcZ_KMhQ.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./Avatar-D1U6ps5a.js";import"./Skeleton-B33vAz-c.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-DCHu72W2.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
