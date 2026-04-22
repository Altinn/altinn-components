import{j as o,R as i}from"./iframe-C5YDQF8t.js";import{A as n}from"./AccountSelector-CZO_KYNg.js";import{u as m}from"./useGlobalHeader-CinN1fPB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Wv9BNi45.js";import"./button-CCJ82TCy.js";import"./use-merge-refs-C8sdFhVy.js";import"./lite-DaUVFjkg.js";import"./heading-C5g45Nor.js";import"./AccountMenu-C9TvoUjI.js";import"./SearchField-DhRNQpTW.js";import"./MagnifyingGlass-CEZChhW1.js";import"./useId-D8_RB8wa.js";import"./XMark-DdTqeOk-.js";import"./FieldBase-BeNWnE8F.js";import"./Typography-yp9Qf0rT.js";import"./useHighlightedText-n06FiY88.js";import"./Skeleton-Drx-E9Fo.js";import"./Label-DtjEPZjV.js";import"./index-B1UWFYtY.js";import"./Input-CBT5zBbT.js";import"./input-D6WzUQ9f.js";import"./Button-BZAGm3c0.js";import"./MenuListItem-Dn26XcpH.js";import"./MenuListHeading-b0m4AzBM.js";import"./MenuItem-WQ9gCGs0.js";import"./ItemMedia-FRtQjDq_.js";import"./Avatar-BGjXXmrj.js";import"./AvatarGroup-DQC0T1Vh.js";import"./Icon-CecLgcvt.js";import"./Checkmark-B_9eKN07.js";import"./Heading-DpfkgbSv.js";import"./ItemControls-B4P5BjHw.js";import"./ChevronRight-N4TcqxLw.js";import"./Badge-BloMeVT9.js";import"./Tooltip-BhYnScUh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BhI6CQre.js";import"./InformationSquare-BnjsTJI5.js";import"./Switch-CCPkcRPo.js";import"./useLocale-MWkbtFJd.js";import"./globalMenu-BxuyzCtB.js";import"./PadlockLockedFill-GHxmhAmq.js";import"./Buildings2-CCtuJzKi.js";import"./InboxFill-BqOp0fif.js";import"./MenuGrid-BF8Rqd0Y.js";import"./PersonCircle-BcOgqqgZ.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-CibaDFrx.js";import"./Archive-vblwy2cE.js";import"./Trash-D8RBkZPj.js";import"./useAccountMenu-Bm9YPwMm.js";import"./useAccountsToolbar-BOH-O7aK.js";import"./HeartFill-CPf7_OAe.js";import"./accountDataFetchers-D6V5hkEc.js";import"./useIsDesktop-CUL1litC.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
