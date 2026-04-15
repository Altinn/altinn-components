import{j as o,R as i}from"./iframe-BWWyepKi.js";import{A as n}from"./AccountSelector-vwjn9EYg.js";import{u as m}from"./useGlobalHeader-Cr6Mw1q5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fkRlyifr.js";import"./button-dq33hCwG.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./heading-CaI-LR9D.js";import"./AccountMenu-CMtdAaLw.js";import"./SearchField-BuZQEnM8.js";import"./MagnifyingGlass-B591vdqr.js";import"./useId-CMCVT55W.js";import"./XMark-DJOirLMA.js";import"./FieldBase-DnRTsvox.js";import"./Typography-C9vgo_J4.js";import"./useHighlightedText-BYfI8EMJ.js";import"./Skeleton-CYDyiFkf.js";import"./Label-DYc4A36I.js";import"./index-2Prco8uk.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./Button-DaLP9UzX.js";import"./MenuListItem-uASMHa_1.js";import"./MenuListHeading-CgclVl9k.js";import"./MenuItem-Dk1uy6my.js";import"./ItemMedia-h4TQiEvV.js";import"./Avatar-CiKCHN1S.js";import"./AvatarGroup-DPHuhQ41.js";import"./Icon-w9oNx8pI.js";import"./Checkmark-C84HjHaR.js";import"./Heading-DQYelGqr.js";import"./ItemControls-jVI2cRmn.js";import"./ChevronRight-I2Pyvoyr.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BnIxk9FT.js";import"./InformationSquare-WPPzSpdY.js";import"./Switch-Cap1vkPZ.js";import"./useLocale-g-BV4uvP.js";import"./globalMenu-YVPeMv21.js";import"./PadlockLockedFill-DBaRumWt.js";import"./Buildings2-DRqyTy38.js";import"./InboxFill-CGl49g3V.js";import"./MenuGrid-BzIQlHmL.js";import"./PersonCircle-BNXH9dF5.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-CCyimZDh.js";import"./Archive-C0BkWIAH.js";import"./Trash-DMXRjDw8.js";import"./useAccountMenu-vBHQIgJZ.js";import"./useAccountsToolbar-DoGOBUeg.js";import"./HeartFill-vK5Yc91U.js";import"./accountDataFetchers-COw0Da6k.js";import"./useIsDesktop-CYXiMf6h.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
