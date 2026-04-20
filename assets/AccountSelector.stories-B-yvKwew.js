import{j as o,R as i}from"./iframe-yBEatwQ0.js";import{A as n}from"./AccountSelector-Caxd4S6i.js";import{u as s}from"./useGlobalHeader-BbbvDGpT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7J_eA84.js";import"./button-DDduZyu8.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./heading-BuqOln6O.js";import"./AccountMenu-DMAXPz_2.js";import"./SearchField-Dq16b7ar.js";import"./MagnifyingGlass-SlzD67D9.js";import"./useId-DyCIbqyR.js";import"./XMark-DRdfunCf.js";import"./FieldBase-DJNauVgJ.js";import"./Typography-ggurnZ72.js";import"./useHighlightedText-Dt8J34OD.js";import"./Skeleton-D2AOT5bt.js";import"./Label-jtu-OMH2.js";import"./index-4yM6tgpO.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./Button-Du_F5DdO.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuListHeading-CMUrUTJP.js";import"./MenuItem-DG7ysQbI.js";import"./ItemMedia-po0tYTET.js";import"./Avatar-BHAY-jNJ.js";import"./AvatarGroup-Em3MhneF.js";import"./Icon-m6GSRHhZ.js";import"./Checkmark-BOqpEP7R.js";import"./Heading-gNorXCZa.js";import"./ItemControls-CsC9idfH.js";import"./ChevronRight-DNoffWLc.js";import"./Badge-Bt5kdhhY.js";import"./useMenu-DUoC-ldr.js";import"./InformationSquare-CID74XMT.js";import"./Switch-BDdNKTmo.js";import"./useLocale-D8aC51g_.js";import"./globalMenu-Chte0suD.js";import"./PadlockLockedFill-Bpq2gcD3.js";import"./Buildings2-iLtDDyRo.js";import"./InboxFill-BAn487aw.js";import"./MenuGrid-B3KPctc0.js";import"./PersonCircle-hsf5HIre.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-C-yemQKs.js";import"./Archive-BK62d9I_.js";import"./Trash-1ExTWg_2.js";import"./useAccountMenu-8QZdwbVN.js";import"./useAccountsToolbar-BHTWjE-3.js";import"./HeartFill-DJA7wNNg.js";import"./accountDataFetchers-SJnr7D69.js";import"./useIsDesktop-DNc8DhfV.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const ao=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,ao as __namedExportsOrder,uo as default};
