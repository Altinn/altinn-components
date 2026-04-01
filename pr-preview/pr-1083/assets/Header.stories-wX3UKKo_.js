import{j as a}from"./iframe-DxKlu2kD.js";import{h as d}from"./header-SPFFGf5m.js";import{H as o}from"./LocaleSwitcher-sArRYORf.js";import{u as t}from"./useSearchbar--0T2-Quz.js";import{m as u}from"./globalMenu-B3nrl9b8.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-DET9q0dm.js";import"./useAccountMenu-D2pUF167.js";import"./useAccountsToolbar-haP3h4tP.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-D-238qwI.js";import"./useId-_YfdAmsW.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-BOE7l-hO.js";import"./index-BWCSYHeO.js";import"./DigdirLogomark-CUyaUXyD.js";import"./Badge-4TJDD2P9.js";import"./SearchbarField-DxqtDh0S.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./XMark-C1fx_pyo.js";import"./Icon-CrZKj0Yv.js";import"./Skeleton-niSIm0IT.js";import"./AutocompleteItem-BmmZWTfe.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Checkmark-C9NR0hmL.js";import"./Heading-m7XVygop.js";import"./useHighlightedText-DHBtHLKn.js";import"./ChevronRight-DCeYx28-.js";import"./QueryLabel-9PVapst6.js";import"./Plus-Dz67JQoo.js";import"./useMenu-DwMeQcTX.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./DropdownBase-DaCnHxjM.js";import"./useClickOutside-uhEEdzFg.js";import"./SearchField-yItf8ktv.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./Label-DPRrgAAI.js";import"./index-sO6KcVLH.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./InformationSquare-D9H1eLzz.js";import"./GlobalMenuButton-Vcss85wZ.js";import"./PadlockLocked-0QQ-kzkD.js";import"./ButtonLabel-DyfUioWj.js";import"./ButtonIcon-Cd03PLYe.js";import"./ArrowUndo-BeF4mKpq.js";import"./AccountMenu-SjpBIltx.js";import"./Globe-eyFWzdKT.js";import"./PadlockLockedFill-ClPKZDTy.js";import"./Buildings2-DDbBdJ6H.js";import"./InboxFill-DNGI5Ip5.js";import"./MenuGrid-foGtWjAB.js";import"./PersonCircle-BsqwchV5.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-Bwp4zv2C.js";import"./Archive-DOcjXifM.js";import"./Trash-BduIn3aS.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
}`,...c.parameters?.docs?.source}}};const Mr=["Login","CurrentAccount","CompanyAccount","SubcompanyAccount","MobileMenu","WithCustomBadge"];export{n as CompanyAccount,p as CurrentAccount,s as Login,i as MobileMenu,m as SubcompanyAccount,c as WithCustomBadge,Mr as __namedExportsOrder,Ar as default};
