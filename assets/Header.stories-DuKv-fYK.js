import{j as a}from"./iframe-CK12xbO6.js";import{h as d}from"./header-Sp5YE0go.js";import{H as o}from"./LocaleSwitcher-oPRnhjsx.js";import{u as t}from"./useSearchbar-DOFcWQhw.js";import{m as u}from"./globalMenu-BF138WxC.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-Cs8715pu.js";import"./useAccountMenu-B16QASVG.js";import"./useAccountsToolbar-BYBXXD7x.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-zBQHnjrG.js";import"./useId-CIOYGEMY.js";import"./Button-DTrhNbku.js";import"./button-D6lkouap.js";import"./use-merge-refs-D5gu3XYQ.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-qZgXVmY_.js";import"./index-DS2SSX1f.js";import"./DigdirLogomark-Cr-qodro.js";import"./Badge-BBKRgbs4.js";import"./Tooltip-BdqmcG89.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-BoclOziJ.js";import"./MagnifyingGlass-qxU1ofSJ.js";import"./XMark-MadrIoK8.js";import"./Icon-BHUPQGzt.js";import"./Skeleton-CLQkeaUO.js";import"./AutocompleteItem-E3POKf0G.js";import"./MenuItem-DjmA2GJO.js";import"./ItemMedia-XHYq4GSc.js";import"./Avatar-CjYl4qzD.js";import"./AvatarGroup-DIAmYFyU.js";import"./Checkmark-DQBecNO6.js";import"./Heading-Drr-of_9.js";import"./useHighlightedText-DdOMnBlO.js";import"./ItemControls-B1M2j2tm.js";import"./ChevronRight-DxL2oOG5.js";import"./QueryLabel-VteGIvYB.js";import"./Plus-LAYoRaA7.js";import"./useMenu-BM6Zh5Qq.js";import"./MenuListItem-B_ethkwV.js";import"./MenuListHeading-CCkIOc1e.js";import"./DropdownBase-B20GPr-R.js";import"./useClickOutside-B_ap6-94.js";import"./SearchField-CfLtnFna.js";import"./FieldBase-NrhOHdDA.js";import"./Typography-PIwVlbiP.js";import"./Label-CQOYgwqz.js";import"./index-BCgvi17I.js";import"./Input-CN33OjmR.js";import"./input-CdhXBgWK.js";import"./InformationSquare-C5QsI1Pb.js";import"./GlobalMenuButton-BXZ9cU3d.js";import"./PadlockLocked-Bxl9Tu_e.js";import"./ButtonLabel-DzANo97U.js";import"./ButtonIcon-CM44tsrg.js";import"./ArrowUndo-DOBtYJAt.js";import"./AccountMenu-DGBd5fhe.js";import"./Globe-oe0ciiSB.js";import"./PadlockLockedFill-mmgi_nLa.js";import"./Buildings2-D_uQXBhZ.js";import"./InboxFill-BI967Cf7.js";import"./MenuGrid-CeLJXZXs.js";import"./PersonCircle-CL0sX2Bw.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-Ccz7tqq2.js";import"./Archive-tl_Nekk2.js";import"./Trash-DK6LQCTJ.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
