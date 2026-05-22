import{j as c}from"./iframe-C6Awlou2.js";import{G as e}from"./GlobalAccountButton-DR_MSRuC.js";import{u}from"./useAccountMenu-BFMEUnig.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlBZqmFk.js";import"./XMark-BEbAfGHw.js";import"./useId-InpKFtFj.js";import"./ChevronDown-BaaUSGet.js";import"./Enter-By-vbuTM.js";import"./Button-xDUaTd0f.js";import"./tooltip-wBWP-9p3.js";import"./Avatar-CJAvXADO.js";import"./Skeleton-Dzw9idTE.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-Dg_CH6Vp.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
