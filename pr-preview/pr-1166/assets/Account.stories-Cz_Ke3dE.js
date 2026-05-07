import{j as c}from"./iframe-BLYnYdJi.js";import{G as e}from"./GlobalAccountButton-D4kgT2nn.js";import{u}from"./useAccountMenu-DLvfrgi6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B87fQ9Ty.js";import"./XMark-Df3dBUtr.js";import"./useId-X7maRfkh.js";import"./ChevronDown-2Zea4dpX.js";import"./Enter-v6RvFZ3i.js";import"./Button-DA7PTG8V.js";import"./button-B4GPokGl.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./Avatar-R2BW9KiJ.js";import"./Skeleton-DVFvYbaO.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-H3FcMj78.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
