import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./GlobalAccountButton-qkDmLoSr.js";import{t as n}from"./GlobalMenuButton-CWXMlPik.js";import{t as r}from"./useAccountMenu-DXrbjGkx.js";var i=e(),a={title:`Account`,parameters:{layout:`centered`}},o=()=>{let{currentAccount:e}=r({accountId:`user`});return(0,i.jsx)(t,{currentAccount:{...e,type:`person`}})},s=()=>{let{currentAccount:e}=r({accountId:`diaspora`});return(0,i.jsx)(t,{currentAccount:{...e,type:`company`}})},c=()=>(0,i.jsx)(t,{}),l=()=>{let{currentAccount:e}=r({accountId:`user`});return(0,i.jsx)(n,{currentAccount:{...e,type:`person`}})},u=()=>{let{currentAccount:e}=r({accountId:`diaspora`});return(0,i.jsx)(n,{currentAccount:{...e,type:`company`}})},d=()=>(0,i.jsx)(n,{});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'user'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'person'
  } as Account} />;
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'diaspora'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'company'
  } as Account} />;
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <GlobalAccountButton />;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'user'
  });
  return <GlobalMenuButton_old currentAccount={{
    ...currentAccount,
    type: 'person'
  } as Account} />;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'diaspora'
  });
  return <GlobalMenuButton_old currentAccount={{
    ...currentAccount,
    type: 'company'
  } as Account} />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <GlobalMenuButton_old />;
}`,...d.parameters?.docs?.source}}};var f=[`CurrentAccount`,`CompanyAccount`,`Login`,`DeprecatedCurrentAccount`,`DeprecatedCompanyAccount`,`DeprecatedLogin`];export{s as CompanyAccount,o as CurrentAccount,u as DeprecatedCompanyAccount,l as DeprecatedCurrentAccount,d as DeprecatedLogin,c as Login,f as __namedExportsOrder,a as default};