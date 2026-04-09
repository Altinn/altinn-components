import{j as a}from"./iframe-DgiLb7Jh.js";import{h as d}from"./header-B_Ww3_aM.js";import{H as o}from"./LocaleSwitcher-De0lo3Os.js";import{u as t}from"./useSearchbar-D8pRqDsa.js";import{m as u}from"./globalMenu-6DJB3M--.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-Ckhi8jiz.js";import"./useAccountMenu-DhXEg9tW.js";import"./useAccountsToolbar-D87yQfAd.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-BCkF_MLv.js";import"./useId-6J1VG5PF.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DnJ6rrKA.js";import"./index-CzzvqmNv.js";import"./DigdirLogomark-CWW_1YHS.js";import"./Badge-DFo-bNGw.js";import"./SearchbarField-Dx4FUd9u.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./XMark-DE16CL-6.js";import"./Icon-uoDJWBW9.js";import"./Skeleton-CjXkBVSw.js";import"./AutocompleteItem-CSfi4S0p.js";import"./MenuItem-CM4esdkj.js";import"./ItemMedia-BvSNOAVc.js";import"./Avatar-D2ea3_hU.js";import"./AvatarGroup-BGNg7yRW.js";import"./Checkmark-49Lv_3MM.js";import"./Heading-CAIwUoS2.js";import"./useHighlightedText-C3KXFHAg.js";import"./ChevronRight-B8GqJ6hU.js";import"./QueryLabel-BitPHzo5.js";import"./Plus-gYiwb3vr.js";import"./useMenu-7q5OpfBf.js";import"./MenuListItem-BzaUHJzz.js";import"./MenuListHeading-BHx30WUA.js";import"./DropdownBase-DIlZu5cZ.js";import"./useClickOutside-DXlVgUmO.js";import"./SearchField-CTb1s1hd.js";import"./FieldBase-B0t89PB6.js";import"./Typography-Bp8CNLT3.js";import"./Label-6LQ7LXNA.js";import"./index-Cu0iGtDM.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./InformationSquare-CZhEVvng.js";import"./GlobalMenuButton-juDUvOYf.js";import"./PadlockLocked-CvlPqwA8.js";import"./ButtonLabel-Ch_U16-K.js";import"./ButtonIcon-CpeMN0SU.js";import"./ArrowUndo-Dx5hHpGf.js";import"./AccountMenu-DJcMWRL0.js";import"./Globe-r95Jct_q.js";import"./PadlockLockedFill-CO86K5pC.js";import"./Buildings2-B3-eOzM1.js";import"./InboxFill-2LP2zszg.js";import"./MenuGrid-DDphszev.js";import"./PersonCircle-Cp_h5SKP.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-BMlh_PGy.js";import"./Archive-DCJg-9Yj.js";import"./Trash-1SNvNmMf.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
