import{j as a}from"./iframe-B56t8i7v.js";import{h as d}from"./header-BJRQXRTp.js";import{H as o}from"./LocaleSwitcher-4omjkH2E.js";import{u as t}from"./useSearchbar-DnKusciC.js";import{m as u}from"./globalMenu-BJLTogqL.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-BlXJktaZ.js";import"./useAccountMenu-66yDReJd.js";import"./useAccountsToolbar-BC4dVOr7.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-yVQ7LC3O.js";import"./useId-Ce_44NzT.js";import"./Button-x4ugPYkx.js";import"./button-BSGP1CSM.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-CFGjVeHW.js";import"./index-CHgNdXFp.js";import"./DigdirLogomark-BaJ-0QN5.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-rAjucfX_.js";import"./MagnifyingGlass-U17pnqdh.js";import"./XMark-CQR84vCO.js";import"./Icon-CgN9F-ql.js";import"./Skeleton-Cer98cLN.js";import"./AutocompleteItem-D-FpMDwU.js";import"./MenuItem-CtKw3GMz.js";import"./ItemMedia-DJxakqLL.js";import"./Avatar-_1995Z8x.js";import"./AvatarGroup-kqIJtB4O.js";import"./Checkmark-cFLQXWmW.js";import"./Heading-B0k14T1s.js";import"./useHighlightedText-YMvuFtwb.js";import"./ItemControls-DurpuKFn.js";import"./ChevronRight-VYKVaZtU.js";import"./QueryLabel-nVdg74zq.js";import"./Plus-DP2GFhc-.js";import"./useMenu-Bz8Gr0jh.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuListHeading-B46vfCnX.js";import"./DropdownBase-C18X2TO4.js";import"./useClickOutside-D5Pq4X4m.js";import"./SearchField-BtQfQfgA.js";import"./FieldBase-BkGCBc8B.js";import"./Typography-C36VcWyw.js";import"./Label-Bx5THtMF.js";import"./index-pNH6Tvi1.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./InformationSquare-TMwz5OzD.js";import"./GlobalMenuButton-DQfy5APG.js";import"./PadlockLocked-BohZXiRX.js";import"./ButtonLabel-B2zAlRRB.js";import"./ButtonIcon-RQaEMoLk.js";import"./ArrowUndo-BZ7sluk3.js";import"./AccountMenu-BF1zYUjX.js";import"./Globe-CfQppjOD.js";import"./PadlockLockedFill-b2QY2ao5.js";import"./Buildings2-Cmz8iX3m.js";import"./InboxFill-CKfO2UBM.js";import"./MenuGrid-DOIPFHmi.js";import"./PersonCircle-DvEbo7K4.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-DhU-ifQv.js";import"./Archive-C86xORiC.js";import"./Trash-CCj34_zQ.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
