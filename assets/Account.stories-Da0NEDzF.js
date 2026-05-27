import{p as c}from"./iframe-WHERbRNQ.js";import{G as e}from"./GlobalAccountButton-Dh83g-S0.js";import{u}from"./useAccountMenu-u260JJSc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPQpJFkN.js";import"./Avatar-BsRLrsxS.js";import"./Skeleton-rNcUZaAx.js";import"./useId-BfbJ7PbP.js";import"./XMark-5kXogJ_J.js";import"./ChevronDown-DWIhSCAm.js";import"./Enter-D5TP3xo0.js";import"./Button-DkTjWAj1.js";import"./tooltip-C7TGaz5I.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-D5kqlvfH.js";const f={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
