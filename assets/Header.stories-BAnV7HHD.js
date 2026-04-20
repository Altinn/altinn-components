import{j as a}from"./iframe-CULgtZWU.js";import{h as d}from"./header-0tqiNIWN.js";import{H as o}from"./LocaleSwitcher-C0h4HgGV.js";import{u as t}from"./useSearchbar-Bq3yf3hF.js";import{m as u}from"./globalMenu-dHzwlIfY.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-r3gGlcZ8.js";import"./useAccountMenu-Ch9XZgGH.js";import"./useAccountsToolbar-CRMrejUj.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-8__0yAQ7.js";import"./useId-COk2q28h.js";import"./Button-EDUaKVqz.js";import"./button-DZmMky1p.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-BnaV_SOG.js";import"./index-BvBdYXxj.js";import"./DigdirLogomark-CS3N3Ha5.js";import"./Badge-CMQ7i3tF.js";import"./SearchbarField-DL72xyHa.js";import"./MagnifyingGlass-B-SEPcNi.js";import"./XMark-BCb0_aBA.js";import"./Icon-G4wS9E1h.js";import"./Skeleton-B_F13Udl.js";import"./AutocompleteItem-DCBlnwWW.js";import"./MenuItem-ByRPat9U.js";import"./ItemMedia-CstP66eQ.js";import"./Avatar-DIXtsktU.js";import"./AvatarGroup-C5aSOTjU.js";import"./Checkmark-DEc7m9Qo.js";import"./Heading-QgrsV_VA.js";import"./useHighlightedText-BLw72BO7.js";import"./ItemControls-RibfoZmh.js";import"./ChevronRight-Q1coQceW.js";import"./QueryLabel-egWIh23v.js";import"./Plus-Bkcc1EK1.js";import"./useMenu-Do_nneWd.js";import"./MenuListItem-bQ_fc2Ge.js";import"./MenuListHeading-gj1aWH_N.js";import"./DropdownBase-HXGtRlZY.js";import"./useClickOutside-DLBxhGg-.js";import"./SearchField-D5aR-gNH.js";import"./FieldBase-DGffeSDz.js";import"./Typography-BrN0KsEX.js";import"./Label-TPhVVF1y.js";import"./index-DY3DIpTU.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./InformationSquare-C8Qq6I-D.js";import"./GlobalMenuButton-CVLMagrS.js";import"./PadlockLocked-D7rnItsj.js";import"./ButtonLabel-CGNJgIpu.js";import"./ButtonIcon-B5uSU7rb.js";import"./ArrowUndo-Dr_lpKdM.js";import"./AccountMenu-CEVdyG7q.js";import"./Globe-3EAnc9RM.js";import"./PadlockLockedFill-DmjIHQ_j.js";import"./Buildings2-CbfhaunH.js";import"./InboxFill-gdW-QKE2.js";import"./MenuGrid-Bg-3-RU6.js";import"./PersonCircle-BXrVN4F7.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-S-YXJnTw.js";import"./Archive-C10AizEf.js";import"./Trash-D7-j-WnU.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
