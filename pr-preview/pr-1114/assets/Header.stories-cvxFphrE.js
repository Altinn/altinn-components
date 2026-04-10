import{j as a}from"./iframe-bdb8MxAl.js";import{h as d}from"./header-8EeHt4ta.js";import{H as o}from"./LocaleSwitcher-Q8_x-qLN.js";import{u as t}from"./useSearchbar-IdjAW-Gd.js";import{m as u}from"./globalMenu-DBD2J56Q.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-Cb5-MDTK.js";import"./useAccountMenu-D9PFYEmS.js";import"./useAccountsToolbar-DMW0Q_Nw.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-BSyi9w23.js";import"./useId-m2lwd_Ct.js";import"./Button-CmmCg_X2.js";import"./button-riuqcLff.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DMUmR05m.js";import"./index-p3wA3m8m.js";import"./DigdirLogomark-BygySONI.js";import"./Badge-CZZ-T3gy.js";import"./SearchbarField-CWUc0lsQ.js";import"./MagnifyingGlass-CUUYZIQ1.js";import"./XMark-ml8n1JcF.js";import"./Icon-DDIx0qrc.js";import"./Skeleton-BMmeChMq.js";import"./AutocompleteItem-CzmyM9Lt.js";import"./MenuItem-CkSmk6Ko.js";import"./ItemMedia-Bzsndyr0.js";import"./Avatar-Di5f2hN1.js";import"./AvatarGroup-DeyVKu-1.js";import"./Checkmark-YAJv3o3m.js";import"./Heading-BV-bgYII.js";import"./useHighlightedText-BZip2xbp.js";import"./ItemControls-CoqYqtfq.js";import"./ChevronRight-Cnln8IKV.js";import"./QueryLabel-CWbhe0_b.js";import"./Plus-B7BchYDv.js";import"./useMenu-Dc6Nz6rI.js";import"./MenuListItem-CqjGn-MF.js";import"./MenuListHeading-DgV7uPAe.js";import"./DropdownBase-CBSDfrb-.js";import"./useClickOutside-DjQk6OJX.js";import"./SearchField-Q9bTEqZH.js";import"./FieldBase-DvRhg6xr.js";import"./Typography-BHyeW1q-.js";import"./Label-DBSC-MMD.js";import"./index-Bm_5QTlm.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./InformationSquare-nixk64HR.js";import"./GlobalMenuButton-n97YraGw.js";import"./PadlockLocked-DVxlbziO.js";import"./ButtonLabel-CEDslqSZ.js";import"./ButtonIcon-DpQ6wq1u.js";import"./ArrowUndo-IV-u59mp.js";import"./AccountMenu-DtpSdk3c.js";import"./Globe-CMrbWTkv.js";import"./PadlockLockedFill-BwVfO0bK.js";import"./Buildings2-B1r9EdpP.js";import"./InboxFill-CPonLW7E.js";import"./MenuGrid-Cui8KPfA.js";import"./PersonCircle-m8HXXjPs.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-CSyhbW3d.js";import"./Archive-DDiFiqWF.js";import"./Trash-D-U6L-Nc.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
