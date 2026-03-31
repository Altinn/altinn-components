import{j as a}from"./iframe-CRyMHjBa.js";import{h as d}from"./header-qdAbKUQG.js";import{H as o}from"./LocaleSwitcher-CxU1rRqr.js";import{u as t}from"./useSearchbar-DJvt1bmh.js";import{m as u}from"./globalMenu-DbjJGUDw.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-BzessGcj.js";import"./useAccountMenu-D5pMgQzw.js";import"./useAccountsToolbar-BA64InwV.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-qjzW7uoi.js";import"./useId-Gvikg1Q9.js";import"./Button-CrFbX_o6.js";import"./button-W5jAAf--.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-C5D59x5L.js";import"./index-DHHnxdIx.js";import"./DigdirLogomark-DPqXGvO2.js";import"./Badge-DxjDnsAp.js";import"./SearchbarField-Bw2MRBgk.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./XMark-Bzo2iZ4y.js";import"./Icon-BfxILC1T.js";import"./Skeleton-CU7lBKK8.js";import"./AutocompleteItem-CPNkGDfs.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./Avatar-CTjQUhWB.js";import"./AvatarGroup-B0xdyHS8.js";import"./Checkmark-DF0LRIQJ.js";import"./Heading-DKMjfDI1.js";import"./useHighlightedText-Bmeo4cMl.js";import"./ChevronRight-CBrYYsjR.js";import"./QueryLabel-C16cTESP.js";import"./Plus-OcRWzOJe.js";import"./useMenu-lx2RC1HO.js";import"./MenuListItem-DntYuD8P.js";import"./MenuListHeading-BM8Os7Ca.js";import"./DropdownBase-eqswJ89b.js";import"./useClickOutside-CPg_rkSq.js";import"./SearchField-DHI_G06y.js";import"./FieldBase-CJQ_rSUH.js";import"./Typography-KJ3duhAj.js";import"./Label-BTqPQVQX.js";import"./index-DK7gfoBf.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./InformationSquare-BIUK32sG.js";import"./GlobalMenuButton-BfoZZwDn.js";import"./PadlockLocked-lyWIGQea.js";import"./ButtonLabel-B13q6XrT.js";import"./ButtonIcon-DQSQ565Q.js";import"./ArrowUndo-Cf7oOlPP.js";import"./AccountMenu-CMsKOU5R.js";import"./Globe-BT2C-xlC.js";import"./PadlockLockedFill-CAhpGFrP.js";import"./Buildings2-D7GR9rXY.js";import"./InboxFill-CfQPaBE-.js";import"./MenuGrid-CKTBqn5C.js";import"./PersonCircle-DpRnLJ5U.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-BZtiRB5z.js";import"./Archive-DkDv7ZML.js";import"./Trash-DL1Wx2eb.js";const Ar={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
}`,...c.parameters?.docs?.source}}};const Mr=["Login","CurrentAccount","CompanyAccount","SubcompanyAccount","MobileMenu","WithCustomBadge"];export{n as CompanyAccount,p as CurrentAccount,s as Login,i as MobileMenu,m as SubcompanyAccount,c as WithCustomBadge,Mr as __namedExportsOrder,Ar as default};
