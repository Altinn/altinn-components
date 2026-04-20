import{j as a}from"./iframe-Dj7Cj6th.js";import{h as d}from"./header-DUH2FbKW.js";import{H as o}from"./LocaleSwitcher-BY0D54vR.js";import{u as t}from"./useSearchbar-DlPYZYl1.js";import{m as u}from"./globalMenu-Bbbt_AAp.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-Cc-EZgTa.js";import"./useAccountMenu-Be5qqc25.js";import"./useAccountsToolbar-8HoKFADG.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-ByYTYDoa.js";import"./useId-ByPI58ip.js";import"./Button-CSjIyK1w.js";import"./button-BKLxmUvr.js";import"./use-merge-refs-YImFlbky.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-BKsQq4_B.js";import"./index-CddsnUaU.js";import"./DigdirLogomark-DrjZrxjV.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-wx8e5rZs.js";import"./MagnifyingGlass-CkAWdXLw.js";import"./XMark-CFOHUWx0.js";import"./Icon-ClXNgiA2.js";import"./Skeleton-D2EJPpRT.js";import"./AutocompleteItem-DaGGpqzH.js";import"./MenuItem-jJDtIeVN.js";import"./ItemMedia-ClCn_Pwn.js";import"./Avatar-BthLZDba.js";import"./AvatarGroup-CKpZaMLG.js";import"./Checkmark-BGb3abOV.js";import"./Heading-CYqNNVt0.js";import"./useHighlightedText-BEM-o_8x.js";import"./ItemControls-Dm3s3qCz.js";import"./ChevronRight-DoyD_DMf.js";import"./QueryLabel-D8IzkRES.js";import"./Plus-CoZtisp_.js";import"./useMenu-CZ8hjrPb.js";import"./MenuListItem-DHv3z0ag.js";import"./MenuListHeading-BcZUdaLF.js";import"./DropdownBase-ZEELqAjW.js";import"./useClickOutside-BktmS85N.js";import"./SearchField-IAcAy2TF.js";import"./FieldBase-1wPahpAR.js";import"./Typography-NJpqcBZB.js";import"./Label-knK18nOg.js";import"./index-DyfHnAhP.js";import"./Input-xlo_b8Ui.js";import"./input-Dg3xXmgC.js";import"./InformationSquare-BF5i3vGC.js";import"./GlobalMenuButton-at_G1dDS.js";import"./PadlockLocked-DMO0v4Jz.js";import"./ButtonLabel-DExUchGn.js";import"./ButtonIcon-B8pHyvH7.js";import"./ArrowUndo-BweBUO2a.js";import"./AccountMenu-BM2-kv7T.js";import"./Globe-D9vLtYKA.js";import"./PadlockLockedFill-DyKEGGIm.js";import"./Buildings2-RbNRYIPS.js";import"./InboxFill-Bdr_IoBv.js";import"./MenuGrid-CIIiRQec.js";import"./PersonCircle-DGunPqZp.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-D8nK4eWy.js";import"./Archive-fCDhiZwM.js";import"./Trash-BWaUzv09.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args,
    accountId: null
  });
  return <Header {...header as HeaderProps} />;
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args
  });
  return <Header {...header as HeaderProps} />;
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args,
    accountId: 'diaspora'
  });
  return <Header {...header as HeaderProps} />;
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args,
    accountId: 'diaspora-2'
  });
  return <Header {...header as HeaderProps} />;
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args,
    accountId: 'diaspora'
  });
  return <Header {...header as HeaderProps} mobileMenu={mobileMenu} />;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
  const header = useHeader({
    ...args,
    accountId: 'diaspora'
  });
  return <Header {...header as HeaderProps} badge={{
    label: 'Beta',
    color: 'person'
  }} />;
}`,...c.parameters?.docs?.source}}};const Br=["Login","CurrentAccount","CompanyAccount","SubcompanyAccount","MobileMenu","WithCustomBadge"];export{n as CompanyAccount,p as CurrentAccount,s as Login,i as MobileMenu,m as SubcompanyAccount,c as WithCustomBadge,Br as __namedExportsOrder,Cr as default};
