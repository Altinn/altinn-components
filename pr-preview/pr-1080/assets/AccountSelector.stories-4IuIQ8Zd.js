import{j as o,R as i}from"./iframe-CRyMHjBa.js";import{A as n}from"./AccountSelector-BINlozsb.js";import{u as s}from"./useGlobalHeader-D64pV_Mg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHHnxdIx.js";import"./button-W5jAAf--.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./heading-Bibxhi_K.js";import"./AccountMenu-CMsKOU5R.js";import"./SearchField-DHI_G06y.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./useId-Gvikg1Q9.js";import"./XMark-Bzo2iZ4y.js";import"./FieldBase-CJQ_rSUH.js";import"./Typography-KJ3duhAj.js";import"./useHighlightedText-Bmeo4cMl.js";import"./Skeleton-CU7lBKK8.js";import"./Label-BTqPQVQX.js";import"./index-DK7gfoBf.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./Button-CrFbX_o6.js";import"./MenuListItem-DntYuD8P.js";import"./MenuListHeading-BM8Os7Ca.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./Avatar-CTjQUhWB.js";import"./AvatarGroup-B0xdyHS8.js";import"./Icon-BfxILC1T.js";import"./Checkmark-DF0LRIQJ.js";import"./Heading-DKMjfDI1.js";import"./ChevronRight-CBrYYsjR.js";import"./Badge-DxjDnsAp.js";import"./useMenu-lx2RC1HO.js";import"./InformationSquare-BIUK32sG.js";import"./Switch-FFOJZeUz.js";import"./useLocale-BzessGcj.js";import"./globalMenu-DbjJGUDw.js";import"./PadlockLockedFill-CAhpGFrP.js";import"./Buildings2-D7GR9rXY.js";import"./InboxFill-CfQPaBE-.js";import"./MenuGrid-CKTBqn5C.js";import"./PersonCircle-DpRnLJ5U.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BZtiRB5z.js";import"./Archive-DkDv7ZML.js";import"./Trash-DL1Wx2eb.js";import"./useAccountMenu-D5pMgQzw.js";import"./useAccountsToolbar-BA64InwV.js";import"./HeartFill-qjzW7uoi.js";import"./accountDataFetchers-DJ3IrvLY.js";import"./useIsDesktop-C5D59x5L.js";const mo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
