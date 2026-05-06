import{j as o,R as i}from"./iframe-Cppd0qv6.js";import{A as n}from"./AccountSelector-c64KUYHe.js";import{u as s}from"./useGlobalHeader-QSdAUmZj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRImx9w3.js";import"./button-DXqTFqXv.js";import"./use-merge-refs-BVudX8AY.js";import"./lite-DaUVFjkg.js";import"./heading-DFc6Xo-9.js";import"./AccountMenu-KAFRT7sR.js";import"./SearchField-Cfz4mYX1.js";import"./MagnifyingGlass-D5_sNBXy.js";import"./useId-BBgZM5Xr.js";import"./XMark-xtLLERRk.js";import"./FieldBase-AUbtsXZu.js";import"./Typography-CFy91Abt.js";import"./useHighlightedText-CnlmbfHa.js";import"./Skeleton-DZL_2b5i.js";import"./Label-BZYzljw4.js";import"./index-DZ9ad6Vq.js";import"./Input-BKVpgPJL.js";import"./input-DhtF3MwF.js";import"./Button-DZtlkh8w.js";import"./MenuListItem-BHtHmzZq.js";import"./MenuListHeading-DGbRdhBr.js";import"./MenuItem-DujpBTEw.js";import"./ItemMedia-B28DyjI4.js";import"./Avatar-C8BEFMoW.js";import"./AvatarGroup-CkQ-nr_4.js";import"./Icon-DYZqEJGr.js";import"./Checkmark-Ci2lQnJg.js";import"./Heading-CVWk1BMK.js";import"./ItemControls-D1uxt3OD.js";import"./ChevronRight-CWvUN_3J.js";import"./Badge-DKrs0UA7.js";import"./Tooltip-B3YY3plR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Dh0AdFxf.js";import"./InformationSquare-C6gp2qmA.js";import"./Switch-BmVTV9XV.js";import"./useLocale-DqAbeOH3.js";import"./globalMenu-fWwAxIeC.js";import"./PersonCircle-CQ1ykkn2.js";import"./Buildings2-BX3qB0AB.js";import"./InboxFill-DvdJGQXq.js";import"./MenuGrid-G391-i_w.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BY8QGZKs.js";import"./Archive-DaKE8wNx.js";import"./Trash-ahBs7pt8.js";import"./useAccountMenu-D7MN8GM9.js";import"./HeartFill-Bgtm1EQq.js";import"./accountDataFetchers-msqBSXSW.js";import"./useIsDesktop-AL_WT0Qz.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
