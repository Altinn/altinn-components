import{j as a}from"./iframe-BmFIVBn_.js";import{h as d}from"./header-B_a6SjHF.js";import{H as o}from"./LocaleSwitcher-Dh4nP8eN.js";import{u as t}from"./useSearchbar-DD_1Cprw.js";import{m as u}from"./globalMenu-DAeZ48lp.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-Bf-30zWK.js";import"./useAccountMenu-BonKHbVL.js";import"./useAccountsToolbar-BQCyNlKc.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-DTduOV9l.js";import"./useId-ClegSKnE.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DRH7pKvW.js";import"./index-3BUTcXKg.js";import"./DigdirLogomark-D3-1m7Uz.js";import"./Badge-DoiHwmxA.js";import"./SearchbarField-DW-BwLGs.js";import"./MagnifyingGlass-B0C_9vni.js";import"./XMark-DPeWQ31a.js";import"./Icon-zZDqlwOf.js";import"./Skeleton-DRn19mA6.js";import"./AutocompleteItem-DYqbhP49.js";import"./MenuItem-BvPBRlig.js";import"./ItemMedia-CCYQNyqL.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Checkmark-DWNi5SDl.js";import"./Heading-D2Zb4ZMb.js";import"./useHighlightedText-Dq-XqtYP.js";import"./ItemControls-B2xjI1HN.js";import"./ChevronRight-DcRWf4tm.js";import"./QueryLabel-DAp7MuQj.js";import"./Plus-DVwzyLY6.js";import"./useMenu-BRAeQdeQ.js";import"./MenuListItem-INuSyNfv.js";import"./MenuListHeading-D4ZyNWhk.js";import"./DropdownBase-BLNkKCkf.js";import"./useClickOutside-DEjsvD2U.js";import"./SearchField-BQQnPaDG.js";import"./FieldBase-Cx6yKeh2.js";import"./Typography-CMiy0gec.js";import"./Label-D7uBca_a.js";import"./index-32OlLxJ9.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./InformationSquare-Ct2wAfNF.js";import"./GlobalMenuButton-CpiwPikz.js";import"./PadlockLocked-C26Pv4Gt.js";import"./ButtonLabel-JoMzXma_.js";import"./ButtonIcon-BhDAFAtm.js";import"./ArrowUndo-Bbp1RnaE.js";import"./AccountMenu-DkJxUI7S.js";import"./Globe-CS0vj-xA.js";import"./PadlockLockedFill-5oiKD1pI.js";import"./Buildings2-Bp7D6pSC.js";import"./InboxFill-ClSwJPih.js";import"./MenuGrid-Cjzb3ZQ-.js";import"./PersonCircle-C0o0J3NY.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-Bo5gTdE7.js";import"./Archive-kTBarS_a.js";import"./Trash-eorIYi8J.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
