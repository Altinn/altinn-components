import{j as a}from"./iframe-DUgQHy5z.js";import{h as d}from"./header-Ccx5LE26.js";import{H as o}from"./LocaleSwitcher-CYVwjmO7.js";import{u as t}from"./useSearchbar-DIurRxYg.js";import{m as u}from"./globalMenu-CusR0aRA.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-D8vLRJkT.js";import"./useAccountMenu-BzhCGaz3.js";import"./useAccountsToolbar-Bfww5QV_.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-BuCGHZZm.js";import"./useId-BEmmm-9F.js";import"./Button-DAj4Vb1f.js";import"./button-D0axoqj3.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DrWtlE9w.js";import"./index-CHKdKrFD.js";import"./DigdirLogomark-l4757U5o.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-BqKLD53f.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./XMark-CIC6hSAY.js";import"./Icon-D31Usj2D.js";import"./Skeleton-BWHbMU5J.js";import"./AutocompleteItem-Cw4u_fUl.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./Avatar-CQy8D3NB.js";import"./AvatarGroup-DAp73R1d.js";import"./Checkmark-CEKDqcfc.js";import"./Heading-CGuufgH4.js";import"./useHighlightedText-BXy_Fo0F.js";import"./ItemControls-eEEzDso3.js";import"./ChevronRight-DcPr7c69.js";import"./QueryLabel-CsEx37Me.js";import"./Plus-DMuAFtu8.js";import"./useMenu-DKqXZTHj.js";import"./MenuListItem-Cobo65pu.js";import"./MenuListHeading-USeQ6WLV.js";import"./DropdownBase-B1LZuzwC.js";import"./useClickOutside-nQxD6K1b.js";import"./SearchField-DrvAfAqD.js";import"./FieldBase-B3m8Pe0B.js";import"./Typography-CInfIHKg.js";import"./Label-B-nIzD7x.js";import"./index-DtFuKRqq.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./InformationSquare-C5uyE4ek.js";import"./GlobalMenuButton-DpenfYJr.js";import"./PadlockLocked-OauvSILz.js";import"./ButtonLabel-3HSCNrVA.js";import"./ButtonIcon-CVfXAbGb.js";import"./ArrowUndo-Dawpb3je.js";import"./AccountMenu-8gwTG4_u.js";import"./Globe-lsKPohrg.js";import"./PadlockLockedFill-TYz325xT.js";import"./Buildings2-DA0PLkI3.js";import"./InboxFill-DFOQHMM1.js";import"./MenuGrid-BFXheAVa.js";import"./PersonCircle-zi-Qrj_q.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-BAKdMXQt.js";import"./Archive-BPO8NoVo.js";import"./Trash-palqR5xc.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
