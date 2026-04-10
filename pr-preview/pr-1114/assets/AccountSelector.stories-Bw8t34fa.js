import{j as o,R as i}from"./iframe-COdTICiz.js";import{A as n}from"./AccountSelector-DTUpawFT.js";import{u as s}from"./useGlobalHeader-Z27PMXd9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eHSiAaoN.js";import"./button-BvBLLivB.js";import"./use-merge-refs-DMOZr-G2.js";import"./lite-DaUVFjkg.js";import"./heading-B2C3mS9o.js";import"./AccountMenu-DyMm6NVs.js";import"./SearchField-DQWZ98wb.js";import"./MagnifyingGlass-BjGJbcBP.js";import"./useId-lT615UMD.js";import"./XMark-CpgXVK2Q.js";import"./FieldBase-CQukmgiw.js";import"./Typography-CRI9HVXo.js";import"./useHighlightedText-FFYshbql.js";import"./Skeleton-DCT9M7tY.js";import"./Label-Bw83ICjW.js";import"./index-zPL8uGVu.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./Button-Dqoqvefk.js";import"./MenuListItem-BVxiRmRE.js";import"./MenuListHeading-C74FO8PH.js";import"./MenuItem-Pij9KqE-.js";import"./ItemMedia-BN92MYHv.js";import"./Avatar-30_b1gUS.js";import"./AvatarGroup-DMJoFLAP.js";import"./Icon-CpwjhC7D.js";import"./Checkmark-D_NJmpQs.js";import"./Heading-BXn08xBV.js";import"./ItemControls-DRloD8XX.js";import"./ChevronRight-tPPKpYH4.js";import"./Badge-CTG2EWNm.js";import"./useMenu-C9hrnnrl.js";import"./InformationSquare-BF6iEl5i.js";import"./Switch-CIYopdq4.js";import"./useLocale-DkUu3R6P.js";import"./globalMenu-yrhTMCWw.js";import"./PadlockLockedFill-Cj3D67jg.js";import"./Buildings2-BH6LkTev.js";import"./InboxFill-CJVimO5I.js";import"./MenuGrid-4dfRFYs1.js";import"./PersonCircle-CAUPX5rd.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BwjH6ALD.js";import"./Archive-BB9PeNdy.js";import"./Trash-BPlCWJiN.js";import"./useAccountMenu-1q4G8GF-.js";import"./useAccountsToolbar-CXp7UB3F.js";import"./HeartFill-DHXQfshg.js";import"./accountDataFetchers-Bk1wplf5.js";import"./useIsDesktop-DEFSCjxp.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
