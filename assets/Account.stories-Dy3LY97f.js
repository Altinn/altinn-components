import{j as c}from"./iframe-BM6RZuQM.js";import{G as e}from"./GlobalAccountButton-BbeQojsg.js";import{u}from"./useAccountMenu-R2DlDLLf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAnedVDn.js";import"./XMark-EbOSJv8a.js";import"./useId-BYt_OYJh.js";import"./ChevronDown-DYIPhVz6.js";import"./Enter-CBXCMPPv.js";import"./Button-DhtPu9_Y.js";import"./tooltip-DKLQ4JCb.js";import"./Avatar-P_Ikblul.js";import"./Skeleton-DWzjK3h6.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-C0v9J4kN.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
