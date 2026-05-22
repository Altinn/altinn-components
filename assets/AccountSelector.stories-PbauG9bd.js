import{j as o,R as i}from"./iframe-BM6RZuQM.js";import{A as n}from"./AccountSelector-CBvboyq8.js";import{u as s}from"./useGlobalHeader-DVMCDqRV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAnedVDn.js";import"./tooltip-DKLQ4JCb.js";import"./AccountMenu-8uNzYSA_.js";import"./SearchField-BgkLBjBi.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./useId-BYt_OYJh.js";import"./XMark-EbOSJv8a.js";import"./FieldBase-lFVyN1xh.js";import"./Typography-CXaseqiH.js";import"./useHighlightedText-Ctq_ta7p.js";import"./Skeleton-DWzjK3h6.js";import"./Label-C7IFl0uM.js";import"./Input-DsxiHlOc.js";import"./Button-DhtPu9_Y.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuListHeading-DdL3Lhhp.js";import"./MenuItem-CZgTJUho.js";import"./ItemMedia-qdtGx-k7.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./Icon-m3ZEAfHU.js";import"./Checkmark-CVccove_.js";import"./Heading-aHWaPGZz.js";import"./ItemControls-DdRx042_.js";import"./ChevronRight-B7KHdEb3.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./useMenu-DmjwUxq0.js";import"./index-CvxbdxgD.js";import"./InformationSquare-sR-zXHjU.js";import"./Switch-D6evj3r2.js";import"./useLocale-Dq8Iiold.js";import"./globalMenu-BGPqSz8E.js";import"./PersonCircle-DN7g7QG1.js";import"./Buildings2-DPJaWJUP.js";import"./InboxFill-CoU3DNM4.js";import"./MenuGrid-B2fy_4CU.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BjY-XLx0.js";import"./Archive-DxmrpUmh.js";import"./Trash-CeRRfZXt.js";import"./useAccountMenu-R2DlDLLf.js";import"./HeartFill-C0v9J4kN.js";import"./accountDataFetchers-CSMlMgMv.js";import"./useIsDesktop-Dm2dj1pd.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const io=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,io as __namedExportsOrder,no as default};
