import{j as a}from"./iframe-DRbAvM8B.js";import{h as d}from"./header-Lu4j73s_.js";import{H as o}from"./LocaleSwitcher-Ch-z2bPb.js";import{u as t}from"./useSearchbar-uSfvromK.js";import{m as u}from"./globalMenu-DHnDMiSf.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-CalhqoQ-.js";import"./useAccountMenu-DkneCUY7.js";import"./useAccountsToolbar-DsXxsXAF.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-Wk84ovd5.js";import"./useId-p3Uu13R2.js";import"./Button-DXRH0CtL.js";import"./button-DB6SpB_q.js";import"./use-merge-refs-BRHMCtFk.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-D-2cHSgo.js";import"./index-Dpt5RUeZ.js";import"./DigdirLogomark-BMcJZH-y.js";import"./Badge-B0bOgxTq.js";import"./SearchbarField-CdwCe6gN.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./XMark-BeNK6Eym.js";import"./Icon-BB196-C1.js";import"./Skeleton-C6w0Fovi.js";import"./AutocompleteItem-2rl8zuEe.js";import"./MenuItem-GZbX5NAK.js";import"./ItemMedia-DLqoeXZM.js";import"./Avatar-DHw0Umd5.js";import"./AvatarGroup-BZTkgKpW.js";import"./Checkmark-BwvmX3W_.js";import"./Heading-aiLobBhZ.js";import"./useHighlightedText-DaUYVTi5.js";import"./ChevronRight-BIwAZUpi.js";import"./QueryLabel-DMedAoip.js";import"./Plus-frPGag5G.js";import"./useMenu-BNYBCPCQ.js";import"./MenuListItem-CLLuPs6D.js";import"./MenuListHeading-DYidFrGe.js";import"./DropdownBase-Agin9rKC.js";import"./useClickOutside-DcBMNI1Q.js";import"./SearchField-Q4hKdicz.js";import"./FieldBase-_93TCpK5.js";import"./Typography-Da6zx1kt.js";import"./Label-Zr8dB_9-.js";import"./index-Vs8aUpKw.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./InformationSquare-Lr6VUhuh.js";import"./GlobalMenuButton-B4iCNKeV.js";import"./PadlockLocked-DGHOWM9Z.js";import"./ButtonLabel-DCtnGfPd.js";import"./ButtonIcon-rceAdK8H.js";import"./ArrowUndo-HRSWa3P-.js";import"./AccountMenu-DK6t1yuC.js";import"./Globe-MQPa4Wnu.js";import"./PadlockLockedFill-D8BKctec.js";import"./Buildings2-CmC2WHsf.js";import"./InboxFill-C89p-26o.js";import"./MenuGrid-BfVjhsXm.js";import"./PersonCircle-C4jGpZZ2.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-BjFdHmBW.js";import"./Archive-Can2FccB.js";import"./Trash-D6ryZk36.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
