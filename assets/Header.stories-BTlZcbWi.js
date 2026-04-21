import{j as a}from"./iframe-BNDruhPA.js";import{h as d}from"./header-B-zCr0Lr.js";import{H as o}from"./LocaleSwitcher-XvGjj_qI.js";import{u as t}from"./useSearchbar-BmsH9U3D.js";import{m as u}from"./globalMenu-Cyd6DvA6.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-CX_3bC68.js";import"./useAccountMenu-CGLd_608.js";import"./useAccountsToolbar-Bke35YwJ.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-Dtg6NhVq.js";import"./useId-28rL4Hsl.js";import"./Button-CaDKAluY.js";import"./button-Bu4lXR2T.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-qJ8b0dW5.js";import"./index-JM42q3xD.js";import"./DigdirLogomark-BiqZgEZs.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-DETpAOo-.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./XMark-vbUnhqfT.js";import"./Icon-Ch0vKaKK.js";import"./Skeleton-3vFplc_z.js";import"./AutocompleteItem-Cw3TIONE.js";import"./MenuItem-Zvnz-i4w.js";import"./ItemMedia-C5U6F78e.js";import"./Avatar-Bc7K3VQ6.js";import"./AvatarGroup-CBYJn5rG.js";import"./Checkmark-BnLjHgWq.js";import"./Heading-C1Pb_LrU.js";import"./useHighlightedText-Bss46XCz.js";import"./ItemControls-nx23Lp4C.js";import"./ChevronRight-Bcu8s-U3.js";import"./QueryLabel-l6CQGUJC.js";import"./Plus-BN_WRMVc.js";import"./useMenu-BrVLonhI.js";import"./MenuListItem-DJZ7kLfZ.js";import"./MenuListHeading-CJCU8c8j.js";import"./DropdownBase-B2BHJydV.js";import"./useClickOutside-Cy7tr48u.js";import"./SearchField-BS2BtTJs.js";import"./FieldBase-CqddQ4KB.js";import"./Typography-0VzQ_bGw.js";import"./Label-DEPud0Ho.js";import"./index-BuvBvGLs.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./InformationSquare-BrTKrkbD.js";import"./GlobalMenuButton-g3l-WiPf.js";import"./PadlockLocked-oQs_26Wi.js";import"./ButtonLabel-B0odgBfB.js";import"./ButtonIcon-DlPFQqJE.js";import"./ArrowUndo-TNM9HjKV.js";import"./AccountMenu-Bya8haLy.js";import"./Globe-puhqCle3.js";import"./PadlockLockedFill-fbKrvijm.js";import"./Buildings2-BreMs8ue.js";import"./InboxFill-fA1MI7fW.js";import"./MenuGrid-BXQJX2XF.js";import"./PersonCircle-DVq9OI9o.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-DzaXZGJ9.js";import"./Archive-2uQCDMcb.js";import"./Trash-dW9GgNZJ.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
