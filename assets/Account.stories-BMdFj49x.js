import{j as c}from"./iframe-BFO1Hsm7.js";import{G as e}from"./GlobalAccountButton-CdDGEqm1.js";import{u}from"./useAccountMenu-BFW7uhgu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-q4P8UESO.js";import"./XMark-DHT-JiZe.js";import"./useId-Bk4Ffxqs.js";import"./ChevronDown-zCo1cSZK.js";import"./Enter-BwsZcqun.js";import"./Button-D67YnkXJ.js";import"./tooltip-DUJ67ouq.js";import"./Avatar-KSmNIbNE.js";import"./Skeleton-BRac3_14.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-CbK5EbXL.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
