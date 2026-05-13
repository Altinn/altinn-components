import{j as c}from"./iframe-aW2Ivac6.js";import{G as e}from"./GlobalAccountButton-umDbm3Xt.js";import{u}from"./useAccountMenu-B9zr0vSq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWa6FdCb.js";import"./XMark-DUdkEKb2.js";import"./useId-DH4aqM3h.js";import"./ChevronDown-B1Tnrqm5.js";import"./Enter-BUtIy1kW.js";import"./Button-RX-ew4zS.js";import"./button-CCQIf2kf.js";import"./use-merge-refs-CB7-Iow2.js";import"./lite-DaUVFjkg.js";import"./Avatar-C-j1g9mt.js";import"./Skeleton-it7stJ0Q.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-DuQrzvmx.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
