import{j as c}from"./iframe-BUZW8AMM.js";import{G as e}from"./GlobalAccountButton-ChDH8eEo.js";import{u}from"./useAccountMenu-aefej9YR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDG5Qp_D.js";import"./XMark-N_5CtkVA.js";import"./useId-CoMggIDA.js";import"./ChevronDown-C7e7c8oq.js";import"./Enter-QOjqzb8v.js";import"./Button-gpqpzK6E.js";import"./button-Bzfkec0d.js";import"./use-merge-refs-Cq-TarIz.js";import"./lite-DaUVFjkg.js";import"./Avatar-VmI9f2FC.js";import"./Skeleton-2WT-jYKy.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-swP0PXTG.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
