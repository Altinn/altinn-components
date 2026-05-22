import{j as o,R as i}from"./iframe-D-ID03Ik.js";import{A as n}from"./AccountSelector-CvEBBQj7.js";import{u as s}from"./useGlobalHeader-BNjtK6WJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpFyEq-2.js";import"./tooltip-CH7-mov_.js";import"./AccountMenu-BK-tXBl9.js";import"./SearchField-D--HBqax.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./useId-DxZoCrQU.js";import"./XMark-DAr8sgUQ.js";import"./FieldBase-DmpPz6xV.js";import"./Typography-COzCTzPW.js";import"./useHighlightedText-Db1ksA0v.js";import"./Skeleton--3bwKnDN.js";import"./Label-DsF9mxAr.js";import"./Input-BflTpPuJ.js";import"./Button-CO1zFGa4.js";import"./MenuListItem-Ba7wKRG_.js";import"./MenuListHeading-D9YSE4Po.js";import"./MenuItem-Czug_8v9.js";import"./ItemMedia-BTzF80jS.js";import"./Avatar-CUF81_T9.js";import"./AvatarGroup-ZBmyex5T.js";import"./Icon-CER3YkDn.js";import"./Checkmark-WbwQiDGB.js";import"./Heading-BD0s_Obx.js";import"./ItemControls-Bpd8WrWV.js";import"./ChevronRight-CxM-6AgC.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./useMenu-OLkOIIh8.js";import"./index-B-QoLJUi.js";import"./InformationSquare-BLDef__3.js";import"./Switch-BD5e0ry_.js";import"./useLocale-DMJrbO9Q.js";import"./globalMenu-BHPgvHc4.js";import"./PersonCircle-VEY9QfAC.js";import"./Buildings2-C_ZFJYly.js";import"./InboxFill-CtasZA9T.js";import"./MenuGrid-CqfDM-uT.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-DSqUk3x4.js";import"./Archive-r1sYcfUF.js";import"./Trash-B9VlyYzI.js";import"./useAccountMenu-ew3FUgVL.js";import"./HeartFill-CdZwyDhR.js";import"./accountDataFetchers-DP1fpLJx.js";import"./useIsDesktop-bpU9K9vW.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
