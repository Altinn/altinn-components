import{j as o,R as i}from"./iframe-aFNUvxii.js";import{A as n}from"./AccountSelector-BE11oYdw.js";import{u as m}from"./useGlobalHeader-CHJv5ybz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmNdTbFH.js";import"./button-CWls7pzR.js";import"./use-merge-refs-C-1ExRDf.js";import"./lite-DaUVFjkg.js";import"./heading-BjvQlmHQ.js";import"./AccountMenu-DU7oO0kk.js";import"./SearchField-CnqR4pyv.js";import"./MagnifyingGlass-D9TxgtgQ.js";import"./useId-W_OLMGMd.js";import"./XMark-BNsj9R6R.js";import"./FieldBase-Bx4PyUkS.js";import"./Typography-Co9p8t4Z.js";import"./useHighlightedText-DGtjyph8.js";import"./Skeleton-Cd5GNeeI.js";import"./Label-CFD6MxAu.js";import"./index-BLgLADsA.js";import"./Input-KxxUuxk7.js";import"./input-Dq8WBvBp.js";import"./Button-cD6HSwip.js";import"./MenuListItem-DkdKLAWt.js";import"./MenuListHeading-Bej_UvLn.js";import"./MenuItem-BFBnyLEl.js";import"./ItemMedia-Di01sVY_.js";import"./Avatar-DUHlMNex.js";import"./AvatarGroup-GPJvZ4ub.js";import"./Icon-DC5Qp50u.js";import"./Checkmark-CrF1sW3U.js";import"./Heading-F0__TKrp.js";import"./ItemControls-BgCWQjxP.js";import"./ChevronRight-B0RIPM-U.js";import"./Badge-Di-Vgiqx.js";import"./Tooltip-e1n-OWVf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Cpxr8t1F.js";import"./index-BwJjPBKb.js";import"./InformationSquare-WTyA5DCk.js";import"./Switch-D8wch2ck.js";import"./useLocale-Ca5KvYAa.js";import"./globalMenu-Ckv0MVd6.js";import"./PersonCircle-B1Dz56Ee.js";import"./Buildings2-Cosw4hpx.js";import"./InboxFill-DOLbkCeC.js";import"./MenuGrid-Q6gxdajk.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-K0qzsBTB.js";import"./Archive-CsRyWol-.js";import"./Trash-CL4Cjfxa.js";import"./useAccountMenu-CncUvzXz.js";import"./HeartFill-DlkEo-n7.js";import"./accountDataFetchers-DeAdS0Zv.js";import"./useIsDesktop-DIUXR7J2.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const lo=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,lo as __namedExportsOrder,ao as default};
