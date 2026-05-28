import{p as c}from"./iframe-BBbEwSaq.js";import{G as e}from"./GlobalAccountButton-DXqQC7jn.js";import{u}from"./useAccountMenu-BNbdfvkI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-awH0sXcw.js";import"./Avatar-RSQnlVTq.js";import"./Skeleton-DFF9p8Mx.js";import"./useId-DZp72-eX.js";import"./XMark-Dw8JSfSd.js";import"./ChevronDown-B-mDhRFL.js";import"./Enter-DAOjGrxw.js";import"./Button-DpW4Pu6O.js";import"./tooltip-D3G3Ewte.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-wgMutIaO.js";const f={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
