import{j as a}from"./iframe-Bka3lqwZ.js";import{h as d}from"./header-BMS3ewG4.js";import{H as o}from"./LocaleSwitcher-BBAKVJBF.js";import{u as t}from"./useSearchbar-BEN_psFL.js";import{m as u}from"./globalMenu-aCVArAXm.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-B5UK-lQF.js";import"./useAccountMenu-CO7jnFcX.js";import"./useAccountsToolbar-DQ7odwA-.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-C3A-9InU.js";import"./useId-BOUKUp4S.js";import"./Button-DIVYOCsY.js";import"./button-CqWrgnGb.js";import"./use-merge-refs-CTw0OEaY.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-CD3cIJ_t.js";import"./index-97QH58ax.js";import"./DigdirLogomark-D7HSE_dM.js";import"./Badge-Dr-ny6rj.js";import"./SearchbarField-qiWMG-1y.js";import"./MagnifyingGlass-ohRS00MN.js";import"./XMark-BopKFElT.js";import"./Icon-DoXRGO_6.js";import"./Skeleton-ECUY2hPc.js";import"./AutocompleteItem-C3wMsO3s.js";import"./MenuItem-CQZjBmzk.js";import"./ItemMedia-Ca3m8l5m.js";import"./Avatar-DUWR3kRV.js";import"./AvatarGroup-mAK5Ma76.js";import"./Checkmark-Bf4nZE-q.js";import"./Heading-BxCaPg4n.js";import"./useHighlightedText-DGjnrdw2.js";import"./ItemControls-abhSx9yX.js";import"./ChevronRight-1C-HJkAE.js";import"./QueryLabel-B9pbQKbm.js";import"./Plus-Cr5OOVFj.js";import"./useMenu-Cu8ej4cj.js";import"./MenuListItem-DQuvdYRk.js";import"./MenuListHeading-g29dlFn5.js";import"./DropdownBase-kw0JlleQ.js";import"./useClickOutside-afXVzWjz.js";import"./SearchField-CSZgV0pa.js";import"./FieldBase-BlSXl2oz.js";import"./Typography-CMwGEMpO.js";import"./Label-Bo_SdTne.js";import"./index-CQEQ6FSB.js";import"./Input-tSTkuC7Q.js";import"./input-Dit64xtC.js";import"./InformationSquare-BNmERE6I.js";import"./GlobalMenuButton-Bxl24uIP.js";import"./PadlockLocked-DOz1AsHg.js";import"./ButtonLabel-DqK0tKkl.js";import"./ButtonIcon-olOKGEVR.js";import"./ArrowUndo-DmOTw-PR.js";import"./AccountMenu-Gq3XIbMp.js";import"./Globe-BjBVeJDm.js";import"./PadlockLockedFill-BNbCTt2P.js";import"./Buildings2-vS-shoMU.js";import"./InboxFill-DBW460ZQ.js";import"./MenuGrid-BdrFU0Ow.js";import"./PersonCircle-ZM-KEEIy.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-B-uB1Rkc.js";import"./Archive-CG8d1DTP.js";import"./Trash-CKkWVRjk.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
