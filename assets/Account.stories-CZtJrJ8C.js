import{j as c}from"./iframe-DkQPO9ro.js";import{G as e}from"./GlobalAccountButton-XS7oC2wJ.js";import{u}from"./useAccountMenu-VhGFIA2t.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrTdOUlk.js";import"./XMark-5G2rqhrX.js";import"./useId-CwF4wxTL.js";import"./ChevronDown-CbPk4DLa.js";import"./Enter-YjTQHWom.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./Avatar-DlrsSRUv.js";import"./Skeleton-8DklmnzK.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-B2O-pGHr.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
