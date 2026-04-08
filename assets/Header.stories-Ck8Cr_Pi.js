import{j as a}from"./iframe-BaUVsogD.js";import{h as d}from"./header-CUA84hRa.js";import{H as o}from"./LocaleSwitcher-BFvJ83Lz.js";import{u as t}from"./useSearchbar-BDv7Xh_o.js";import{m as u}from"./globalMenu-MRlgukRc.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-HeBn5pwr.js";import"./useAccountMenu-DPQ9Lfnc.js";import"./useAccountsToolbar-CQd04Gg1.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-cZbO-hTL.js";import"./useId-D8i_et7Z.js";import"./Button-mtd2C5dd.js";import"./button-BfXez8v8.js";import"./use-merge-refs-BV0MipOU.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-bZVgpMG6.js";import"./index-lARy5TPT.js";import"./DigdirLogomark-DY8iQdlX.js";import"./Badge-DkZxiFUy.js";import"./SearchbarField-ChbW028z.js";import"./MagnifyingGlass-DyxA-WAG.js";import"./XMark-vPSUBj6u.js";import"./Icon-7hKeNARf.js";import"./Skeleton-yH6qNAEo.js";import"./AutocompleteItem-Vz8Y6irN.js";import"./MenuItem-6c1J0YV3.js";import"./ItemMedia-BVGZtNsE.js";import"./Avatar-u9iGVwtH.js";import"./AvatarGroup-DFVM-aUE.js";import"./Checkmark-DTahSgDV.js";import"./Heading-Cdi1sqyd.js";import"./useHighlightedText-C23yE0pM.js";import"./ChevronRight-sVn034m6.js";import"./QueryLabel-BZ1orZMX.js";import"./Plus-CnR__6G5.js";import"./useMenu-DnkwvAkg.js";import"./MenuListItem-Bh_jPdY2.js";import"./MenuListHeading-B40v5QW5.js";import"./DropdownBase-WUZxZLfi.js";import"./useClickOutside-B3ExyGqZ.js";import"./SearchField-BG-HK4fX.js";import"./FieldBase-CZ-07bnd.js";import"./Typography-BHJ2EAGl.js";import"./Label-Cge6OnF8.js";import"./index-D4SJX6je.js";import"./Input-BHiIXP8Y.js";import"./input-C1CvvkMg.js";import"./InformationSquare-CDbyjiK5.js";import"./GlobalMenuButton-8tKtNF6k.js";import"./PadlockLocked-z-4XvHII.js";import"./ButtonLabel-CiJQtdb9.js";import"./ButtonIcon-xWoyjfjp.js";import"./ArrowUndo-COPXkqMS.js";import"./AccountMenu-BK8n904R.js";import"./Globe-C6d7JK_Y.js";import"./PadlockLockedFill-DXh-3J43.js";import"./Buildings2-Csty49W7.js";import"./InboxFill-B7Jq6NB7.js";import"./MenuGrid-1GlxcERj.js";import"./PersonCircle-MN6H_4n_.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-BHKe7za1.js";import"./Archive-B5PAnHjV.js";import"./Trash-idftN5YP.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
