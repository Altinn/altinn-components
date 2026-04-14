import{j as a}from"./iframe-gnB9S1An.js";import{h as d}from"./header-9SzFuRZM.js";import{H as o}from"./LocaleSwitcher-DcxhC9YW.js";import{u as t}from"./useSearchbar-COKUVSyp.js";import{m as u}from"./globalMenu-B9Nbuj5w.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-DWit65IK.js";import"./useAccountMenu-Boi2kNQd.js";import"./useAccountsToolbar-BM-uOvkD.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-BTj-lMDE.js";import"./useId-B9nFNwMW.js";import"./Button-Cf61aO7p.js";import"./button-CCpZP8rq.js";import"./use-merge-refs-W_EFMAqs.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-Lh8WydK5.js";import"./index-C4jL9APw.js";import"./DigdirLogomark-MAkI9ini.js";import"./Badge-D2lHyQ6d.js";import"./SearchbarField-B-z4d2NM.js";import"./MagnifyingGlass-LdJ8MC-9.js";import"./XMark-F0lxfgWB.js";import"./Icon-CL2c9__7.js";import"./Skeleton-_K166C5F.js";import"./AutocompleteItem-BMCwRYTe.js";import"./MenuItem-DVF0RjTG.js";import"./ItemMedia-B78XDhUs.js";import"./Avatar-otyGg43a.js";import"./AvatarGroup-CYAQOWwZ.js";import"./Checkmark-D8iTH_Nd.js";import"./Heading-uoQ4E1Gx.js";import"./useHighlightedText-BAP0b8E_.js";import"./ItemControls-0hV_6Ao9.js";import"./ChevronRight-CmdeYhPT.js";import"./QueryLabel-DvLVyde7.js";import"./Plus-p8k1KwpY.js";import"./useMenu-DEo-iQ-R.js";import"./MenuListItem-Cw2vF4tQ.js";import"./MenuListHeading-BN0bXZhY.js";import"./DropdownBase-o4XK_oxD.js";import"./useClickOutside-Dg3BIqlh.js";import"./SearchField-CW2AroNW.js";import"./FieldBase-BbR80WA9.js";import"./Typography-uy1P5_7q.js";import"./Label-Bqs-eWs1.js";import"./index-DXeuHUJe.js";import"./Input-9fyov3Km.js";import"./input-DqrOL1yx.js";import"./InformationSquare-CRWfnij7.js";import"./GlobalMenuButton-CQNQ68Sj.js";import"./PadlockLocked-DZtmii2A.js";import"./ButtonLabel-Bfm3OKtX.js";import"./ButtonIcon-DXQ5NF_g.js";import"./ArrowUndo-Bzf3zYG1.js";import"./AccountMenu-D_cuAzQ4.js";import"./Globe-CrPWgLEB.js";import"./PadlockLockedFill-C8Xg7CpD.js";import"./Buildings2-YTNSVx18.js";import"./InboxFill-CWq5Q3Xh.js";import"./MenuGrid-Bst7v6rr.js";import"./PersonCircle-DywZaqM3.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-GTwORL86.js";import"./Archive-rt_tWVCY.js";import"./Trash-R2DUJthc.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
