import{j as a}from"./iframe-CFpZEpOT.js";import{h as d}from"./header-BKjGJpMh.js";import{H as o}from"./LocaleSwitcher-cwbOnuSf.js";import{u as t}from"./useSearchbar-nBUQJ4RR.js";import{m as u}from"./globalMenu-DftxmSwB.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-AQRnd-cm.js";import"./useAccountMenu-BEQPKCiz.js";import"./useAccountsToolbar-DBxyqmzN.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-DEHhRWyD.js";import"./useId-Bpa1--zZ.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DbbL3aCv.js";import"./index-CMCH-iYZ.js";import"./DigdirLogomark-BZ-5j-nq.js";import"./Badge-CiO-ESqG.js";import"./SearchbarField-BQvBQvnx.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./XMark-DsxdrTa7.js";import"./Icon-CcpuJg5J.js";import"./Skeleton-BxeTCVQ2.js";import"./AutocompleteItem-DX0tkWsQ.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Checkmark-DLdUb-vP.js";import"./Heading-Biv3WsI7.js";import"./useHighlightedText-DHCy4ZgC.js";import"./ChevronRight-Ca_cSWgJ.js";import"./QueryLabel-DYFcubLK.js";import"./Plus-BvInV0-S.js";import"./useMenu-BHNp1hvr.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuListHeading-BZULpIAa.js";import"./DropdownBase-BSB-jbNd.js";import"./useClickOutside-ChxnoCNJ.js";import"./SearchField-7ltHAmFU.js";import"./FieldBase-BKE2EVCO.js";import"./Typography-CFFVnqbI.js";import"./Label-CTb5NEuA.js";import"./index-CBNpaYnn.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./InformationSquare-DvM0m3_a.js";import"./GlobalMenuButton-D-3ozOIX.js";import"./PadlockLocked-m05TZyf8.js";import"./ButtonLabel-DHLBBQDW.js";import"./ButtonIcon-BpGEXsWC.js";import"./ArrowUndo-C9-6H0l6.js";import"./AccountMenu-CV10p9pO.js";import"./Globe-DOomxry_.js";import"./PadlockLockedFill-D7dAxHFy.js";import"./Buildings2-CHv5owWW.js";import"./InboxFill-DVh7rOkz.js";import"./MenuGrid-ZNnDBKbO.js";import"./PersonCircle-5AXd7Vkz.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-DMRCbUCL.js";import"./Archive-CGP_n4PV.js";import"./Trash-B2QKAP19.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
