import{j as a}from"./iframe-D8UVhXtj.js";import{h as d}from"./header-CpSYQS5x.js";import{H as o}from"./LocaleSwitcher-DEfGTgmN.js";import{u as t}from"./useSearchbar-BwPHODDY.js";import{m as u}from"./globalMenu-CIw7eOzK.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-zA5oYOt_.js";import"./useAccountMenu-C39NbMwX.js";import"./useAccountsToolbar-MJd7b_--.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-B0BUtMFf.js";import"./useId-B_5z_sER.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-BHp6sORW.js";import"./index-DZ6CWLt4.js";import"./DigdirLogomark-BreUWI_F.js";import"./Badge-FbSzRhwU.js";import"./SearchbarField-C9qphrgF.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./XMark-RzwOtF1Q.js";import"./Icon-DPTwfvyC.js";import"./Skeleton-DuOqXwDT.js";import"./AutocompleteItem-Olet9oGK.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./Avatar-DcRqiXhT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Checkmark-DOivg6Pe.js";import"./Heading-BAduz1Vr.js";import"./useHighlightedText-CniNcpSk.js";import"./ChevronRight-BBMrC_JJ.js";import"./QueryLabel-XhqpPWA7.js";import"./Plus-DWBglMau.js";import"./useMenu-Bi-E8KDv.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuListHeading-BCjwSnwp.js";import"./DropdownBase-CcHs2eZC.js";import"./useClickOutside-C7CiGEtT.js";import"./SearchField-DrqRDMva.js";import"./FieldBase-DzrGcQVO.js";import"./Typography-n-xWt5s-.js";import"./Label-b2Pkfnmh.js";import"./index-B_UnVtHx.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./InformationSquare-BUh6v1hF.js";import"./GlobalMenuButton-tij3rl8x.js";import"./PadlockLocked-B9n2XiiK.js";import"./ButtonLabel-DjMPs_6z.js";import"./ButtonIcon-Dy7UhGq8.js";import"./ArrowUndo-D71UVseq.js";import"./AccountMenu-wBGgCIwc.js";import"./Globe-D2pwTjeG.js";import"./PadlockLockedFill-BUDlb7K4.js";import"./Buildings2-DUmQJdLd.js";import"./InboxFill-CIHnSU58.js";import"./MenuGrid-CziDD6J5.js";import"./PersonCircle-BNtRxEHU.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-BfgjtV9V.js";import"./Archive-yOskI6Ky.js";import"./Trash-CZH-fdX8.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
