import{j as o,R as i}from"./iframe-C6Awlou2.js";import{A as n}from"./AccountSelector-DOlRr3zX.js";import{u as s}from"./useGlobalHeader-BsV4IkX9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlBZqmFk.js";import"./tooltip-wBWP-9p3.js";import"./AccountMenu-BizNTwai.js";import"./SearchField-BUnYpq_7.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./useId-InpKFtFj.js";import"./XMark-BEbAfGHw.js";import"./FieldBase-D62sKxwt.js";import"./Typography-B5eitD86.js";import"./useHighlightedText-BOeqc4_T.js";import"./Skeleton-Dzw9idTE.js";import"./Label-C48-SpFn.js";import"./Input-DYyIZxUH.js";import"./Button-xDUaTd0f.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuListHeading-0XPhJCtv.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Icon-DNxmTYNY.js";import"./Checkmark-dLQcEakJ.js";import"./Heading-CwC0m1gc.js";import"./ItemControls-vVSkFb-5.js";import"./ChevronRight-BPFGJ1iV.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";import"./Switch-gn6KCAh3.js";import"./useLocale-CIxgB-nI.js";import"./globalMenu-CybjX0wT.js";import"./PersonCircle-DsM0wDTq.js";import"./Buildings2-w19VRbAZ.js";import"./InboxFill-DVXSHB4U.js";import"./MenuGrid-Dv5t6gnm.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-RIYX3Zxk.js";import"./Archive-Cyt7GbXr.js";import"./Trash-Ccqpg617.js";import"./useAccountMenu-BFMEUnig.js";import"./HeartFill-Dg_CH6Vp.js";import"./accountDataFetchers-TJAfggbr.js";import"./useIsDesktop-D-E7EXZk.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
