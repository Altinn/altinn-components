import{j as c}from"./iframe-xsOFb0qB.js";import{G as e}from"./GlobalAccountButton-DLmWsdQk.js";import{u}from"./useAccountMenu-S2tlqrVp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2Njje4x.js";import"./XMark-CIyVPbna.js";import"./useId-BSkX16Wf.js";import"./ChevronDown-DgTX1k3o.js";import"./Enter-BCbm_6pK.js";import"./Button-BpTRR-R2.js";import"./button-_KGDSi7k.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./Avatar-n4A0Yiev.js";import"./Skeleton-DBfNAA4T.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-BI770wDo.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
