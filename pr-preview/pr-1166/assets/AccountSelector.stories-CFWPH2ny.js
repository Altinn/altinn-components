import{j as o,R as i}from"./iframe-BLYnYdJi.js";import{A as n}from"./AccountSelector-6_TLy5eI.js";import{u as s}from"./useGlobalHeader-B_uft5vQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B87fQ9Ty.js";import"./button-B4GPokGl.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./heading-BECUkATt.js";import"./AccountMenu-BDV5Y0Z5.js";import"./SearchField-BrbRKSJg.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./useId-X7maRfkh.js";import"./XMark-Df3dBUtr.js";import"./FieldBase-CvSJrP7q.js";import"./Typography-CnODk9AP.js";import"./useHighlightedText-omqdYwyr.js";import"./Skeleton-DVFvYbaO.js";import"./Label-Br4cyMgU.js";import"./index-CJAPncw7.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./Button-DA7PTG8V.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuListHeading-CHqHsXip.js";import"./MenuItem-QRksz61A.js";import"./ItemMedia-PaceHGjP.js";import"./Avatar-R2BW9KiJ.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Icon-BBgjdpk7.js";import"./Checkmark-DfNuFQY9.js";import"./Heading-BbPallRO.js";import"./ItemControls-lA3CDM6n.js";import"./ChevronRight-BKn9ueoN.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DImJoMjP.js";import"./InformationSquare-OOV4URoX.js";import"./Switch-B7L3DRqE.js";import"./useLocale-DZnOEi77.js";import"./globalMenu-SyfRWbyA.js";import"./PersonCircle-osD0t2d-.js";import"./Buildings2-DxfjqMPA.js";import"./InboxFill-DJ5M8-wl.js";import"./MenuGrid-DofngXnY.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-DwmprL4z.js";import"./Archive-CQEKpySn.js";import"./Trash-C9XX2244.js";import"./useAccountMenu-DLvfrgi6.js";import"./HeartFill-H3FcMj78.js";import"./accountDataFetchers-C-6x7REC.js";import"./useIsDesktop-Bj1AMvX0.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
