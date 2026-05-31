import{p as o,g as i}from"./iframe-B0raGbVc.js";import{A as n}from"./AccountSelector-BH3UH1p6.js";import{u as s}from"./useGlobalHeader-DyaVz4g6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BFPoepm_.js";import"./tooltip-C563LrpG.js";import"./SearchField-x-7DN5Df.js";import"./MagnifyingGlass-M1myOHdK.js";import"./useId-DjmMrSjF.js";import"./XMark-Vu63tlKp.js";import"./FieldBase-COYRg4qt.js";import"./Typography-aMX_Xall.js";import"./useHighlightedText-Cy927kZm.js";import"./Skeleton-Bie46BNt.js";import"./Label-BU6sA0x8.js";import"./Input-DWL065bb.js";import"./Button-DaZ5Xj9O.js";import"./useMenu-DBDHaupH.js";import"./MenuListItem-Cqp8gCsN.js";import"./MenuListHeading-BOiM7js_.js";import"./MenuItem-CO5pm5KV.js";import"./ItemMedia-vIK6hHXj.js";import"./Avatar-C_p7vVVJ.js";import"./AvatarGroup-CCFl7ITU.js";import"./Icon-CkGS8ofh.js";import"./Checkmark-w1Y8-xSD.js";import"./ItemLabel-WiIVldH2.js";import"./Heading-HwRbtbil.js";import"./ItemControls-0LHp_bwC.js";import"./Badge-LVeKbEwp.js";import"./Tooltip-drcV-Psw.js";import"./ChevronRight-B1cS3dE4.js";import"./index-BdK8fp8H.js";import"./InformationSquare-C1Z5-XLz.js";import"./Switch-CQ1PRon6.js";import"./AccountMenu-BWc1PKxE.js";import"./useLocale-DmzadgfT.js";import"./globalMenu-DbjpNPI4.js";import"./PersonCircle-DOuAmZXx.js";import"./Buildings2-DeC070E3.js";import"./InboxFill-DJoVC9qo.js";import"./MenuGrid-DK0uYbWy.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-B7H3bnum.js";import"./Archive-uIJiMAtn.js";import"./Trash-Bu2Rqg9N.js";import"./useAccountMenu-xM7JxiDO.js";import"./HeartFill--8H9FBxU.js";import"./accountDataFetchers-CTJ72Xuc.js";import"./useIsDesktop-Cwvy_3Jm.js";const io={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const po=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,po as __namedExportsOrder,io as default};
