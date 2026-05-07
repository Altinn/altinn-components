import{j as c}from"./iframe-Nkxls2w0.js";import{G as e}from"./GlobalAccountButton-1LpwA0ez.js";import{u}from"./useAccountMenu-Bic09Mnl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M4TkGQLb.js";import"./XMark-D-ALqV0n.js";import"./useId-C8J5yFeN.js";import"./ChevronDown-DGUtPuYx.js";import"./Enter-B5kYaJFx.js";import"./Button-Ds9vuGVD.js";import"./button-CK59nDyy.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";import"./Avatar-BDGJojEv.js";import"./Skeleton-DNS4c1Rp.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-DW-S_Xm4.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
