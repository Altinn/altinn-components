import{j as a}from"./iframe-DolAyTrH.js";import{h as d}from"./header-CnfiTt7R.js";import{H as o}from"./LocaleSwitcher-DfhReAJ6.js";import{u as t}from"./useSearchbar-Brx0Q2AQ.js";import{m as u}from"./globalMenu-DY8xVh7L.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-8P-WdJse.js";import"./useAccountMenu-CEqvZMOt.js";import"./useAccountsToolbar-CLVUcwRy.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-CbEiIFG7.js";import"./useId-CHjpN4lF.js";import"./Button-BnKV4VN-.js";import"./button-DvTcN5eG.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-D-mQaJBC.js";import"./index-BGgdxP5s.js";import"./DigdirLogomark-Cvm9wTuX.js";import"./Badge-XZ4zcUXX.js";import"./SearchbarField-B-N7Dj6Y.js";import"./MagnifyingGlass-D6ZngSzY.js";import"./XMark-DTdVjjyM.js";import"./Icon-DyTdluPS.js";import"./Skeleton-CgJZAB6S.js";import"./AutocompleteItem-cQfQ0dve.js";import"./MenuItem-BC8KVIYh.js";import"./ItemMedia-feu0z7mp.js";import"./Avatar-koXMFN1u.js";import"./AvatarGroup-B7A0z_e3.js";import"./Checkmark-CMV0hymD.js";import"./Heading-ytdfVfHq.js";import"./useHighlightedText-DjzGplEp.js";import"./ItemControls-B_Hdv8nx.js";import"./ChevronRight-Duke-dAu.js";import"./QueryLabel-C-7eU317.js";import"./Plus-J7cjNzSf.js";import"./useMenu-BNSqPiQU.js";import"./MenuListItem-V7gZGQwh.js";import"./MenuListHeading-ktY8lirO.js";import"./DropdownBase-aUL7f3Ms.js";import"./useClickOutside-BBRnn-L_.js";import"./SearchField-O-g-s0at.js";import"./FieldBase-Cd7L_EtW.js";import"./Typography-BxahTxrH.js";import"./Label-B4hULeup.js";import"./index-Bcer_oBx.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./InformationSquare-B_X3Ih6E.js";import"./GlobalMenuButton-fDfC7Urt.js";import"./PadlockLocked-BB5yMzM8.js";import"./ButtonLabel-DHuLovfa.js";import"./ButtonIcon-BQckLi1i.js";import"./ArrowUndo-C7YcKz4U.js";import"./AccountMenu-DZ4zTclY.js";import"./Globe-Bd3DNFDf.js";import"./PadlockLockedFill-cbk62fQu.js";import"./Buildings2-B33KlsSD.js";import"./InboxFill--d9QFoT2.js";import"./MenuGrid-CaWxxZsf.js";import"./PersonCircle-BIivelNm.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-BO8iM9nq.js";import"./Archive-6i68OY6K.js";import"./Trash-BtLK7IU-.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
