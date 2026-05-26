import{j as c}from"./iframe-C32LkOFR.js";import{G as e}from"./GlobalAccountButton-DggAbOBa.js";import{u}from"./useAccountMenu-1EjrHnhT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B41-Gq6i.js";import"./XMark-CJ_7TJfx.js";import"./useId-C6VS968l.js";import"./ChevronDown-CFXYCpRP.js";import"./Enter-D1Z6jONJ.js";import"./Button-DJyTPLgL.js";import"./tooltip-C1z0ba6x.js";import"./Avatar-Bfhk-MsW.js";import"./Skeleton-BFp1Ns5z.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-C7oIvOKf.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
