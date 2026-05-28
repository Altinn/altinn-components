import{p as c}from"./iframe-DrMVe4hJ.js";import{G as e}from"./GlobalAccountButton-D-pGviYt.js";import{u}from"./useAccountMenu-KMOR8Eui.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2LUQ97G.js";import"./Avatar-toOOZ7nf.js";import"./Skeleton-BKl0bJYN.js";import"./useId-CwrI0QJg.js";import"./XMark-BXMpu0Gf.js";import"./ChevronDown--vsRLj1W.js";import"./Enter-CSMdGEsW.js";import"./Button-B40GVZAo.js";import"./tooltip-BY1BnveL.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-hfTMvonT.js";const f={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <GlobalAccountButton />;
}`,...n.parameters?.docs?.source}}};const j=["CurrentAccount","CompanyAccount","Login"];export{r as CompanyAccount,t as CurrentAccount,n as Login,j as __namedExportsOrder,f as default};
