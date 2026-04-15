import{j as a}from"./iframe-BWWyepKi.js";import{h as d}from"./header-B_hXxrfF.js";import{H as o}from"./LocaleSwitcher-ZSDiFb3W.js";import{u as t}from"./useSearchbar-B19bAqr1.js";import{m as u}from"./globalMenu-YVPeMv21.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-g-BV4uvP.js";import"./useAccountMenu-vBHQIgJZ.js";import"./useAccountsToolbar-DoGOBUeg.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-vK5Yc91U.js";import"./useId-CMCVT55W.js";import"./Button-DaLP9UzX.js";import"./button-dq33hCwG.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-CYXiMf6h.js";import"./index-fkRlyifr.js";import"./DigdirLogomark-C75i41t_.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-DXpZt8O3.js";import"./MagnifyingGlass-B591vdqr.js";import"./XMark-DJOirLMA.js";import"./Icon-w9oNx8pI.js";import"./Skeleton-CYDyiFkf.js";import"./AutocompleteItem-BW8L80bJ.js";import"./MenuItem-Dk1uy6my.js";import"./ItemMedia-h4TQiEvV.js";import"./Avatar-CiKCHN1S.js";import"./AvatarGroup-DPHuhQ41.js";import"./Checkmark-C84HjHaR.js";import"./Heading-DQYelGqr.js";import"./useHighlightedText-BYfI8EMJ.js";import"./ItemControls-jVI2cRmn.js";import"./ChevronRight-I2Pyvoyr.js";import"./QueryLabel-DBvi2_kM.js";import"./Plus-i5lFDX1a.js";import"./useMenu-BnIxk9FT.js";import"./MenuListItem-uASMHa_1.js";import"./MenuListHeading-CgclVl9k.js";import"./DropdownBase-CDaTtZub.js";import"./useClickOutside-DqlHBtqe.js";import"./SearchField-BuZQEnM8.js";import"./FieldBase-DnRTsvox.js";import"./Typography-C9vgo_J4.js";import"./Label-DYc4A36I.js";import"./index-2Prco8uk.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./InformationSquare-WPPzSpdY.js";import"./GlobalMenuButton-Bx1gyj5Q.js";import"./PadlockLocked-BoC2y4lf.js";import"./ButtonLabel-C9m85BPo.js";import"./ButtonIcon-CknArlPu.js";import"./ArrowUndo-B3f9JFxf.js";import"./AccountMenu-CMtdAaLw.js";import"./Globe-qk8GfdhN.js";import"./PadlockLockedFill-DBaRumWt.js";import"./Buildings2-DRqyTy38.js";import"./InboxFill-CGl49g3V.js";import"./MenuGrid-BzIQlHmL.js";import"./PersonCircle-BNXH9dF5.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-CCyimZDh.js";import"./Archive-C0BkWIAH.js";import"./Trash-DMXRjDw8.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
