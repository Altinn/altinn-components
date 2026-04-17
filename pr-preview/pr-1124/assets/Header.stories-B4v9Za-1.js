import{j as a}from"./iframe-C30XMp4u.js";import{h as d}from"./header-DlxCzsPf.js";import{H as o}from"./LocaleSwitcher-DhCjFmPB.js";import{u as t}from"./useSearchbar-DaXA9W_D.js";import{m as u}from"./globalMenu-O69Jbdcr.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-5IFfg7OW.js";import"./useAccountMenu-DOKkCLzC.js";import"./useAccountsToolbar-C22P-BSb.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-n4y15MUI.js";import"./useId-k4Xjw1TB.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-r8DH4xrH.js";import"./index-Dfjgmy9H.js";import"./DigdirLogomark-BWFmjM3O.js";import"./Badge-BL5WZhsc.js";import"./SearchbarField-Cx5HsXRX.js";import"./MagnifyingGlass-BcLoywmE.js";import"./XMark-ZCF0kQw6.js";import"./Icon-BW7eZq3t.js";import"./Skeleton-DYu3bsVd.js";import"./AutocompleteItem-BXbOn6ST.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Checkmark-BHVaOMRl.js";import"./Heading-r7KrHQRq.js";import"./useHighlightedText-BcdufPkD.js";import"./ItemControls-XLXkfke2.js";import"./ChevronRight-cMtudnfA.js";import"./QueryLabel-DA3OdOzv.js";import"./Plus-zIuJSXr8.js";import"./useMenu-HLwWT2ab.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./DropdownBase-DqPEgLO0.js";import"./useClickOutside-CQbrwNbZ.js";import"./SearchField-GqHOGaRS.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./Label-CZ9Sm67x.js";import"./index-MPuYdx8K.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./InformationSquare-Cu6RA9m9.js";import"./GlobalMenuButton-_oCUabds.js";import"./PadlockLocked-CvUaHTOs.js";import"./ButtonLabel-D_0Lmxqy.js";import"./ButtonIcon-DGwnrj7G.js";import"./ArrowUndo-DCkDtO0Z.js";import"./AccountMenu-BVv7F0Yo.js";import"./Globe-Bp6G8iI8.js";import"./PadlockLockedFill-CKYmUPSl.js";import"./Buildings2-BCw0Kg2z.js";import"./InboxFill-ZOk75VQL.js";import"./MenuGrid-B8ciIJjM.js";import"./PersonCircle-BJhFQVEb.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-Bq9PXl-2.js";import"./Archive-BZkpamMr.js";import"./Trash-CAta8Rpy.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
