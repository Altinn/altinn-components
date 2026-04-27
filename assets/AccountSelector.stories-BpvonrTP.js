import{j as o,R as i}from"./iframe-B56t8i7v.js";import{A as n}from"./AccountSelector-CwFOsb_h.js";import{u as m}from"./useGlobalHeader-h-M27l7D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHgNdXFp.js";import"./button-BSGP1CSM.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./heading-DXmPhnVV.js";import"./AccountMenu-BF1zYUjX.js";import"./SearchField-BtQfQfgA.js";import"./MagnifyingGlass-U17pnqdh.js";import"./useId-Ce_44NzT.js";import"./XMark-CQR84vCO.js";import"./FieldBase-BkGCBc8B.js";import"./Typography-C36VcWyw.js";import"./useHighlightedText-YMvuFtwb.js";import"./Skeleton-Cer98cLN.js";import"./Label-Bx5THtMF.js";import"./index-pNH6Tvi1.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./Button-x4ugPYkx.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuListHeading-B46vfCnX.js";import"./MenuItem-CtKw3GMz.js";import"./ItemMedia-DJxakqLL.js";import"./Avatar-_1995Z8x.js";import"./AvatarGroup-kqIJtB4O.js";import"./Icon-CgN9F-ql.js";import"./Checkmark-cFLQXWmW.js";import"./Heading-B0k14T1s.js";import"./ItemControls-DurpuKFn.js";import"./ChevronRight-VYKVaZtU.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Bz8Gr0jh.js";import"./InformationSquare-TMwz5OzD.js";import"./Switch-Ch_BWUCO.js";import"./useLocale-BlXJktaZ.js";import"./globalMenu-BJLTogqL.js";import"./PadlockLockedFill-b2QY2ao5.js";import"./Buildings2-Cmz8iX3m.js";import"./InboxFill-CKfO2UBM.js";import"./MenuGrid-DOIPFHmi.js";import"./PersonCircle-DvEbo7K4.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-DhU-ifQv.js";import"./Archive-C86xORiC.js";import"./Trash-CCj34_zQ.js";import"./useAccountMenu-66yDReJd.js";import"./useAccountsToolbar-BC4dVOr7.js";import"./HeartFill-yVQ7LC3O.js";import"./accountDataFetchers-y8Z7ksfa.js";import"./useIsDesktop-CFGjVeHW.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const So=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,So as __namedExportsOrder,lo as default};
