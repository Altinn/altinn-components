import{j as a}from"./iframe-yBEatwQ0.js";import{h as d}from"./header-dZfUnq1N.js";import{H as o}from"./LocaleSwitcher-C9xEzpSq.js";import{u as t}from"./useSearchbar-CFG0uwYZ.js";import{m as u}from"./globalMenu-Chte0suD.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-D8aC51g_.js";import"./useAccountMenu-8QZdwbVN.js";import"./useAccountsToolbar-BHTWjE-3.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-DJA7wNNg.js";import"./useId-DyCIbqyR.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DNc8DhfV.js";import"./index-B7J_eA84.js";import"./DigdirLogomark-BLU4pLhV.js";import"./Badge-Bt5kdhhY.js";import"./SearchbarField-FDl630BK.js";import"./MagnifyingGlass-SlzD67D9.js";import"./XMark-DRdfunCf.js";import"./Icon-m6GSRHhZ.js";import"./Skeleton-D2AOT5bt.js";import"./AutocompleteItem-BNY-TR_e.js";import"./MenuItem-DG7ysQbI.js";import"./ItemMedia-po0tYTET.js";import"./Avatar-BHAY-jNJ.js";import"./AvatarGroup-Em3MhneF.js";import"./Checkmark-BOqpEP7R.js";import"./Heading-gNorXCZa.js";import"./useHighlightedText-Dt8J34OD.js";import"./ItemControls-CsC9idfH.js";import"./ChevronRight-DNoffWLc.js";import"./QueryLabel-DQ7-405k.js";import"./Plus-CN2BINNw.js";import"./useMenu-DUoC-ldr.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuListHeading-CMUrUTJP.js";import"./DropdownBase-DP_WplSx.js";import"./useClickOutside-De0OSl6s.js";import"./SearchField-Dq16b7ar.js";import"./FieldBase-DJNauVgJ.js";import"./Typography-ggurnZ72.js";import"./Label-jtu-OMH2.js";import"./index-4yM6tgpO.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./InformationSquare-CID74XMT.js";import"./GlobalMenuButton-zUenl8-k.js";import"./PadlockLocked-Dj7qNhL4.js";import"./ButtonLabel-DWbU693S.js";import"./ButtonIcon-kXMu6eE8.js";import"./ArrowUndo-osocl8i7.js";import"./AccountMenu-DMAXPz_2.js";import"./Globe-CnEsP9Fx.js";import"./PadlockLockedFill-Bpq2gcD3.js";import"./Buildings2-iLtDDyRo.js";import"./InboxFill-BAn487aw.js";import"./MenuGrid-B3KPctc0.js";import"./PersonCircle-hsf5HIre.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-C-yemQKs.js";import"./Archive-BK62d9I_.js";import"./Trash-1ExTWg_2.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
