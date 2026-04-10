import{j as o,R as i}from"./iframe-CEV_bE_y.js";import{A as n}from"./AccountSelector-B4cd66jm.js";import{u as s}from"./useGlobalHeader-K8J7Op3F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGpVDQnA.js";import"./button-B-6jfb5R.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./heading-D3Tt8F81.js";import"./AccountMenu-adZ4jcQl.js";import"./SearchField-C9XAkfHX.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./useId-BHfJgDBc.js";import"./XMark-ByuttVGc.js";import"./FieldBase-D397wWlI.js";import"./Typography-BMVOyH8m.js";import"./useHighlightedText-DdOlAfmT.js";import"./Skeleton-cNOPtI7P.js";import"./Label-Cb-tqHHM.js";import"./index-Cr9j_S5O.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./Button-Camg-mBZ.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuListHeading-BxT-phiC.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Icon-BwPDmLy2.js";import"./Checkmark-D-WBqViW.js";import"./Heading-CjHEKkoD.js";import"./ItemControls-Dsxd0fj6.js";import"./ChevronRight-Dck0Zh1j.js";import"./Badge-BVMw9Rw0.js";import"./useMenu-EIG5MfCS.js";import"./InformationSquare-C-romZo4.js";import"./Switch-Br9M89v1.js";import"./useLocale-ChwWafHA.js";import"./globalMenu-DMBqT3bV.js";import"./PadlockLockedFill-Dg6xF2gV.js";import"./Buildings2-DLWHFsKX.js";import"./InboxFill-DTZLIyGz.js";import"./MenuGrid-D-AQupNN.js";import"./PersonCircle-DkfM7_Ed.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-CFo8DrTV.js";import"./Archive-DWBVULf9.js";import"./Trash-DL6cPj-R.js";import"./useAccountMenu-42OF9cBc.js";import"./useAccountsToolbar-DGGVcX76.js";import"./HeartFill-Bf2nTARw.js";import"./accountDataFetchers-DmU9W13U.js";import"./useIsDesktop-BlUQDDAY.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
