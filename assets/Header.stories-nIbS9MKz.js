import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{i as t}from"./globalMenu-CNFEw4pj.js";import{t as n}from"./LocaleSwitcher-B043kItx.js";import{t as r}from"./header-Dw7WTJLI.js";import{t as i}from"./useSearchbar-Ce5JagqE.js";var a=e(),o={title:`Layout/Header`,component:n,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{...r,search:{name:`inbox-search`,placeholder:`Søk i Altinn`}}},s=e=>(0,a.jsx)(n,{...i({...e,accountId:null})}),c=e=>(0,a.jsx)(n,{...i({...e})}),l=e=>(0,a.jsx)(n,{...i({...e,accountId:`diaspora`})}),u=e=>(0,a.jsx)(n,{...i({...e,accountId:`diaspora-2`})}),d=e=>(0,a.jsx)(n,{...i({...e,accountId:`diaspora`}),mobileMenu:t}),f=e=>(0,a.jsx)(n,{...i({...e,accountId:`diaspora`}),badge:{label:`Beta`,color:`person`}});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args,
    accountId: null
  });
  return <Header {...header as HeaderProps} />;
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args
  });
  return <Header {...header as HeaderProps} />;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args,
    accountId: 'diaspora'
  });
  return <Header {...header as HeaderProps} />;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args,
    accountId: 'diaspora-2'
  });
  return <Header {...header as HeaderProps} />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args,
    accountId: 'diaspora'
  });
  return <Header {...header as HeaderProps} mobileMenu={mobileMenu} />;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args,
    accountId: 'diaspora'
  });
  return <Header {...header as HeaderProps} badge={{
    label: 'Beta',
    color: 'person'
  }} />;
}`,...f.parameters?.docs?.source}}};var p=[`Login`,`CurrentAccount`,`CompanyAccount`,`SubcompanyAccount`,`MobileMenu`,`WithCustomBadge`];export{l as CompanyAccount,c as CurrentAccount,s as Login,d as MobileMenu,u as SubcompanyAccount,f as WithCustomBadge,p as __namedExportsOrder,o as default};