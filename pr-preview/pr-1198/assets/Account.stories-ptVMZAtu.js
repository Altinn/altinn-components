import{j as c}from"./iframe-DXwGEFZf.js";import{G as e}from"./GlobalAccountButton-CzYHDvba.js";import{u}from"./useAccountMenu-DpWjJla9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpQTH4Pc.js";import"./XMark-BspkucHC.js";import"./useId-Df52yuGg.js";import"./ChevronDown-Cc2tQRQQ.js";import"./Enter-ChEXP26q.js";import"./Button-BcOfKjgE.js";import"./tooltip-OQNLf2nv.js";import"./Avatar-OxvpOCq4.js";import"./Skeleton-CD7VUCi3.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-Bx48nAIh.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
