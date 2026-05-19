import{j as o,R as i}from"./iframe-CPVbSj3C.js";import{A as n}from"./AccountSelector-rf5kfVpR.js";import{u as m}from"./useGlobalHeader-Bb-9qmIH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-yq3MoC.js";import"./button-ChrWDnnK.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./heading-Byf1hlNK.js";import"./AccountMenu-BgkC_wNu.js";import"./SearchField-B-nnAALe.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./useId-CeU55pH0.js";import"./XMark-DWjKCZtX.js";import"./FieldBase-COzHnWja.js";import"./Typography-CiUpHFvi.js";import"./useHighlightedText-cpJ8B6bV.js";import"./Skeleton-O-y9i0gG.js";import"./Label-VN1m6SC8.js";import"./index-DZJ03fJe.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./Button-D-Q0AT9s.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuListHeading-2OJeU36d.js";import"./MenuItem-CBTlmB_y.js";import"./ItemMedia-C5hW-xxB.js";import"./Avatar-Ctx52zko.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Icon-DFTXBWnL.js";import"./Checkmark-D2vzhSBC.js";import"./Heading-Bxz0tryo.js";import"./ItemControls-DA5Yy7AS.js";import"./ChevronRight-D8cN60Uo.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CE-qOAep.js";import"./index-B7mUU4Rd.js";import"./InformationSquare-y17ZYOyi.js";import"./Switch-kADCV8Cm.js";import"./useLocale-DoH-u2AV.js";import"./globalMenu-0agvsO0_.js";import"./PersonCircle-D2e_Fk0r.js";import"./Buildings2-DTyd86gG.js";import"./InboxFill-BcVdTZOM.js";import"./MenuGrid-Be7605dr.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-DGWiCv9O.js";import"./Archive-DoTzijFK.js";import"./Trash-CN9HTNng.js";import"./useAccountMenu-BXGFvz9G.js";import"./HeartFill-Diwb-etP.js";import"./accountDataFetchers-CmbsGSeQ.js";import"./useIsDesktop-BZmvipjT.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const lo=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,lo as __namedExportsOrder,ao as default};
