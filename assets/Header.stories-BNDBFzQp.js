import{j as a}from"./iframe-DxxW_Hah.js";import{h as d}from"./header-B7blnaCt.js";import{H as o}from"./LocaleSwitcher-DrfHig0J.js";import{u as t}from"./useSearchbar-CljxkbAf.js";import{m as u}from"./globalMenu-CHUXPI0D.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-B64NNVhT.js";import"./useAccountMenu-C14uSFDv.js";import"./useAccountsToolbar-DfXqcE7r.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-B6hLMDo_.js";import"./useId-CckRU7I8.js";import"./Button-CcwbSiKg.js";import"./button-BBYE_PPH.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-B3tDsVL2.js";import"./index-pOAXHZ6n.js";import"./DigdirLogomark-LS5uJ7R1.js";import"./Badge-CQ9EBUDZ.js";import"./SearchbarField-65WoTiJp.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./XMark-ChXBbXGN.js";import"./Icon-Cf03fdWw.js";import"./Skeleton-DiRARuJ9.js";import"./AutocompleteItem-DUT1Lmut.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./Avatar--rA6gsID.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Checkmark-pZi8btQa.js";import"./Heading-Bejow2zA.js";import"./useHighlightedText-C9OLcmcP.js";import"./ChevronRight-CqOTbusb.js";import"./QueryLabel-DBDpIjTe.js";import"./Plus-CScsMow9.js";import"./useMenu-DMxEdeKU.js";import"./MenuListItem-BWh93a_i.js";import"./MenuListHeading-CIz6aOLR.js";import"./DropdownBase-BSISdOOS.js";import"./useClickOutside-RChdGwyC.js";import"./SearchField-ptc2QeHn.js";import"./FieldBase-ttSv04zw.js";import"./Typography-CfTPPq_a.js";import"./Label-YFmv6AXl.js";import"./index-D2WP85Bl.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./InformationSquare-CuO8i3VE.js";import"./GlobalMenuButton-D3E4cvQH.js";import"./PadlockLocked-DJwCVjuj.js";import"./ButtonLabel-BEhiscYg.js";import"./ButtonIcon-Bv6eEJQ5.js";import"./ArrowUndo-CDTBG5mK.js";import"./AccountMenu-BAmeImH5.js";import"./Globe-D2wyTAMu.js";import"./PadlockLockedFill-DjhGUlrA.js";import"./Buildings2-DqbPfXdH.js";import"./InboxFill-CZgZlZUi.js";import"./MenuGrid-XEpy1Ykj.js";import"./PersonCircle-DLHnaxgO.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-B8Ru0JCx.js";import"./Archive-DnNxZuyO.js";import"./Trash-CiL8T8GI.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
