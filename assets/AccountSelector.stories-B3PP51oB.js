import{p as o,g as i}from"./iframe-D7BK96qe.js";import{A as n}from"./AccountSelector-C8v5N-Us.js";import{u as s}from"./useGlobalHeader-gdtvEqB0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL9j6gFH.js";import"./tooltip-B8elfXS-.js";import"./SearchField-D67W67ub.js";import"./MagnifyingGlass-B3Q8Qlgl.js";import"./useId-B1IjdNvC.js";import"./XMark-DKvmykI8.js";import"./FieldBase-DmZ-AQhF.js";import"./Typography-CoOY9SxO.js";import"./useHighlightedText-C3262gRX.js";import"./Skeleton-C-TQnNEe.js";import"./Label-DW0yr3EV.js";import"./Input-wwG44gvy.js";import"./Button-UbmuloFB.js";import"./useMenu-CRon1bQ1.js";import"./MenuListItem-CLhEP-2O.js";import"./MenuListHeading-U2jvLcu6.js";import"./MenuItem-BkvPF8Fg.js";import"./ItemMedia-BmnjDO8T.js";import"./Avatar-BzaJ_tLr.js";import"./AvatarGroup-BXGOcJTt.js";import"./Icon-CXOWvudR.js";import"./Checkmark-BPQmQq7A.js";import"./ItemLabel-CTolDWEe.js";import"./Heading-Q-ep_pj6.js";import"./ItemControls-BZAZaWU9.js";import"./Badge-CP0to2q5.js";import"./Tooltip-BXZ0f-e8.js";import"./ChevronRight-B2Fr_XJI.js";import"./index-P9j8YxHr.js";import"./InformationSquare-BFNj1lbk.js";import"./Switch-qdZlSErG.js";import"./AccountMenu-19aQyamh.js";import"./useLocale-BJvoajDt.js";import"./globalMenu-oxCVDVZW.js";import"./PersonCircle-CzGMptDK.js";import"./Buildings2-De8pexF1.js";import"./InboxFill-kAZ11OFJ.js";import"./MenuGrid-BRqUiwsl.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CcynwizE.js";import"./Archive-CZ8Zskdn.js";import"./Trash-CmRN9Bc1.js";import"./useAccountMenu-BFANgFKU.js";import"./HeartFill-BglTcypd.js";import"./accountDataFetchers-BbIy0_V2.js";import"./useIsDesktop-PMHXXYUc.js";const io={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
