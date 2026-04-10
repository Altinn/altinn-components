import{j as o,R as i}from"./iframe-CfpleAaJ.js";import{A as n}from"./AccountSelector-BreEqaAz.js";import{u as s}from"./useGlobalHeader-Y6V5cbyp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-ZlSrx2.js";import"./button-bjClnooE.js";import"./use-merge-refs-0CqQhLRb.js";import"./lite-DaUVFjkg.js";import"./heading-seeqnAgq.js";import"./AccountMenu-DvrZYTKA.js";import"./SearchField-DaxLmgu-.js";import"./MagnifyingGlass-BxOwsnNq.js";import"./useId-CRfl8v3D.js";import"./XMark-Mr05NtnF.js";import"./FieldBase-CjTWVBCf.js";import"./Typography-KZreLO9a.js";import"./useHighlightedText-Cf92T70c.js";import"./Skeleton-mkQz_xZ6.js";import"./Label-BNnaJGt0.js";import"./index-CyGYnAy8.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./Button-DKJP6EaO.js";import"./MenuListItem-Brl922Zx.js";import"./MenuListHeading-BxaazMkW.js";import"./MenuItem-BvkuTBxq.js";import"./ItemMedia-BjhAIHdo.js";import"./Avatar-BBkC-qEC.js";import"./AvatarGroup-vSwCjNL5.js";import"./Icon-DFklvQ48.js";import"./Checkmark-CwtLsQnH.js";import"./Heading-SalYmhoh.js";import"./ChevronRight-F6vNJ-SN.js";import"./Badge-BZbseZdr.js";import"./useMenu-DmjfRwxC.js";import"./InformationSquare-H_9f907d.js";import"./Switch-jyXztMT7.js";import"./useLocale-By0WHoQU.js";import"./globalMenu-XHPWPcDc.js";import"./PadlockLockedFill-BVrWM9G0.js";import"./Buildings2-dioGEkgK.js";import"./InboxFill-BPQ9Huup.js";import"./MenuGrid-ClMY4bMf.js";import"./PersonCircle-Cm8x5lDG.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-FXH6tBKj.js";import"./Archive-DQXPE0eG.js";import"./Trash-CK0t-M2f.js";import"./useAccountMenu-C-I3dxhF.js";import"./useAccountsToolbar-D2q6MUHo.js";import"./HeartFill-CVYiNdJZ.js";import"./accountDataFetchers-D1VBfSUD.js";import"./useIsDesktop-Cz6jl_Dv.js";const mo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
