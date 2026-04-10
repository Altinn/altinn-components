import{j as a}from"./iframe-DpqvNfuX.js";import{h as d}from"./header-C2CXcnJr.js";import{H as o}from"./LocaleSwitcher-CkkwYZvC.js";import{u as t}from"./useSearchbar-B7SiqlUm.js";import{m as u}from"./globalMenu-GZ2NsHqM.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-BfWT9LRs.js";import"./useAccountMenu-Dymj0do-.js";import"./useAccountsToolbar-SZEjZmVG.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-Cwj1tYzs.js";import"./useId-BXmkKvJa.js";import"./Button-2gJDIHFD.js";import"./button-B0qBlS1p.js";import"./use-merge-refs-C3UJEavz.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-T_vm3OPM.js";import"./index-Ct2h27FF.js";import"./DigdirLogomark-CTvxZZ-u.js";import"./Badge-DH_aKElc.js";import"./SearchbarField-DGheZoWO.js";import"./MagnifyingGlass-oMKY7BYp.js";import"./XMark-D5GqdRxj.js";import"./Icon-DaddCVMS.js";import"./Skeleton-CUXlhXSK.js";import"./AutocompleteItem-CUyj1Vu6.js";import"./MenuItem-DsVjpCyh.js";import"./ItemMedia-UuJJBLbY.js";import"./Avatar-BnDDwZQL.js";import"./AvatarGroup-fDT9dP8b.js";import"./Checkmark-B0EPfKD4.js";import"./Heading-CsYSWfhV.js";import"./useHighlightedText-CsoqNVCh.js";import"./ChevronRight-l4sUB0S3.js";import"./QueryLabel-b0e8fvd2.js";import"./Plus-i3IwH-31.js";import"./useMenu-CL8JxMzd.js";import"./MenuListItem-ydSncMmo.js";import"./MenuListHeading-C8YiegkQ.js";import"./DropdownBase-DYlaIXdq.js";import"./useClickOutside-BtQarK1K.js";import"./SearchField-B4PsSxTf.js";import"./FieldBase-CwbZRzDX.js";import"./Typography-7MtHaiXa.js";import"./Label-DGyVWTo1.js";import"./index-C4Ss_iIN.js";import"./Input-CtghcgQm.js";import"./input-AC6H3fN5.js";import"./InformationSquare-x_nyg8Lo.js";import"./GlobalMenuButton-C4bGQf4E.js";import"./PadlockLocked-CPU9mg8k.js";import"./ButtonLabel-BqDMYKYo.js";import"./ButtonIcon-D3qd8UBN.js";import"./ArrowUndo-Bd_HvD5c.js";import"./AccountMenu-IMvwRl7-.js";import"./Globe-BeMaPubG.js";import"./PadlockLockedFill-DpOgEbfk.js";import"./Buildings2-Bo101WQb.js";import"./InboxFill-CoyW8k8l.js";import"./MenuGrid-ElyM8JPy.js";import"./PersonCircle-DmSvr1dP.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-BVfXtb8z.js";import"./Archive-DCRHCjAj.js";import"./Trash-BiqPoHTU.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
