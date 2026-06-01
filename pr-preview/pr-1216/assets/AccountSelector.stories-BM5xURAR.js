import{a7 as o,x as i}from"./iframe-cf7ESM3q.js";import{A as n}from"./AccountSelector-CI8buLGW.js";import{u as p}from"./useGlobalHeader-B4EZf3hW.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-B1yhNL-S.js";import"./MagnifyingGlass-BpT1SLqI.js";import"./FieldBase-D5M9JHnI.js";import"./Typography-C5h-r7_j.js";import"./useHighlightedText-D_wbJNXZ.js";import"./Field-DXqmeB6L.js";import"./Label-8tLoYVxb.js";import"./Input-DT4mbTp0.js";import"./useMenu-_swqW8No.js";import"./MenuListItem-DNMoEwuU.js";import"./MenuListHeading-0GDPIxXY.js";import"./MenuItem-CoaVEq9r.js";import"./ItemMedia-AVOIN5K1.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./Checkmark-DdKsblJH.js";import"./ItemLabel-DJAOCnpM.js";import"./Heading-CpNWi06X.js";import"./ItemControls-D6SRHxpV.js";import"./Badge-CCa-9q1v.js";import"./Tooltip-B9_Ir4Cy.js";import"./ChevronRight-Dy1T7Tgm.js";import"./index-BVMz6Wm9.js";import"./InformationSquare-DtaIp5wP.js";import"./Switch-BB41QvVL.js";import"./AccountMenu-CaQbgFEk.js";import"./useLocale-pM0N-xf5.js";import"./globalMenu-B8hBjuyn.js";import"./PersonCircle-CpTbD8Rr.js";import"./Buildings2-CkZ7T4sb.js";import"./InboxFill-Bs1HmCam.js";import"./MenuGrid-5MmXaPGz.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-ALvQmNlV.js";import"./Archive-SoY9DUBK.js";import"./Trash-DdUwR8QG.js";import"./useAccountMenu-C2X7MiAd.js";import"./HeartFill-C21x9WDJ.js";import"./accountDataFetchers-BhKH_2gK.js";import"./useIsDesktop-COQTv6Fz.js";const oo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const s=p({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...s,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
