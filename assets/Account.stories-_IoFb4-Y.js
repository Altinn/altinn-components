import{p as c}from"./iframe-a6n42jIx.js";import{G as e}from"./GlobalAccountButton-Blp41UeO.js";import{u}from"./useAccountMenu-DmTvAoMW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D2z1-3lt.js";import"./Avatar-DDS_Cv_Z.js";import"./Skeleton-BMznOa58.js";import"./useId-JsUrCC3L.js";import"./XMark-ENWUN_kz.js";import"./ChevronDown--dIT-Lld.js";import"./Enter-DL78dUQh.js";import"./Button-DYhT04-k.js";import"./tooltip-D8RdZxwd.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-BZeQpE7w.js";const f={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
