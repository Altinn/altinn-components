import{p as o,g as i}from"./iframe-BBbEwSaq.js";import{A as n}from"./AccountSelector-BmSXSddp.js";import{u as s}from"./useGlobalHeader-BxCKvpaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-awH0sXcw.js";import"./tooltip-D3G3Ewte.js";import"./SearchField-D1R32ak6.js";import"./MagnifyingGlass-B6FIAadU.js";import"./useId-DZp72-eX.js";import"./XMark-Dw8JSfSd.js";import"./FieldBase-CbyxT5SM.js";import"./Typography-41mT2wo8.js";import"./useHighlightedText-DORd4ETJ.js";import"./Skeleton-DFF9p8Mx.js";import"./Label-DdMEJ83A.js";import"./Input-lqau07kD.js";import"./Button-DpW4Pu6O.js";import"./useMenu-CP6B3JUk.js";import"./MenuListItem-UbII8Q2r.js";import"./MenuListHeading-C7xt4T8q.js";import"./MenuItem-CL2l3rp8.js";import"./ItemMedia-DR-yuWlq.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Icon-Cx6QAjG2.js";import"./Checkmark-BcTHEh83.js";import"./ItemLabel-B9gTJ9up.js";import"./Heading-DDkqEyV3.js";import"./ItemControls-DaNsbzwN.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./ChevronRight-Bj8DUJ8P.js";import"./index-BBId2cwS.js";import"./InformationSquare-BNlJiT0G.js";import"./Switch-CtGtmSJw.js";import"./AccountMenu-D4H3ksbL.js";import"./useLocale-G2u72SVU.js";import"./globalMenu-Ce-IHzyh.js";import"./PersonCircle-Bn31GdL7.js";import"./Buildings2-BThbif1q.js";import"./InboxFill-B1H2j0_d.js";import"./MenuGrid-DirpeLmO.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CREc3UJh.js";import"./Archive-D8Y6xMn8.js";import"./Trash-Cq0lfucZ.js";import"./useAccountMenu-BNbdfvkI.js";import"./HeartFill-wgMutIaO.js";import"./accountDataFetchers-3SpUJy7o.js";import"./useIsDesktop-CDpRqHhY.js";const io={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
