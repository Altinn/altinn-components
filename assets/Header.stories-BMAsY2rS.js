import{j as a}from"./iframe-DDirkHus.js";import{h as d}from"./header-DUCsXOZC.js";import{H as o}from"./LocaleSwitcher-BkB8sfLE.js";import{u as t}from"./useSearchbar-B5ruRTg3.js";import{m as u}from"./globalMenu-DWKkIU6F.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-Dhc60s5a.js";import"./useAccountMenu-mrcdllKs.js";import"./useAccountsToolbar-DyfwSo6S.js";import"./getAccount-nlIneB7c.js";import"./HeartFill--oR2ZcTj.js";import"./useId-CVUrh2ea.js";import"./Button-CdMyOsNo.js";import"./button-CnVt3gpj.js";import"./use-merge-refs-CIAaUVpb.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-Byt4gJYs.js";import"./index-B2YDfdyU.js";import"./DigdirLogomark-CTqr-e4H.js";import"./Badge-BMZjltw3.js";import"./Tooltip-Di80zHO_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-jvVLPlxQ.js";import"./MagnifyingGlass-BGbR81wS.js";import"./XMark-DldqIUES.js";import"./Icon-Cv1R39O2.js";import"./Skeleton-0VOrezcL.js";import"./AutocompleteItem-CbJGLhHb.js";import"./MenuItem-BsaYehiV.js";import"./ItemMedia-ZkVlWcbo.js";import"./Avatar-DMl0Fglw.js";import"./AvatarGroup-CxNYw_3L.js";import"./Checkmark-MQqJd3cN.js";import"./Heading-s9P5sHvn.js";import"./useHighlightedText-CWfqHJQe.js";import"./ItemControls-CqR56LSR.js";import"./ChevronRight-BUOZMhwy.js";import"./QueryLabel-CUifN9Z4.js";import"./Plus-DXvjiSe3.js";import"./useMenu-DLxXpcV8.js";import"./MenuListItem-DoS1mSfo.js";import"./MenuListHeading-7XRfXaU1.js";import"./DropdownBase-BFhqzAXp.js";import"./useClickOutside-BxYZb6cF.js";import"./SearchField-CByF2bQh.js";import"./FieldBase-BNjKJDB0.js";import"./Typography-Do8CAd45.js";import"./Label-9QWpQ8Bw.js";import"./index-F2gU6D0V.js";import"./Input-C9yDHhzX.js";import"./input-CQTkCXgP.js";import"./InformationSquare-D3Ojtweu.js";import"./GlobalMenuButton-Ctj_6jAX.js";import"./PadlockLocked-Dmfb7QyW.js";import"./ButtonLabel-D_WD8Z8N.js";import"./ButtonIcon-Cvt6zSue.js";import"./ArrowUndo-cRffdIA3.js";import"./AccountMenu-57MaxCEA.js";import"./Globe-qiPXxajI.js";import"./PadlockLockedFill-fRPh4t0D.js";import"./Buildings2-CD5n5Krw.js";import"./InboxFill-jQHA7TdX.js";import"./MenuGrid-CJxX1hhk.js";import"./PersonCircle-D3LMTidX.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-DCuIhvEj.js";import"./Archive-CFZVdoBU.js";import"./Trash-D38buOH3.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
}`,...c.parameters?.docs?.source}}};const Br=["Login","CurrentAccount","CompanyAccount","SubcompanyAccount","MobileMenu","WithCustomBadge"];export{n as CompanyAccount,p as CurrentAccount,s as Login,i as MobileMenu,m as SubcompanyAccount,c as WithCustomBadge,Br as __namedExportsOrder,Cr as default};
