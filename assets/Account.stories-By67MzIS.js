import{j as c}from"./iframe-D-ID03Ik.js";import{G as e}from"./GlobalAccountButton-C8oi4QS_.js";import{u}from"./useAccountMenu-ew3FUgVL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpFyEq-2.js";import"./XMark-DAr8sgUQ.js";import"./useId-DxZoCrQU.js";import"./ChevronDown-_u2ch-6C.js";import"./Enter-C3raXanf.js";import"./Button-CO1zFGa4.js";import"./tooltip-CH7-mov_.js";import"./Avatar-CUF81_T9.js";import"./Skeleton--3bwKnDN.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-CdZwyDhR.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
