import{j as o,R as i}from"./iframe-Dip44woq.js";import{A as n}from"./AccountSelector-DLWjSVBQ.js";import{u as m}from"./useGlobalHeader-CzmmQw8n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B24kaf2B.js";import"./button-CZ5tfceY.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./heading-CZOpUMaj.js";import"./AccountMenu-BiUerS57.js";import"./SearchField-B2BM1-WP.js";import"./MagnifyingGlass-B4ceu0rd.js";import"./useId-CMLjH0Fx.js";import"./XMark-CynTM0oO.js";import"./FieldBase-BLO6-Mjz.js";import"./Typography-9n0VU0yu.js";import"./useHighlightedText-DVvgBsxZ.js";import"./Skeleton-CxN7sZWy.js";import"./Label-BJSes-CJ.js";import"./index-kI5T7Faz.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./Button-afp2Zwog.js";import"./MenuListItem-miXGiz4v.js";import"./MenuListHeading-BQZIqP1w.js";import"./MenuItem-BJUggRUL.js";import"./ItemMedia-5XSAaYKs.js";import"./Avatar-kiiFl4Mz.js";import"./AvatarGroup-sgYryoRH.js";import"./Icon-B7B4bUSp.js";import"./Checkmark-DnUC-Av1.js";import"./Heading-BGLknJpX.js";import"./ItemControls-CIGgXmTN.js";import"./ChevronRight-DRGzZC3s.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BX85xV5m.js";import"./InformationSquare-Cyt3NFHk.js";import"./Switch-CqTFD8P8.js";import"./useLocale-BgvSpYOa.js";import"./globalMenu-D_8ZNUl5.js";import"./PadlockLockedFill-DlKKDP1q.js";import"./Buildings2-B1_IqFfP.js";import"./InboxFill-CF36B1jJ.js";import"./MenuGrid-B9FGO-Tt.js";import"./PersonCircle-CYd9hvDI.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-rihloPcT.js";import"./Archive-COpGQX5c.js";import"./Trash-DY5xEA5p.js";import"./useAccountMenu-CKpET3M9.js";import"./useAccountsToolbar-B4qT5Jhh.js";import"./HeartFill-BtcNLVtx.js";import"./accountDataFetchers-CqFJXmF3.js";import"./useIsDesktop-HyFNYbFn.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const So=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,So as __namedExportsOrder,lo as default};
