import{j as a}from"./iframe-CfpleAaJ.js";import{h as d}from"./header-BZxPi5AI.js";import{H as o}from"./LocaleSwitcher-BGWb1ikz.js";import{u as t}from"./useSearchbar-Deuyyb_-.js";import{m as u}from"./globalMenu-XHPWPcDc.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-By0WHoQU.js";import"./useAccountMenu-C-I3dxhF.js";import"./useAccountsToolbar-D2q6MUHo.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-CVYiNdJZ.js";import"./useId-CRfl8v3D.js";import"./Button-DKJP6EaO.js";import"./button-bjClnooE.js";import"./use-merge-refs-0CqQhLRb.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-Cz6jl_Dv.js";import"./index-C-ZlSrx2.js";import"./DigdirLogomark-CmEhK8Ul.js";import"./Badge-BZbseZdr.js";import"./SearchbarField-CoV9GIfb.js";import"./MagnifyingGlass-BxOwsnNq.js";import"./XMark-Mr05NtnF.js";import"./Icon-DFklvQ48.js";import"./Skeleton-mkQz_xZ6.js";import"./AutocompleteItem-Dt_cijtX.js";import"./MenuItem-BvkuTBxq.js";import"./ItemMedia-BjhAIHdo.js";import"./Avatar-BBkC-qEC.js";import"./AvatarGroup-vSwCjNL5.js";import"./Checkmark-CwtLsQnH.js";import"./Heading-SalYmhoh.js";import"./useHighlightedText-Cf92T70c.js";import"./ChevronRight-F6vNJ-SN.js";import"./QueryLabel-CqYLOKtC.js";import"./Plus-Bt3Z18iu.js";import"./useMenu-DmjfRwxC.js";import"./MenuListItem-Brl922Zx.js";import"./MenuListHeading-BxaazMkW.js";import"./DropdownBase-ZJ1_uQd-.js";import"./useClickOutside-540iRY_5.js";import"./SearchField-DaxLmgu-.js";import"./FieldBase-CjTWVBCf.js";import"./Typography-KZreLO9a.js";import"./Label-BNnaJGt0.js";import"./index-CyGYnAy8.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./InformationSquare-H_9f907d.js";import"./GlobalMenuButton-krHf6JZO.js";import"./PadlockLocked-DXpwFlf5.js";import"./ButtonLabel-Dr2RfoaG.js";import"./ButtonIcon-C5_cwnJG.js";import"./ArrowUndo-DqxrSKWI.js";import"./AccountMenu-DvrZYTKA.js";import"./Globe-BBA1moor.js";import"./PadlockLockedFill-BVrWM9G0.js";import"./Buildings2-dioGEkgK.js";import"./InboxFill-BPQ9Huup.js";import"./MenuGrid-ClMY4bMf.js";import"./PersonCircle-Cm8x5lDG.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-FXH6tBKj.js";import"./Archive-DQXPE0eG.js";import"./Trash-CK0t-M2f.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
