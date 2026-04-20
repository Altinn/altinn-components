import{j as a}from"./iframe-BqnZkKPi.js";import{h as d}from"./header-CL72BpvY.js";import{H as o}from"./LocaleSwitcher-BtWYVqID.js";import{u as t}from"./useSearchbar-CeIlbEZP.js";import{m as u}from"./globalMenu-BdhfA5so.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-t45hRxiN.js";import"./useAccountMenu-DqzCHNG-.js";import"./useAccountsToolbar-BHxNgyxu.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-BTUqspAB.js";import"./useId-9kVvsXig.js";import"./Button-BhHmd_Fm.js";import"./button-CeqU6--G.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-BGZ_Vqay.js";import"./index-DAuAfjpD.js";import"./DigdirLogomark-MEPp8H96.js";import"./Badge-wAZ__xuM.js";import"./SearchbarField-yaEGn2Ew.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./XMark-Y2_85_oc.js";import"./Icon-CnWjusVH.js";import"./Skeleton-1qnYSSLw.js";import"./AutocompleteItem-DU64l0Df.js";import"./MenuItem-kT58Bpcm.js";import"./ItemMedia-BIsU1ixF.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Checkmark-BnBY066L.js";import"./Heading-BxNd6ZSD.js";import"./useHighlightedText-Clj8nPui.js";import"./ItemControls-CZQ275uO.js";import"./ChevronRight-DE1wtPln.js";import"./QueryLabel-BFhE5IIA.js";import"./Plus-7ff66Hwu.js";import"./useMenu-b_BS_LFk.js";import"./MenuListItem-AlO17G_F.js";import"./MenuListHeading-CYx60jB_.js";import"./DropdownBase-BDN0b22I.js";import"./useClickOutside-CkSl4dLB.js";import"./SearchField-ufWryraF.js";import"./FieldBase-BELBUfOz.js";import"./Typography-DM76If-Q.js";import"./Label-CWCdrO7p.js";import"./index-wnzGLxld.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./InformationSquare-BrOKqXok.js";import"./GlobalMenuButton-VknE8s_R.js";import"./PadlockLocked-DRp9Nxaq.js";import"./ButtonLabel-DoJ9xNj_.js";import"./ButtonIcon-dIUFz82l.js";import"./ArrowUndo-DUL77TcE.js";import"./AccountMenu-B39lY3R_.js";import"./Globe-C0LXQqCK.js";import"./PadlockLockedFill-DWUZVu94.js";import"./Buildings2-CX0IGr76.js";import"./InboxFill-nxlzxk7U.js";import"./MenuGrid-DoGLOC2Q.js";import"./PersonCircle-De8axjJC.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-CBUJ6BTp.js";import"./Archive-BMrgF3IC.js";import"./Trash-CfRAqYTy.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
