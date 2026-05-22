import{j as c}from"./iframe-CbC-fLaY.js";import{G as e}from"./GlobalAccountButton-DzvhWJtE.js";import{u}from"./useAccountMenu--4_Dk7tP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ds9VDGIC.js";import"./XMark-DvUzU3_h.js";import"./useId-C2JQsT24.js";import"./ChevronDown-abcxRNtY.js";import"./Enter-BnEF64HE.js";import"./Button-B0m1rUs2.js";import"./tooltip-BtbQ4KG6.js";import"./Avatar-CmrLTlqi.js";import"./Skeleton-D8kEQByH.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-BeQXSG1V.js";const b={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:o}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...o,type:"person"}})},r=()=>{const{currentAccount:o}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...o,type:"company"}})},n=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
