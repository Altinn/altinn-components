import{j as o,R as i}from"./iframe-DgiLb7Jh.js";import{A as n}from"./AccountSelector-C05Lq8GR.js";import{u as s}from"./useGlobalHeader-ygts8ssB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzzvqmNv.js";import"./button-2pQtb28r.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";import"./heading-pw09yoix.js";import"./AccountMenu-DJcMWRL0.js";import"./SearchField-CTb1s1hd.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./useId-6J1VG5PF.js";import"./XMark-DE16CL-6.js";import"./FieldBase-B0t89PB6.js";import"./Typography-Bp8CNLT3.js";import"./useHighlightedText-C3KXFHAg.js";import"./Skeleton-CjXkBVSw.js";import"./Label-6LQ7LXNA.js";import"./index-Cu0iGtDM.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./Button-D7CoEZHH.js";import"./MenuListItem-BzaUHJzz.js";import"./MenuListHeading-BHx30WUA.js";import"./MenuItem-CM4esdkj.js";import"./ItemMedia-BvSNOAVc.js";import"./Avatar-D2ea3_hU.js";import"./AvatarGroup-BGNg7yRW.js";import"./Icon-uoDJWBW9.js";import"./Checkmark-49Lv_3MM.js";import"./Heading-CAIwUoS2.js";import"./ChevronRight-B8GqJ6hU.js";import"./Badge-DFo-bNGw.js";import"./useMenu-7q5OpfBf.js";import"./InformationSquare-CZhEVvng.js";import"./Switch-CQ9i4TBM.js";import"./useLocale-Ckhi8jiz.js";import"./globalMenu-6DJB3M--.js";import"./PadlockLockedFill-CO86K5pC.js";import"./Buildings2-B3-eOzM1.js";import"./InboxFill-2LP2zszg.js";import"./MenuGrid-DDphszev.js";import"./PersonCircle-Cp_h5SKP.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BMlh_PGy.js";import"./Archive-DCJg-9Yj.js";import"./Trash-1SNvNmMf.js";import"./useAccountMenu-DhXEg9tW.js";import"./useAccountsToolbar-D87yQfAd.js";import"./HeartFill-BCkF_MLv.js";import"./accountDataFetchers-Jy9twHsb.js";import"./useIsDesktop-DnJ6rrKA.js";const mo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
