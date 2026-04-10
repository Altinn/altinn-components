import{j as a}from"./iframe-CEV_bE_y.js";import{h as d}from"./header-i9DUxBd6.js";import{H as o}from"./LocaleSwitcher-FAej8yIP.js";import{u as t}from"./useSearchbar-i2whbqTl.js";import{m as u}from"./globalMenu-DMBqT3bV.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-ChwWafHA.js";import"./useAccountMenu-42OF9cBc.js";import"./useAccountsToolbar-DGGVcX76.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-Bf2nTARw.js";import"./useId-BHfJgDBc.js";import"./Button-Camg-mBZ.js";import"./button-B-6jfb5R.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-BlUQDDAY.js";import"./index-CGpVDQnA.js";import"./DigdirLogomark-cWibhzTJ.js";import"./Badge-BVMw9Rw0.js";import"./SearchbarField-CsbZ30XY.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./XMark-ByuttVGc.js";import"./Icon-BwPDmLy2.js";import"./Skeleton-cNOPtI7P.js";import"./AutocompleteItem-TqvRZWpV.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Checkmark-D-WBqViW.js";import"./Heading-CjHEKkoD.js";import"./useHighlightedText-DdOlAfmT.js";import"./ItemControls-Dsxd0fj6.js";import"./ChevronRight-Dck0Zh1j.js";import"./QueryLabel-DfLFOOHP.js";import"./Plus-D1UdPMNR.js";import"./useMenu-EIG5MfCS.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuListHeading-BxT-phiC.js";import"./DropdownBase-BnZ2mdI4.js";import"./useClickOutside-DXo94wLb.js";import"./SearchField-C9XAkfHX.js";import"./FieldBase-D397wWlI.js";import"./Typography-BMVOyH8m.js";import"./Label-Cb-tqHHM.js";import"./index-Cr9j_S5O.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./InformationSquare-C-romZo4.js";import"./GlobalMenuButton-BgcQWhdM.js";import"./PadlockLocked-CD3BiTlm.js";import"./ButtonLabel-DcT85n25.js";import"./ButtonIcon-BdogZ2zC.js";import"./ArrowUndo-DgeaLVju.js";import"./AccountMenu-adZ4jcQl.js";import"./Globe-BPeGlch2.js";import"./PadlockLockedFill-Dg6xF2gV.js";import"./Buildings2-DLWHFsKX.js";import"./InboxFill-DTZLIyGz.js";import"./MenuGrid-D-AQupNN.js";import"./PersonCircle-DkfM7_Ed.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-CFo8DrTV.js";import"./Archive-DWBVULf9.js";import"./Trash-DL6cPj-R.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
