import{j as a}from"./iframe-COdTICiz.js";import{h as d}from"./header-Vv0Xveuv.js";import{H as o}from"./LocaleSwitcher-C8OAuXmV.js";import{u as t}from"./useSearchbar-Dzu2z1SG.js";import{m as u}from"./globalMenu-yrhTMCWw.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-DkUu3R6P.js";import"./useAccountMenu-1q4G8GF-.js";import"./useAccountsToolbar-CXp7UB3F.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-DHXQfshg.js";import"./useId-lT615UMD.js";import"./Button-Dqoqvefk.js";import"./button-BvBLLivB.js";import"./use-merge-refs-DMOZr-G2.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DEFSCjxp.js";import"./index-eHSiAaoN.js";import"./DigdirLogomark-DT64Nygk.js";import"./Badge-CTG2EWNm.js";import"./SearchbarField-KQ8gdvkJ.js";import"./MagnifyingGlass-BjGJbcBP.js";import"./XMark-CpgXVK2Q.js";import"./Icon-CpwjhC7D.js";import"./Skeleton-DCT9M7tY.js";import"./AutocompleteItem-DvVVdN1n.js";import"./MenuItem-Pij9KqE-.js";import"./ItemMedia-BN92MYHv.js";import"./Avatar-30_b1gUS.js";import"./AvatarGroup-DMJoFLAP.js";import"./Checkmark-D_NJmpQs.js";import"./Heading-BXn08xBV.js";import"./useHighlightedText-FFYshbql.js";import"./ItemControls-DRloD8XX.js";import"./ChevronRight-tPPKpYH4.js";import"./QueryLabel-Bt1Ae0Sb.js";import"./Plus-D6hG0ghA.js";import"./useMenu-C9hrnnrl.js";import"./MenuListItem-BVxiRmRE.js";import"./MenuListHeading-C74FO8PH.js";import"./DropdownBase-D-GeILtx.js";import"./useClickOutside-mdIAXV_q.js";import"./SearchField-DQWZ98wb.js";import"./FieldBase-CQukmgiw.js";import"./Typography-CRI9HVXo.js";import"./Label-Bw83ICjW.js";import"./index-zPL8uGVu.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./InformationSquare-BF6iEl5i.js";import"./GlobalMenuButton-cX8v2nux.js";import"./PadlockLocked-X4Kj6P07.js";import"./ButtonLabel-BeR2LbuU.js";import"./ButtonIcon-BSRBlnsV.js";import"./ArrowUndo-BLH3jHa2.js";import"./AccountMenu-DyMm6NVs.js";import"./Globe-CyJqeJ-s.js";import"./PadlockLockedFill-Cj3D67jg.js";import"./Buildings2-BH6LkTev.js";import"./InboxFill-CJVimO5I.js";import"./MenuGrid-4dfRFYs1.js";import"./PersonCircle-CAUPX5rd.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-BwjH6ALD.js";import"./Archive-BB9PeNdy.js";import"./Trash-BPlCWJiN.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
}`,...c.parameters?.docs?.source}}};const yr=["Login","CurrentAccount","CompanyAccount","SubcompanyAccount","MobileMenu","WithCustomBadge"];export{n as CompanyAccount,p as CurrentAccount,s as Login,i as MobileMenu,m as SubcompanyAccount,c as WithCustomBadge,yr as __namedExportsOrder,Mr as default};
