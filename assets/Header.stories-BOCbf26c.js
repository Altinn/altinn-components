import{j as a}from"./iframe-Bs6hWG43.js";import{h as d}from"./header-7C3KYfH8.js";import{H as o}from"./LocaleSwitcher-Cg9nw2RQ.js";import{u as t}from"./useSearchbar-Cjew629M.js";import{m as u}from"./globalMenu-CFB8jQ9A.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-OZYAWDhw.js";import"./useAccountMenu-BGeaA_Ts.js";import"./useAccountsToolbar--B4K0ilU.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-CbmnLuuf.js";import"./useId-eW1Sa_eP.js";import"./Button-eHvnmE12.js";import"./button-BtRKSTW7.js";import"./use-merge-refs-CXrn4uAk.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-DbymL6Pk.js";import"./index-DbNSDn3W.js";import"./DigdirLogomark-D4D8B7sJ.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./SearchbarField-C4sSsRoV.js";import"./MagnifyingGlass-ByFYxaCQ.js";import"./XMark-Cx14Anho.js";import"./Icon-DjH00Hl5.js";import"./Skeleton-7NyHq6Da.js";import"./AutocompleteItem-eGa7rilW.js";import"./MenuItem-BL3nnmC3.js";import"./ItemMedia-B6-8h9P0.js";import"./Avatar-BN7VNN79.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Checkmark-YSQh9b-J.js";import"./Heading-C3DAZ3La.js";import"./useHighlightedText-ByR3-iok.js";import"./ItemControls-CsoavSOP.js";import"./ChevronRight-Xe9lB9nu.js";import"./QueryLabel-CWSkLd8H.js";import"./Plus-D6ext0KH.js";import"./useMenu-Be0b91uO.js";import"./MenuListItem-CaCKNFL_.js";import"./MenuListHeading-DBtCNSz-.js";import"./DropdownBase-C2tKa_m5.js";import"./useClickOutside-ByRbMqF_.js";import"./SearchField-CTJqYruH.js";import"./FieldBase-BwWmF8XK.js";import"./Typography-4Wb6MR64.js";import"./Label-CqwIAbNx.js";import"./index--1NR6hdE.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./InformationSquare-C3jahF3t.js";import"./GlobalMenuButton-CeALzOE9.js";import"./PadlockLocked-BrnR3B2Z.js";import"./ButtonLabel-D0_5jgqT.js";import"./ButtonIcon-B6MS48OU.js";import"./ArrowUndo-aC05jVU6.js";import"./AccountMenu-2CevzA1_.js";import"./Globe-a2_PlwKz.js";import"./PadlockLockedFill-BXq9NBUs.js";import"./Buildings2-C_qK0eIC.js";import"./InboxFill-BK04Il4-.js";import"./MenuGrid-C79u-zFE.js";import"./PersonCircle-DLeV-T_K.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-BgCDBriW.js";import"./Archive-9LOoqKn0.js";import"./Trash-DPxs7CFK.js";const Cr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
