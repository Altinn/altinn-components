import{j as o,R as i}from"./iframe-BaUVsogD.js";import{A as n}from"./AccountSelector-BRwkIzsS.js";import{u as s}from"./useGlobalHeader-C4yEABZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lARy5TPT.js";import"./button-BfXez8v8.js";import"./use-merge-refs-BV0MipOU.js";import"./lite-DaUVFjkg.js";import"./heading-PzoCxHBq.js";import"./AccountMenu-BK8n904R.js";import"./SearchField-BG-HK4fX.js";import"./MagnifyingGlass-DyxA-WAG.js";import"./useId-D8i_et7Z.js";import"./XMark-vPSUBj6u.js";import"./FieldBase-CZ-07bnd.js";import"./Typography-BHJ2EAGl.js";import"./useHighlightedText-C23yE0pM.js";import"./Skeleton-yH6qNAEo.js";import"./Label-Cge6OnF8.js";import"./index-D4SJX6je.js";import"./Input-BHiIXP8Y.js";import"./input-C1CvvkMg.js";import"./Button-mtd2C5dd.js";import"./MenuListItem-Bh_jPdY2.js";import"./MenuListHeading-B40v5QW5.js";import"./MenuItem-6c1J0YV3.js";import"./ItemMedia-BVGZtNsE.js";import"./Avatar-u9iGVwtH.js";import"./AvatarGroup-DFVM-aUE.js";import"./Icon-7hKeNARf.js";import"./Checkmark-DTahSgDV.js";import"./Heading-Cdi1sqyd.js";import"./ChevronRight-sVn034m6.js";import"./Badge-DkZxiFUy.js";import"./useMenu-DnkwvAkg.js";import"./InformationSquare-CDbyjiK5.js";import"./Switch-Bw0DTPNN.js";import"./useLocale-HeBn5pwr.js";import"./globalMenu-MRlgukRc.js";import"./PadlockLockedFill-DXh-3J43.js";import"./Buildings2-Csty49W7.js";import"./InboxFill-B7Jq6NB7.js";import"./MenuGrid-1GlxcERj.js";import"./PersonCircle-MN6H_4n_.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BHKe7za1.js";import"./Archive-B5PAnHjV.js";import"./Trash-idftN5YP.js";import"./useAccountMenu-DPQ9Lfnc.js";import"./useAccountsToolbar-CQd04Gg1.js";import"./HeartFill-cZbO-hTL.js";import"./accountDataFetchers-DZ_S5K5X.js";import"./useIsDesktop-bZVgpMG6.js";const mo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const uo=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,uo as __namedExportsOrder,mo as default};
