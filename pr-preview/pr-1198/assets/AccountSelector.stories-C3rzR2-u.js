import{j as o,R as i}from"./iframe-CbC-fLaY.js";import{A as n}from"./AccountSelector-DS9IofOb.js";import{u as s}from"./useGlobalHeader-DRsuiwin.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ds9VDGIC.js";import"./tooltip-BtbQ4KG6.js";import"./AccountMenu-xmO_qzm_.js";import"./SearchField-yE8KzlZV.js";import"./MagnifyingGlass-CyeXkGZ3.js";import"./useId-C2JQsT24.js";import"./XMark-DvUzU3_h.js";import"./FieldBase-D2jwyGQb.js";import"./Typography-BWnrNFau.js";import"./useHighlightedText-BssbQrxH.js";import"./Skeleton-D8kEQByH.js";import"./Label-DN-jQPwh.js";import"./Input-BNbo7Vjn.js";import"./Button-B0m1rUs2.js";import"./MenuListItem-DBiuOcpf.js";import"./MenuListHeading-C1HjQPPY.js";import"./MenuItem-BUq3aL73.js";import"./ItemMedia-CsSXB_1W.js";import"./Avatar-CmrLTlqi.js";import"./AvatarGroup-CtTcTi_X.js";import"./Icon-DW3Nd0-m.js";import"./Checkmark-8GuDUS8U.js";import"./Heading-Bl7p7Gle.js";import"./ItemControls-gQT1qCQ5.js";import"./ChevronRight-CThQJEOF.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./useMenu-a79SM2ar.js";import"./index-DDRVeLeZ.js";import"./InformationSquare-CQq7uvJQ.js";import"./Switch-Bt1XFAG8.js";import"./useLocale-CBk_fCN-.js";import"./globalMenu-DaLxtLwP.js";import"./PersonCircle-De3VEI5u.js";import"./Buildings2-BODn5oQY.js";import"./InboxFill-BGQmVAC5.js";import"./MenuGrid-CBHgYnvP.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BnMrkDUU.js";import"./Archive-DZm8Lj52.js";import"./Trash-oVpQevMD.js";import"./useAccountMenu--4_Dk7tP.js";import"./HeartFill-BeQXSG1V.js";import"./accountDataFetchers-Dy-E0Gmq.js";import"./useIsDesktop-Cd7k0tdp.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
