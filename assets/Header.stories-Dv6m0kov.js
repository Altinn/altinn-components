import{j as a}from"./iframe-BJEbXdzo.js";import{h as d}from"./header-Bk2I8k0W.js";import{H as o}from"./LocaleSwitcher-DyUL1amM.js";import{u as t}from"./useSearchbar-FbGTqyKK.js";import{m as u}from"./globalMenu-DSeJykYj.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-D5J2raE1.js";import"./useAccountMenu-D1Be11yk.js";import"./useAccountsToolbar-enxMbprp.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-4EROIPSJ.js";import"./useId-DgrNWXh_.js";import"./Button-DNsjk1zC.js";import"./button-3a31VMtF.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DRdiko2E.js";import"./index-ChGHkNNv.js";import"./DigdirLogomark-CLtmb5yz.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-fEPaYotL.js";import"./MagnifyingGlass-Dp61EhHj.js";import"./XMark-sTHnj54s.js";import"./Icon-msEkDcFf.js";import"./Skeleton-DWcIZ1wH.js";import"./AutocompleteItem-BwoKZe1C.js";import"./MenuItem-CIe0tXLI.js";import"./ItemMedia-CiNZWpX-.js";import"./Avatar-CcIuhVy2.js";import"./AvatarGroup-Cpo75nCB.js";import"./Checkmark-DLPFtMmB.js";import"./Heading-1LBL0JVO.js";import"./useHighlightedText-Chj_Mw3b.js";import"./ItemControls-CAq51EMf.js";import"./ChevronRight-CoSPx3Kv.js";import"./QueryLabel-EpxeOwi6.js";import"./Plus-DGG8hdRK.js";import"./useMenu-9_PPaP-8.js";import"./MenuListItem-U3U1VVBg.js";import"./MenuListHeading-BxpAf7GB.js";import"./DropdownBase-BYq0xkEJ.js";import"./useClickOutside-B6rTSfnw.js";import"./SearchField-C43D0Bvg.js";import"./FieldBase-s2kWEUm7.js";import"./Typography-D85R78i7.js";import"./Label-DQQXrne0.js";import"./index-THETCITG.js";import"./Input-BI0TJMod.js";import"./input-CnbiDkgl.js";import"./InformationSquare-e9K9-Rpn.js";import"./GlobalMenuButton-BHTFYuDH.js";import"./PadlockLocked-WeDnmgJF.js";import"./ButtonLabel-BDM26i0_.js";import"./ButtonIcon-HUw-G-oR.js";import"./ArrowUndo-DaYXADnN.js";import"./AccountMenu-Iz0jaDTX.js";import"./Globe-BlFk6HBa.js";import"./PadlockLockedFill-D7xVoENA.js";import"./Buildings2-DfLVYGi2.js";import"./InboxFill-Mazck519.js";import"./MenuGrid-PacNmwSn.js";import"./PersonCircle-Cul-mrQE.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-DwjqcEwv.js";import"./Archive-dgyTBxhE.js";import"./Trash-C9Nxl2VC.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
