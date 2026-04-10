import{j as a}from"./iframe-BbAJh2l_.js";import{h as d}from"./header-CJ_KwIgT.js";import{H as o}from"./LocaleSwitcher-BE7LpRE8.js";import{u as t}from"./useSearchbar-m7_Lbwah.js";import{m as u}from"./globalMenu-CjU1AY1B.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-CHL8SvaE.js";import"./useAccountMenu-CAirZKnF.js";import"./useAccountsToolbar-1PpwFlHL.js";import"./getAccount-nlIneB7c.js";import"./HeartFill-CQaU9rEv.js";import"./useId-DlaeWOGU.js";import"./Button-MneWcYDg.js";import"./button-BOk0ljv4.js";import"./use-merge-refs-B0vn2eeh.js";import"./lite-DaUVFjkg.js";import"./useIsDesktop-CLdfxTOe.js";import"./index-D4eFSvt3.js";import"./DigdirLogomark-C5l6MbAe.js";import"./Badge-Bayw0f9c.js";import"./SearchbarField-Cpy9Marg.js";import"./MagnifyingGlass-DGbwovi2.js";import"./XMark-CBD09dy-.js";import"./Icon-BPIDnrjf.js";import"./Skeleton-DCAPmpFX.js";import"./AutocompleteItem-tZKgj1qi.js";import"./MenuItem-CGPdVF_D.js";import"./ItemMedia-Cdf2Y2Gw.js";import"./Avatar-j2CMQG5s.js";import"./AvatarGroup-D7oFGG3U.js";import"./Checkmark-DCzlJj3W.js";import"./Heading-DtMkhgFU.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./ItemControls-B5jsMXbN.js";import"./ChevronRight-C-emBdlp.js";import"./QueryLabel-BVV4lG_E.js";import"./Plus-Db8QMMb0.js";import"./useMenu-YgVQ1Cwa.js";import"./MenuListItem-DT3pt1_M.js";import"./MenuListHeading-CDqxI5H7.js";import"./DropdownBase-DrvyGdmc.js";import"./useClickOutside-Gtkv9Bjl.js";import"./SearchField-DsP_4HyY.js";import"./FieldBase-DPxwAUyD.js";import"./Typography-Dc6esLAJ.js";import"./Label-BPdBz656.js";import"./index-BNnwLbXZ.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./InformationSquare-ina-Qzjq.js";import"./GlobalMenuButton-BL56lH6C.js";import"./PadlockLocked-Bsh5zK5G.js";import"./ButtonLabel-DIGtAAjs.js";import"./ButtonIcon-NlGHLcOm.js";import"./ArrowUndo-pVsY4qWr.js";import"./AccountMenu-BSgSTNnh.js";import"./Globe-DjjENoKK.js";import"./PadlockLockedFill-C47DmXjH.js";import"./Buildings2-Bl-BhvZh.js";import"./InboxFill-Csrg5WBg.js";import"./MenuGrid-DDTUfaNs.js";import"./PersonCircle-PBPRNabp.js";import"./accountMenu-D55xwLeW.js";import"./Bookmark-B1ei_95V.js";import"./Archive-BnSuVF__.js";import"./Trash-CReBsH0T.js";const Mr={title:"Layout/Header",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{...d,search:{name:"inbox-search",placeholder:"Søk i Altinn"}}},s=r=>{const e=t({...r,accountId:null});return a.jsx(o,{...e})},p=r=>{const e=t({...r});return a.jsx(o,{...e})},n=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e})},m=r=>{const e=t({...r,accountId:"diaspora-2"});return a.jsx(o,{...e})},i=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,mobileMenu:u})},c=r=>{const e=t({...r,accountId:"diaspora"});return a.jsx(o,{...e,badge:{label:"Beta",color:"person"}})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: HeaderProps) => {
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
