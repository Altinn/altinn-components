import{j as o,R as i}from"./iframe-C30XMp4u.js";import{A as n}from"./AccountSelector-CyLyTHT1.js";import{u as s}from"./useGlobalHeader-OiJ3ZPmk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dfjgmy9H.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./heading-BBwhIecZ.js";import"./AccountMenu-BVv7F0Yo.js";import"./SearchField-GqHOGaRS.js";import"./MagnifyingGlass-BcLoywmE.js";import"./useId-k4Xjw1TB.js";import"./XMark-ZCF0kQw6.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./useHighlightedText-BcdufPkD.js";import"./Skeleton-DYu3bsVd.js";import"./Label-CZ9Sm67x.js";import"./index-MPuYdx8K.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./Button-DDYo0e3Y.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Icon-BW7eZq3t.js";import"./Checkmark-BHVaOMRl.js";import"./Heading-r7KrHQRq.js";import"./ItemControls-XLXkfke2.js";import"./ChevronRight-cMtudnfA.js";import"./Badge-BL5WZhsc.js";import"./useMenu-HLwWT2ab.js";import"./InformationSquare-Cu6RA9m9.js";import"./Switch-Bo_I4-2B.js";import"./useLocale-5IFfg7OW.js";import"./globalMenu-O69Jbdcr.js";import"./PadlockLockedFill-CKYmUPSl.js";import"./Buildings2-BCw0Kg2z.js";import"./InboxFill-ZOk75VQL.js";import"./MenuGrid-B8ciIJjM.js";import"./PersonCircle-BJhFQVEb.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-Bq9PXl-2.js";import"./Archive-BZkpamMr.js";import"./Trash-CAta8Rpy.js";import"./useAccountMenu-DOKkCLzC.js";import"./useAccountsToolbar-C22P-BSb.js";import"./HeartFill-n4y15MUI.js";import"./accountDataFetchers-DcYqTLt-.js";import"./useIsDesktop-r8DH4xrH.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
