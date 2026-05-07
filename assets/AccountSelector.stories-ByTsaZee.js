import{j as o,R as i}from"./iframe-BakMcPB9.js";import{A as n}from"./AccountSelector-DNnZOxUy.js";import{u as s}from"./useGlobalHeader-DnUnexEo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAwqyEdM.js";import"./button-Dqq-cscz.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./heading-EL6ZIu79.js";import"./AccountMenu-CQ_VEF0u.js";import"./SearchField-rHpPiKo0.js";import"./MagnifyingGlass-BCCA0_9u.js";import"./useId-Btw-Kuqp.js";import"./XMark-D8cLqedS.js";import"./FieldBase-B35pktZu.js";import"./Typography-BzplxmiV.js";import"./useHighlightedText-nzhiVGnc.js";import"./Skeleton-CIZGLt5B.js";import"./Label-D58ijrT7.js";import"./index-Dmny_mDx.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./Button-BJ-P2q8B.js";import"./MenuListItem-DLQbcaMe.js";import"./MenuListHeading-BYFBzopx.js";import"./MenuItem-DOoZvP8c.js";import"./ItemMedia-CMtvzv_T.js";import"./Avatar-bwZt4czp.js";import"./AvatarGroup-DgPgqKip.js";import"./Icon-D4ysQTre.js";import"./Checkmark-Bv6xEUnW.js";import"./Heading-Dpm-6zaj.js";import"./ItemControls-BIaUvdXD.js";import"./ChevronRight-C2TalX8u.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BaGtO6Vm.js";import"./InformationSquare-XaKmtjKI.js";import"./Switch-xtMa6te7.js";import"./useLocale-Df2NxEB4.js";import"./globalMenu-BcibZR63.js";import"./PersonCircle-ORAuXLOM.js";import"./Buildings2-AdE5hB6g.js";import"./InboxFill-CiG_afGx.js";import"./MenuGrid-lPKzDSTw.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-Cm0-2Exr.js";import"./Archive-BR--IAyW.js";import"./Trash-C23JfHvO.js";import"./useAccountMenu-B3wqCLAq.js";import"./HeartFill-C97JobCu.js";import"./accountDataFetchers-BLj3TA-F.js";import"./useIsDesktop-DD1-kwof.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
