import{j as a}from"./iframe-Dip44woq.js";import{h as d}from"./header-D_siYsQc.js";import{H as o}from"./LocaleSwitcher-Cva4kqQD.js";import{u as t}from"./useSearchbar-yPtbsXzN.js";import{m as u}from"./globalMenu-D_8ZNUl5.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-BgvSpYOa.js";import"./useAccountMenu-CKpET3M9.js";import"./useAccountsToolbar-B4qT5Jhh.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-BtcNLVtx.js";import"./useId-CMLjH0Fx.js";import"./Button-afp2Zwog.js";import"./button-CZ5tfceY.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-HyFNYbFn.js";import"./index-B24kaf2B.js";import"./DigdirLogomark-Rv9s0pnb.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-CQ_oXs66.js";import"./MagnifyingGlass-B4ceu0rd.js";import"./XMark-CynTM0oO.js";import"./Icon-B7B4bUSp.js";import"./Skeleton-CxN7sZWy.js";import"./AutocompleteItem-DqL8HUjl.js";import"./MenuItem-BJUggRUL.js";import"./ItemMedia-5XSAaYKs.js";import"./Avatar-kiiFl4Mz.js";import"./AvatarGroup-sgYryoRH.js";import"./Checkmark-DnUC-Av1.js";import"./Heading-BGLknJpX.js";import"./useHighlightedText-DVvgBsxZ.js";import"./ItemControls-CIGgXmTN.js";import"./ChevronRight-DRGzZC3s.js";import"./QueryLabel-DWMewu_E.js";import"./Plus-C3AvEGJ3.js";import"./useMenu-BX85xV5m.js";import"./MenuListItem-miXGiz4v.js";import"./MenuListHeading-BQZIqP1w.js";import"./DropdownBase-xu4PDQuO.js";import"./useClickOutside-CNOakT_u.js";import"./SearchField-B2BM1-WP.js";import"./FieldBase-BLO6-Mjz.js";import"./Typography-9n0VU0yu.js";import"./Label-BJSes-CJ.js";import"./index-kI5T7Faz.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./InformationSquare-Cyt3NFHk.js";import"./GlobalMenuButton-CnuPQLVy.js";import"./PadlockLocked-BM6Gz5EO.js";import"./ButtonLabel-CTEP1jnZ.js";import"./ButtonIcon-CsjjU3Og.js";import"./ArrowUndo-Bg7IEuKV.js";import"./AccountMenu-BiUerS57.js";import"./Globe-DTH2zuL3.js";import"./PadlockLockedFill-DlKKDP1q.js";import"./Buildings2-B1_IqFfP.js";import"./InboxFill-CF36B1jJ.js";import"./MenuGrid-B9FGO-Tt.js";import"./PersonCircle-CYd9hvDI.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-rihloPcT.js";import"./Archive-COpGQX5c.js";import"./Trash-DY5xEA5p.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
