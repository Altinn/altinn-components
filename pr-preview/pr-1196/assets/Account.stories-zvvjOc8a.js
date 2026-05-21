import{j as c}from"./iframe-BDpWuaMs.js";import{G as e}from"./GlobalAccountButton-DFxURiCJ.js";import{u}from"./useAccountMenu-DMhKPCW-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVPUayQ0.js";import"./XMark-Cx5Omj8e.js";import"./useId-BKmV9YxM.js";import"./ChevronDown-Bc_cVxBY.js";import"./Enter-feRUQkuK.js";import"./Button-m_FXpHGO.js";import"./tooltip-DLcd2lCg.js";import"./Avatar-CT8r-oMP.js";import"./Skeleton-DC_TZb2p.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-DH1096LK.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const f=["CurrentAccount","CompanyAccount","Login"];export{r as CompanyAccount,t as CurrentAccount,n as Login,f as __namedExportsOrder,b as default};
