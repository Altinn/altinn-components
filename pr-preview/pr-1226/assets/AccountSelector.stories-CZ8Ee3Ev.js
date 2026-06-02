import{a7 as o,x as i}from"./iframe-Ci8DJ-6R.js";import{A as n}from"./AccountSelector-KUwZjk4j.js";import{u as p}from"./useGlobalHeader-CBorH5f9.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-BI6hQSM3.js";import"./MagnifyingGlass--VnpSKzI.js";import"./FieldBase-CJmJ_FUR.js";import"./Typography-C-nn41yV.js";import"./useHighlightedText-CMND7wU2.js";import"./Field-C7mGyyvw.js";import"./Label-BZiKx0Le.js";import"./Input-DWxDHqSK.js";import"./useMenu-7RMszhcf.js";import"./MenuListItem-Cpkt8LLi.js";import"./MenuListHeading-CkHpUapY.js";import"./MenuItem-CLCRatEV.js";import"./ItemMedia-D2PQb4gS.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./Checkmark-V7YKXO-0.js";import"./ItemLabel-D6hw0WzI.js";import"./Heading-CWZTf72r.js";import"./ItemControls-DXMoT8B2.js";import"./Badge-CVr9GptX.js";import"./Tooltip-CGvNbStB.js";import"./ChevronRight-BEnuMmPo.js";import"./index-dwvgmSh8.js";import"./InformationSquare-CEM0wkOI.js";import"./Switch-C_mJJsLr.js";import"./AccountMenu-6piFieQ8.js";import"./useLocale-D87inwSL.js";import"./globalMenu-DL7M85KS.js";import"./PersonCircle-BPRJgZfT.js";import"./Buildings2-D7agrZxu.js";import"./InboxFill-DlqFyUHD.js";import"./MenuGrid-BD0Bs4Xj.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BWpxLimZ.js";import"./Archive-CrsjlxL0.js";import"./Trash-C8Gu1dIX.js";import"./useAccountMenu-C3n_TK9i.js";import"./HeartFill-CtwhvWNz.js";import"./accountDataFetchers-Bz6PokKM.js";import"./useIsDesktop-BHChZWCT.js";const oo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const s=p({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...s,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const ro=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,ro as __namedExportsOrder,oo as default};
