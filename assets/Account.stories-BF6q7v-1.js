import{p as c}from"./iframe-HmDeAVAp.js";import{G as e}from"./GlobalAccountButton-DvDpR5SP.js";import{u}from"./useAccountMenu-D7vno3IW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDtevUxF.js";import"./Avatar-CUX9SLHz.js";import"./Skeleton-C_Dxe6ID.js";import"./useId-BNhfXdUV.js";import"./XMark-DFSmJjac.js";import"./ChevronDown-D8XmQ_JM.js";import"./Enter-CAZ7ckdy.js";import"./Button-SB9AH0kY.js";import"./tooltip-DaXe8rKK.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-F6kflSFE.js";const f={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
