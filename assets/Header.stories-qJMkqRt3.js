import{j as a}from"./iframe-qDHSBZ_X.js";import{h as d}from"./header-DcIuuRvs.js";import{H as o}from"./LocaleSwitcher-CQreO82V.js";import{u as t}from"./useSearchbar-BIGCidtO.js";import{m as u}from"./globalMenu-DqtPhsQy.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-CTv2FvCh.js";import"./useAccountMenu-BWkVIsm5.js";import"./useAccountsToolbar-Bk9fVywH.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-9bAGTslX.js";import"./useId-DLE_nI5l.js";import"./Button-DJMfIG2l.js";import"./button-CfQ7EAt1.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-BFZhxv40.js";import"./index-DTh2bawh.js";import"./DigdirLogomark-BTHV4ner.js";import"./Badge-CmtcZ1do.js";import"./SearchbarField-LP6FBo7g.js";import"./MagnifyingGlass-52kli1F6.js";import"./XMark-D8iHP3Cp.js";import"./Icon-BDVkMuHy.js";import"./Skeleton-CJ3n2_6V.js";import"./AutocompleteItem-BQeM350o.js";import"./MenuItem-CYIZHSHo.js";import"./ItemMedia-p3tZByS2.js";import"./Avatar-BNcU10On.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Checkmark-BOxDKZpX.js";import"./Heading-D2BacHeJ.js";import"./useHighlightedText-D75SWcvd.js";import"./ItemControls-Bd_Ry2Op.js";import"./ChevronRight-Dusr5JiS.js";import"./QueryLabel-0k68MKss.js";import"./Plus-BXcVwr4C.js";import"./useMenu-5iviLK-9.js";import"./MenuListItem-BPMBfOBa.js";import"./MenuListHeading-CFSESgmr.js";import"./DropdownBase-BqSE5S-1.js";import"./useClickOutside-CAQh4xNR.js";import"./SearchField-owOVnt34.js";import"./FieldBase-36tTBvzs.js";import"./Typography-DhQz7tKb.js";import"./Label-UpgatIiv.js";import"./index-C32uHHVZ.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./InformationSquare-ClYcp41K.js";import"./GlobalMenuButton-ClHsVzRN.js";import"./PadlockLocked-v0NVxIzQ.js";import"./ButtonLabel-By2Cfxp9.js";import"./ButtonIcon-RpuQ8rbs.js";import"./ArrowUndo-CMxvcs3T.js";import"./AccountMenu-BPVsDnJ8.js";import"./Globe--kIPlUca.js";import"./PadlockLockedFill-BddiA20c.js";import"./Buildings2-C_FVhRBN.js";import"./InboxFill-B6eVCR7Z.js";import"./MenuGrid-3DWra2SS.js";import"./PersonCircle-C3nIC3U_.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-DqrqTlox.js";import"./Archive-C71dF3LI.js";import"./Trash-CJ5RcE6N.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
