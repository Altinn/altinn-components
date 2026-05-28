import{p as o,g as i}from"./iframe-43_RSSTf.js";import{A as n}from"./AccountSelector-CwVIiTFB.js";import{u as s}from"./useGlobalHeader-DqOSU35T.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9XEmR3s.js";import"./tooltip-CaRi0lSN.js";import"./SearchField-QwXAT1yz.js";import"./MagnifyingGlass-Bf1420VU.js";import"./useId-BLkk23cI.js";import"./XMark-Baw5EL5c.js";import"./FieldBase-DaCzydfk.js";import"./Typography-Ct8ipg3s.js";import"./useHighlightedText-CH9gApkX.js";import"./Skeleton-C5aNvb_u.js";import"./Label-DtAXMx4b.js";import"./Input-B-eeYerN.js";import"./Button-B83AdZGF.js";import"./useMenu-CLHDsGsG.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./MenuItem-DlVW2JuZ.js";import"./ItemMedia-C7TJfaPW.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Icon-DxaOlqJE.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./Heading-2vQl8tBj.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./ChevronRight-DXBQR3xu.js";import"./index-CwY-RffE.js";import"./InformationSquare-BgUnCFaX.js";import"./Switch-YXKvHF1V.js";import"./AccountMenu-DCpMQtOk.js";import"./useLocale-D2MMdEwB.js";import"./globalMenu-CYMl9fs2.js";import"./PersonCircle-5C7xLqsV.js";import"./Buildings2-Chbhwy3k.js";import"./InboxFill-LO64aqnK.js";import"./MenuGrid-DpPBmXDm.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-Dm5c54YI.js";import"./Archive-DejoCF8M.js";import"./Trash-sc3FQnLB.js";import"./useAccountMenu-C_gEjtMM.js";import"./HeartFill-CK5ZP6qh.js";import"./accountDataFetchers-zPR2jlnq.js";import"./useIsDesktop-CRlQyS-C.js";const io={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
