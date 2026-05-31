import{p as o,g as i}from"./iframe-HmDeAVAp.js";import{A as n}from"./AccountSelector-M8HWKIKD.js";import{u as s}from"./useGlobalHeader-GHp2AOTE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDtevUxF.js";import"./tooltip-DaXe8rKK.js";import"./SearchField-jJndU2uH.js";import"./MagnifyingGlass-BBPHMis4.js";import"./useId-BNhfXdUV.js";import"./XMark-DFSmJjac.js";import"./FieldBase-DgiW3HLY.js";import"./Typography-C3y2BBzr.js";import"./useHighlightedText-CVbcsWEJ.js";import"./Skeleton-C_Dxe6ID.js";import"./Field-D-jjHIb3.js";import"./Label-Bwfk_b4F.js";import"./Input-Dd7kdPyi.js";import"./Button-SB9AH0kY.js";import"./useMenu-l9Wd3rxx.js";import"./MenuListItem-DjeDZ_MF.js";import"./MenuListHeading-Bby608mu.js";import"./MenuItem-C_rMT9NN.js";import"./ItemMedia-CLlob8fs.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Icon-DE5JaAj2.js";import"./Checkmark-_BupHaSE.js";import"./ItemLabel-DIku2iz8.js";import"./Heading-CYuK0FXt.js";import"./ItemControls-dRm3u7Mm.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./ChevronRight-Cqfpq8PE.js";import"./index-4vigTm9p.js";import"./InformationSquare-C8JPrkni.js";import"./Switch-BqrMYGGB.js";import"./AccountMenu-CqB4ytQn.js";import"./useLocale-DCCg7QrN.js";import"./globalMenu-DxGEj0TB.js";import"./PersonCircle-CNe7iw6a.js";import"./Buildings2-C4jzAZ1_.js";import"./InboxFill-DyosbqVC.js";import"./MenuGrid-CTrdV62x.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-WP4RvwzF.js";import"./Archive-DP3tiXIo.js";import"./Trash-DTo3Lvzs.js";import"./useAccountMenu-D7vno3IW.js";import"./HeartFill-F6kflSFE.js";import"./accountDataFetchers-fPDYh8NH.js";import"./useIsDesktop-DO6OG2LW.js";const po={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const so=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,so as __namedExportsOrder,po as default};
