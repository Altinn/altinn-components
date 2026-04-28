import{j as o,R as i}from"./iframe-DUgQHy5z.js";import{A as n}from"./AccountSelector-PedD5jOO.js";import{u as m}from"./useGlobalHeader-CNUyTxUh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHKdKrFD.js";import"./button-D0axoqj3.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./heading-BK46rBC9.js";import"./AccountMenu-8gwTG4_u.js";import"./SearchField-DrvAfAqD.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./useId-BEmmm-9F.js";import"./XMark-CIC6hSAY.js";import"./FieldBase-B3m8Pe0B.js";import"./Typography-CInfIHKg.js";import"./useHighlightedText-BXy_Fo0F.js";import"./Skeleton-BWHbMU5J.js";import"./Label-B-nIzD7x.js";import"./index-DtFuKRqq.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./Button-DAj4Vb1f.js";import"./MenuListItem-Cobo65pu.js";import"./MenuListHeading-USeQ6WLV.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./Avatar-CQy8D3NB.js";import"./AvatarGroup-DAp73R1d.js";import"./Icon-D31Usj2D.js";import"./Checkmark-CEKDqcfc.js";import"./Heading-CGuufgH4.js";import"./ItemControls-eEEzDso3.js";import"./ChevronRight-DcPr7c69.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DKqXZTHj.js";import"./InformationSquare-C5uyE4ek.js";import"./Switch-B4GoFuUp.js";import"./useLocale-D8vLRJkT.js";import"./globalMenu-CusR0aRA.js";import"./PadlockLockedFill-TYz325xT.js";import"./Buildings2-DA0PLkI3.js";import"./InboxFill-DFOQHMM1.js";import"./MenuGrid-BFXheAVa.js";import"./PersonCircle-zi-Qrj_q.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BAKdMXQt.js";import"./Archive-BPO8NoVo.js";import"./Trash-palqR5xc.js";import"./useAccountMenu-BzhCGaz3.js";import"./useAccountsToolbar-Bfww5QV_.js";import"./HeartFill-BuCGHZZm.js";import"./accountDataFetchers-DsnlsUxZ.js";import"./useIsDesktop-DrWtlE9w.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
