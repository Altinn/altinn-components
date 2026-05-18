import{j as c}from"./iframe-Bk_HwK4l.js";import{G as e}from"./GlobalAccountButton-B48oWHvp.js";import{u}from"./useAccountMenu-BCMgnvyr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj80ru-z.js";import"./XMark-BlM7H2uk.js";import"./useId-WArpTTRC.js";import"./ChevronDown-Butud2ye.js";import"./Enter-BTsqsWJv.js";import"./Button-DXv-zg1S.js";import"./button-DRIhbrAI.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./Avatar-B1R5c004.js";import"./Skeleton-CZ4GHxMp.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-Bykr2pwN.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <GlobalAccountButton />;
}`,...o.parameters?.docs?.source}}};const C=["CurrentAccount","CompanyAccount","Login"];export{r as CompanyAccount,t as CurrentAccount,o as Login,C as __namedExportsOrder,B as default};
