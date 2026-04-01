import{j as o,R as i}from"./iframe-DxKlu2kD.js";import{A as n}from"./AccountSelector-Duvejp4R.js";import{u as s}from"./useGlobalHeader-Cwx67NFj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWCSYHeO.js";import"./button-B-2CHja_.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./heading-jTnIlddE.js";import"./AccountMenu-SjpBIltx.js";import"./SearchField-yItf8ktv.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./useId-_YfdAmsW.js";import"./XMark-C1fx_pyo.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./useHighlightedText-DHBtHLKn.js";import"./Skeleton-niSIm0IT.js";import"./Label-DPRrgAAI.js";import"./index-sO6KcVLH.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./Button-D78I7hWM.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Icon-CrZKj0Yv.js";import"./Checkmark-C9NR0hmL.js";import"./Heading-m7XVygop.js";import"./ChevronRight-DCeYx28-.js";import"./Badge-4TJDD2P9.js";import"./useMenu-DwMeQcTX.js";import"./InformationSquare-D9H1eLzz.js";import"./Switch-BzdDuGzs.js";import"./useLocale-DET9q0dm.js";import"./globalMenu-B3nrl9b8.js";import"./PadlockLockedFill-ClPKZDTy.js";import"./Buildings2-DDbBdJ6H.js";import"./InboxFill-DNGI5Ip5.js";import"./MenuGrid-foGtWjAB.js";import"./PersonCircle-BsqwchV5.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-Bwp4zv2C.js";import"./Archive-DOcjXifM.js";import"./Trash-BduIn3aS.js";import"./useAccountMenu-D2pUF167.js";import"./useAccountsToolbar-haP3h4tP.js";import"./HeartFill-D-238qwI.js";import"./accountDataFetchers-CDMJRhJ6.js";import"./useIsDesktop-BOE7l-hO.js";const mo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const uo=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,uo as __namedExportsOrder,mo as default};
