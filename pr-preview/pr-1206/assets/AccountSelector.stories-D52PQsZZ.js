import{p as o,f as i}from"./iframe-Ca1pxjCh.js";import{A as n}from"./AccountSelector-CV5tqM_-.js";import{u as s}from"./useGlobalHeader-CkiiK3YD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qsemo-NB.js";import"./tooltip-DBInG_0S.js";import"./SearchField-CQtbSmEr.js";import"./MagnifyingGlass-DvaQ8jq-.js";import"./useId-DKdvhqLE.js";import"./XMark-D_G5yHBr.js";import"./FieldBase-B_jWg1W2.js";import"./Typography-B47euKof.js";import"./useHighlightedText-B4z3dUTF.js";import"./Skeleton-CjJRr45L.js";import"./Label-Dpkw0Wq9.js";import"./Input-CnEzvrKf.js";import"./Button-BUoYLOjU.js";import"./useMenu-CVV4ErAO.js";import"./MenuListItem-ChEwMlMz.js";import"./MenuListHeading-CfNBOaKJ.js";import"./MenuItem-LhE1AhKQ.js";import"./ItemMedia-B1dbthGB.js";import"./Avatar-D6lLgCNX.js";import"./AvatarGroup-DbBgQl7c.js";import"./Icon-DX2teY26.js";import"./Checkmark-BNq65g6F.js";import"./Heading-BWtrIkld.js";import"./ItemControls-CcgtvJvT.js";import"./Badge-B7pvghgv.js";import"./Tooltip-CUaFdea7.js";import"./ChevronRight-Dx7-HhpA.js";import"./index-C_HyNp1D.js";import"./InformationSquare-vAQpVtYs.js";import"./Switch-bAE40bod.js";import"./AccountMenu-CpDUjuDi.js";import"./useLocale-CEqeQgTF.js";import"./globalMenu-E37MbFHf.js";import"./PersonCircle-DSvS8L14.js";import"./Buildings2-DPthOBdH.js";import"./InboxFill-lKCyinz_.js";import"./MenuGrid-CtOTcuSN.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-B5W_lfMZ.js";import"./Archive-XJdMJ4po.js";import"./Trash-CHO3PH3Q.js";import"./useAccountMenu-Jp11mm4_.js";import"./HeartFill-l7YS5VL-.js";import"./accountDataFetchers-C5NW7syD.js";import"./useIsDesktop-yFsEw24L.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
