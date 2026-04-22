import{j as a}from"./iframe-C5YDQF8t.js";import{h as d}from"./header-CZep_Afd.js";import{H as o}from"./LocaleSwitcher-CIgR89RS.js";import{u as t}from"./useSearchbar-D6OHoAJK.js";import{m as u}from"./globalMenu-BxuyzCtB.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-MWkbtFJd.js";import"./useAccountMenu-Bm9YPwMm.js";import"./useAccountsToolbar-BOH-O7aK.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-CPf7_OAe.js";import"./useId-D8_RB8wa.js";import"./Button-BZAGm3c0.js";import"./button-CCJ82TCy.js";import"./use-merge-refs-C8sdFhVy.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-CUL1litC.js";import"./index-Wv9BNi45.js";import"./DigdirLogomark-DXwtxIrk.js";import"./Badge-BloMeVT9.js";import"./Tooltip-BhYnScUh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-D7TJ6WRw.js";import"./MagnifyingGlass-CEZChhW1.js";import"./XMark-DdTqeOk-.js";import"./Icon-CecLgcvt.js";import"./Skeleton-Drx-E9Fo.js";import"./AutocompleteItem-CrPMhRE0.js";import"./MenuItem-WQ9gCGs0.js";import"./ItemMedia-FRtQjDq_.js";import"./Avatar-BGjXXmrj.js";import"./AvatarGroup-DQC0T1Vh.js";import"./Checkmark-B_9eKN07.js";import"./Heading-DpfkgbSv.js";import"./useHighlightedText-n06FiY88.js";import"./ItemControls-B4P5BjHw.js";import"./ChevronRight-N4TcqxLw.js";import"./QueryLabel-dmaVmPOw.js";import"./Plus-Dly6Qmjb.js";import"./useMenu-BhI6CQre.js";import"./MenuListItem-Dn26XcpH.js";import"./MenuListHeading-b0m4AzBM.js";import"./DropdownBase-ZZ0efeFO.js";import"./useClickOutside-DUMp00Li.js";import"./SearchField-DhRNQpTW.js";import"./FieldBase-BeNWnE8F.js";import"./Typography-yp9Qf0rT.js";import"./Label-DtjEPZjV.js";import"./index-B1UWFYtY.js";import"./Input-CBT5zBbT.js";import"./input-D6WzUQ9f.js";import"./InformationSquare-BnjsTJI5.js";import"./GlobalMenuButton-LO1OTDFH.js";import"./PadlockLocked-BITt1ywl.js";import"./ButtonLabel-CoTsOCoc.js";import"./ButtonIcon-DRcTjkMx.js";import"./ArrowUndo-CoYWG19L.js";import"./AccountMenu-C9TvoUjI.js";import"./Globe-hsiQLHF9.js";import"./PadlockLockedFill-GHxmhAmq.js";import"./Buildings2-CCtuJzKi.js";import"./InboxFill-BqOp0fif.js";import"./MenuGrid-BF8Rqd0Y.js";import"./PersonCircle-BcOgqqgZ.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-CibaDFrx.js";import"./Archive-vblwy2cE.js";import"./Trash-D8RBkZPj.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
