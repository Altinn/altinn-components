import{j as o,R as i}from"./iframe-Nkxls2w0.js";import{A as n}from"./AccountSelector-BgAPchbc.js";import{u as s}from"./useGlobalHeader-6fHW71Xu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M4TkGQLb.js";import"./button-CK59nDyy.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";import"./heading-DBVrBNvc.js";import"./AccountMenu-BBk-Oh_e.js";import"./SearchField-Bb3Ffka2.js";import"./MagnifyingGlass-k_g2FxNc.js";import"./useId-C8J5yFeN.js";import"./XMark-D-ALqV0n.js";import"./FieldBase-Drb41XPf.js";import"./Typography-CZZfCvh6.js";import"./useHighlightedText-BtUjP4Uj.js";import"./Skeleton-DNS4c1Rp.js";import"./Label-DRBFvXSF.js";import"./index-Bvwkp7W_.js";import"./Input-BDHdvqI3.js";import"./input-MPZybUVd.js";import"./Button-Ds9vuGVD.js";import"./MenuListItem-Cfh5A6HZ.js";import"./MenuListHeading-CEofuJGo.js";import"./MenuItem-edMrv6Qw.js";import"./ItemMedia-CsEr1Zw1.js";import"./Avatar-BDGJojEv.js";import"./AvatarGroup-BM9A-Bel.js";import"./Icon-qDX4JAC4.js";import"./Checkmark-DHusaxnp.js";import"./Heading-AZ4WQ_-Y.js";import"./ItemControls-BH6jrH_o.js";import"./ChevronRight-Bcpq3qt2.js";import"./Badge-Ipym1qsE.js";import"./Tooltip-sxtJg_qK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-WCeLZ4vF.js";import"./InformationSquare-zR5D--CT.js";import"./Switch-C1jPtUo5.js";import"./useLocale-hXumCrC-.js";import"./globalMenu-CR74OuXv.js";import"./PersonCircle-Cn0cICkm.js";import"./Buildings2-Cwc84w3B.js";import"./InboxFill-o2E1Tsdv.js";import"./MenuGrid-CQppVPlk.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-Ae2OhZ5O.js";import"./Archive-BdfF2mlS.js";import"./Trash-3ZsUZg5A.js";import"./useAccountMenu-Bic09Mnl.js";import"./HeartFill-DW-S_Xm4.js";import"./accountDataFetchers-C04BNSq_.js";import"./useIsDesktop-B3v56MMA.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
