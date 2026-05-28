import{p as o,g as i}from"./iframe-DrMVe4hJ.js";import{A as n}from"./AccountSelector-FLYfbKiC.js";import{u as s}from"./useGlobalHeader-CdaRXsEK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2LUQ97G.js";import"./tooltip-BY1BnveL.js";import"./SearchField-BnuJ-svS.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./useId-CwrI0QJg.js";import"./XMark-BXMpu0Gf.js";import"./FieldBase-C4Wnopmd.js";import"./Typography-BZD6V0ik.js";import"./useHighlightedText-BA3QT9FH.js";import"./Skeleton-BKl0bJYN.js";import"./Label-QaOAiYFD.js";import"./Input-kqR7j7M6.js";import"./Button-B40GVZAo.js";import"./useMenu-CrRt-E4f.js";import"./MenuListItem-D8f5vRSf.js";import"./MenuListHeading-UZ0vr2Pr.js";import"./MenuItem-B27UidAs.js";import"./ItemMedia-B9-jRKLO.js";import"./Avatar-toOOZ7nf.js";import"./AvatarGroup-CVynWGO_.js";import"./Icon-CK8FcAiF.js";import"./Checkmark-OKWU0xmP.js";import"./ItemLabel-DjesYwl7.js";import"./Heading-DYwrq57L.js";import"./ItemControls-ztKmX_ZB.js";import"./Badge-BnCvYltQ.js";import"./Tooltip-BEnHuPi8.js";import"./ChevronRight-u16zgCRT.js";import"./index-j3-eoKUd.js";import"./InformationSquare-J3q8zJp8.js";import"./Switch-Dnru9sKh.js";import"./AccountMenu-DaOWAbw-.js";import"./useLocale-CeMd-s_T.js";import"./globalMenu-D_AnKYGY.js";import"./PersonCircle-ChnCnn6V.js";import"./Buildings2-Bj6G_QDF.js";import"./InboxFill-BZ5kfP5P.js";import"./MenuGrid-FgdNCw-Y.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CbOgZWyk.js";import"./Archive-BqJg8DEZ.js";import"./Trash-DgVztnIf.js";import"./useAccountMenu-KMOR8Eui.js";import"./HeartFill-hfTMvonT.js";import"./accountDataFetchers-BvFiIdWA.js";import"./useIsDesktop-BPcHKUeF.js";const io={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;
  return <RootProvider>
      <AccountSelector {...accountSelector} forceOpenFullScreen={args.forceOpenFullScreen} />
    </RootProvider>;
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} />
    </RootProvider>;
}`,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} loading />
    </RootProvider>;
}`,...c.parameters?.docs?.source}}};const po=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,po as __namedExportsOrder,io as default};
