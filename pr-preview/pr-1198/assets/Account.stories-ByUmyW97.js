import{j as c}from"./iframe-DU0n7__8.js";import{G as e}from"./GlobalAccountButton-BhzlUjed.js";import{u}from"./useAccountMenu-B1Kjloif.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sAFX08uI.js";import"./XMark-DGVnrVrT.js";import"./useId-DCXiBgwp.js";import"./ChevronDown-Bfnu4XYc.js";import"./Enter-WxQAMlE7.js";import"./Button-pXyw-iqn.js";import"./tooltip-UENHGvJl.js";import"./Avatar-Bsgd2iIp.js";import"./Skeleton-etbnaSOo.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-CtZjD9gP.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
