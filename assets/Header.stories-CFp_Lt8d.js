import{j as a}from"./iframe-B1AqnzaQ.js";import{h as d}from"./header-BUScdX-T.js";import{H as o}from"./LocaleSwitcher-COrP_HJv.js";import{u as t}from"./useSearchbar-5mJdNzZb.js";import{m as u}from"./globalMenu-CJJB8Q39.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-BNDjzm9t.js";import"./useAccountMenu-CB4ETM4w.js";import"./useAccountsToolbar-CnEYgc0z.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-DxrYEi1K.js";import"./useId-D3sFZbtB.js";import"./Button-7DVHhPF2.js";import"./button-HgPz3r79.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DKxFqwuA.js";import"./index-Ddi2Dmvi.js";import"./DigdirLogomark-MLuz8EdC.js";import"./Badge-DUhzLQsC.js";import"./SearchbarField-Crisi6Aq.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./XMark-COJVLPGF.js";import"./Icon-68Gi_xA8.js";import"./Skeleton-6Posg2tf.js";import"./AutocompleteItem-CCXjG5Ba.js";import"./MenuItem-DJwKVNs9.js";import"./ItemMedia-D13Mes1V.js";import"./Avatar-Dhw0Atsj.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Checkmark-Ci7lq5dQ.js";import"./Heading-Rbp_06UC.js";import"./useHighlightedText-D6JE0bc4.js";import"./ChevronRight-BOPTtlba.js";import"./QueryLabel-Cv9IsP_R.js";import"./Plus-DnGMnLWk.js";import"./useMenu-5Lc1jfY6.js";import"./MenuListItem-D8LYIepd.js";import"./MenuListHeading-DjQ5LdsQ.js";import"./DropdownBase-D9RV5RWU.js";import"./useClickOutside-CJx0BeZh.js";import"./SearchField-BEy1JMqM.js";import"./FieldBase-BfQZNQHG.js";import"./Typography-lvuy6SF3.js";import"./Label-CufZoml2.js";import"./index-DvbpjXY1.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./InformationSquare-DK3EJIq8.js";import"./GlobalMenuButton-CoiBpDm5.js";import"./PadlockLocked-CobcO1qj.js";import"./ButtonLabel-CKRky11D.js";import"./ButtonIcon-B4FLSCwL.js";import"./ArrowUndo-Co9BHkhM.js";import"./AccountMenu-Cm8YHXc8.js";import"./Globe-Ba6M6rzW.js";import"./PadlockLockedFill-wyntw034.js";import"./Buildings2-Dn31Fin1.js";import"./InboxFill-88oeaOtY.js";import"./MenuGrid-tIpDrGJL.js";import"./PersonCircle-BjQ8-HdB.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-PCr6gbaY.js";import"./Archive-BQ-4sTsA.js";import"./Trash-DvhW7kU1.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
