import{j as c}from"./iframe-aFNUvxii.js";import{G as e}from"./GlobalAccountButton-DgmIJ2Zc.js";import{u}from"./useAccountMenu-CncUvzXz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmNdTbFH.js";import"./XMark-BNsj9R6R.js";import"./useId-W_OLMGMd.js";import"./ChevronDown-CHfhU-Uc.js";import"./Enter-BWGj_m6z.js";import"./Button-cD6HSwip.js";import"./button-CWls7pzR.js";import"./use-merge-refs-C-1ExRDf.js";import"./lite-DaUVFjkg.js";import"./Avatar-DUHlMNex.js";import"./Skeleton-Cd5GNeeI.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-DlkEo-n7.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
