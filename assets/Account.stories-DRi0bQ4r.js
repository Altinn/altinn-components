import{j as t}from"./iframe-B1AqnzaQ.js";import{G as p}from"./GlobalAccountButton-Ds0eL8Qh.js";import{u as s}from"./useAccountMenu-CB4ETM4w.js";import{G as m}from"./GlobalMenuButton-CoiBpDm5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ddi2Dmvi.js";import"./XMark-COJVLPGF.js";import"./useId-D3sFZbtB.js";import"./ChevronDown-yd2Fwy4k.js";import"./Enter-B5mipRj9.js";import"./Button-7DVHhPF2.js";import"./button-HgPz3r79.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./Avatar-Dhw0Atsj.js";import"./Skeleton-6Posg2tf.js";import"./useAccountsToolbar-CnEYgc0z.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-DxrYEi1K.js";import"./PadlockLocked-CobcO1qj.js";import"./ButtonLabel-CKRky11D.js";import"./ButtonIcon-B4FLSCwL.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Icon-68Gi_xA8.js";import"./Badge-DUhzLQsC.js";const v={title:"Account",parameters:{layout:"centered"}},n=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(p,{currentAccount:{...r,type:"person"}})},c=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(p,{currentAccount:{...r,type:"company"}})},o=()=>t.jsx(p,{}),e=()=>{const{currentAccount:r}=s({accountId:"user"});return t.jsx(m,{currentAccount:{...r,type:"person"}})},u=()=>{const{currentAccount:r}=s({accountId:"diaspora"});return t.jsx(m,{currentAccount:{...r,type:"company"}})},a=()=>t.jsx(m,{});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'user'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'person'
  } as Account} />;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'diaspora'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'company'
  } as Account} />;
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <GlobalAccountButton />;
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'user'
  });
  return <GlobalMenuButton_old currentAccount={{
    ...currentAccount,
    type: 'person'
  } as Account} />;
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'diaspora'
  });
  return <GlobalMenuButton_old currentAccount={{
    ...currentAccount,
    type: 'company'
  } as Account} />;
}`,...u.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <GlobalMenuButton_old />;
}`,...a.parameters?.docs?.source}}};const w=["CurrentAccount","CompanyAccount","Login","DeprecatedCurrentAccount","DeprecatedCompanyAccount","DeprecatedLogin"];export{c as CompanyAccount,n as CurrentAccount,u as DeprecatedCompanyAccount,e as DeprecatedCurrentAccount,a as DeprecatedLogin,o as Login,w as __namedExportsOrder,v as default};
