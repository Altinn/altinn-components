import{j as a}from"./iframe-BTgHnb1V.js";import{h as d}from"./header-CEZ-F5Ov.js";import{H as o}from"./LocaleSwitcher-ComnVM5v.js";import{u as t}from"./useSearchbar-Bf_Dxop6.js";import{m as u}from"./globalMenu-bwwbTL_p.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-BiVo51DP.js";import"./useAccountMenu-CX97yYhQ.js";import"./useAccountsToolbar-h-ANj76k.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-C9Siws5k.js";import"./useId-DWidDjIe.js";import"./Button-Ccau3b8T.js";import"./button-DAOqBeHz.js";import"./use-merge-refs-8A0H_t2p.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DJp9AwJx.js";import"./index-t_Anj6Qz.js";import"./DigdirLogomark-DKMKyo2l.js";import"./Badge-sZl2g-is.js";import"./SearchbarField-H7iFpAxy.js";import"./MagnifyingGlass-DQ3ccb4H.js";import"./XMark-DMQzhoj3.js";import"./Icon-PY6OftAR.js";import"./Skeleton-B3M39f3D.js";import"./AutocompleteItem-ufEr20HH.js";import"./MenuItem-DLwUzMv1.js";import"./ItemMedia-BOGO8xTn.js";import"./Avatar-DpDT0aNa.js";import"./AvatarGroup-4I2zgroj.js";import"./Checkmark-jKAH024b.js";import"./Heading-Ca71xFkp.js";import"./useHighlightedText-DrZCsmQU.js";import"./ChevronRight-DEDRS1St.js";import"./QueryLabel-CdQVl2J-.js";import"./Plus-D5thgfNG.js";import"./useMenu-DSfKnhCX.js";import"./MenuListItem-DKnhIWL6.js";import"./MenuListHeading-CfRWVBZN.js";import"./DropdownBase-DkBWmYvT.js";import"./useClickOutside-CCvWuVdp.js";import"./SearchField-Dea1MzEn.js";import"./FieldBase-B5jTEalp.js";import"./Typography-CR3zr5Vv.js";import"./Label-DOnz6ye3.js";import"./index-3lpPu1ww.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./InformationSquare-BM_VTFR-.js";import"./GlobalMenuButton-KIWIdr7d.js";import"./PadlockLocked-BrWDbaw_.js";import"./ButtonLabel-BxBMzqVA.js";import"./ButtonIcon-_poyNtkQ.js";import"./ArrowUndo-vJkbQsmL.js";import"./AccountMenu-DAKN4S5H.js";import"./Globe-DOckyNhZ.js";import"./PadlockLockedFill-M37DBcyl.js";import"./Buildings2-CYlWigAS.js";import"./InboxFill-pgiUqnQz.js";import"./MenuGrid-ChmYNDLY.js";import"./PersonCircle-Dwiecph6.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-fKWwbmfi.js";import"./Archive-D54l5aI2.js";import"./Trash-CNgFJdUI.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
