import{j as o,R as i}from"./iframe-CdkbiINU.js";import{A as n}from"./AccountSelector-C2kSlN_v.js";import{u as s}from"./useGlobalHeader-Dg43Yfnw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClUlC5r_.js";import"./tooltip-ClrKYCC2.js";import"./AccountMenu-eWReyBQ6.js";import"./SearchField-D9zkHyRI.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./useId-BBNwfwR-.js";import"./XMark-CXTea0I2.js";import"./FieldBase-CADFK9ds.js";import"./Typography-CbNgqrog.js";import"./useHighlightedText-Z8eL_Nst.js";import"./Skeleton-DNrLKFK9.js";import"./Label-DOiiUdXJ.js";import"./Input-CXgAq3E9.js";import"./Button-DbqBa2Ra.js";import"./MenuListItem-CwD3vAur.js";import"./MenuListHeading-DRaOclWG.js";import"./MenuItem-DuLXc_4R.js";import"./ItemMedia-Mj1KUH0F.js";import"./Avatar-Dqj4y4ce.js";import"./AvatarGroup-XhgZMwS_.js";import"./Icon-Cn1mWE7M.js";import"./Checkmark-B8HStk1Z.js";import"./Heading-pV_B_Yzg.js";import"./ItemControls-2WNlOUKw.js";import"./ChevronRight-WcqCaCSB.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./useMenu-Cw7IEDma.js";import"./index-D4P432Vi.js";import"./InformationSquare-lXhFqiHS.js";import"./Switch-Cw7IuUMn.js";import"./useLocale-D3mY-h9s.js";import"./globalMenu-tgsqT7sD.js";import"./PersonCircle-LFFErccD.js";import"./Buildings2-B6DX2ZbA.js";import"./InboxFill-DVVOb2iZ.js";import"./MenuGrid-CY0Q_UsS.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-DvWCxKLU.js";import"./Archive-5hJJ1NJt.js";import"./Trash-D4pY1Rc-.js";import"./useAccountMenu-RyIUwxtk.js";import"./HeartFill-vVx3GXlt.js";import"./accountDataFetchers-Cmpuazvu.js";import"./useIsDesktop-BeFJPxgu.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const io=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,io as __namedExportsOrder,no as default};
