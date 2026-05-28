import{p as c}from"./iframe-43_RSSTf.js";import{G as e}from"./GlobalAccountButton-l7w_Shmo.js";import{u}from"./useAccountMenu-C_gEjtMM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9XEmR3s.js";import"./Avatar-B5wzfTza.js";import"./Skeleton-C5aNvb_u.js";import"./useId-BLkk23cI.js";import"./XMark-Baw5EL5c.js";import"./ChevronDown-DzTSEYyg.js";import"./Enter-DdOnloWp.js";import"./Button-B83AdZGF.js";import"./tooltip-CaRi0lSN.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-CK5ZP6qh.js";const f={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
