import{j as c}from"./iframe-YdRL1NzV.js";import{G as e}from"./GlobalAccountButton-DVQpzDNl.js";import{u}from"./useAccountMenu-zHaDwVov.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SoIsie1y.js";import"./XMark-1l7ZvP46.js";import"./useId-DxHKrSZ4.js";import"./ChevronDown-Uy2Tl2KH.js";import"./Enter-BrhwR_zU.js";import"./Button-BwQOxknK.js";import"./tooltip-D0NJwlFT.js";import"./Avatar-02T2Z9c_.js";import"./Skeleton-C3i9Ug5T.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-xZwyoFnY.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
