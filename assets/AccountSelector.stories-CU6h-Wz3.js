import{j as o,R as i}from"./iframe-qDHSBZ_X.js";import{A as n}from"./AccountSelector-Dkj6TLtf.js";import{u as s}from"./useGlobalHeader-CY-M3DLx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTh2bawh.js";import"./button-CfQ7EAt1.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";import"./heading-vUD5AL2p.js";import"./AccountMenu-BPVsDnJ8.js";import"./SearchField-owOVnt34.js";import"./MagnifyingGlass-52kli1F6.js";import"./useId-DLE_nI5l.js";import"./XMark-D8iHP3Cp.js";import"./FieldBase-36tTBvzs.js";import"./Typography-DhQz7tKb.js";import"./useHighlightedText-D75SWcvd.js";import"./Skeleton-CJ3n2_6V.js";import"./Label-UpgatIiv.js";import"./index-C32uHHVZ.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./Button-DJMfIG2l.js";import"./MenuListItem-BPMBfOBa.js";import"./MenuListHeading-CFSESgmr.js";import"./MenuItem-CYIZHSHo.js";import"./ItemMedia-p3tZByS2.js";import"./Avatar-BNcU10On.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Icon-BDVkMuHy.js";import"./Checkmark-BOxDKZpX.js";import"./Heading-D2BacHeJ.js";import"./ItemControls-Bd_Ry2Op.js";import"./ChevronRight-Dusr5JiS.js";import"./Badge-CmtcZ1do.js";import"./useMenu-5iviLK-9.js";import"./InformationSquare-ClYcp41K.js";import"./Switch-De1PckpN.js";import"./useLocale-CTv2FvCh.js";import"./globalMenu-DqtPhsQy.js";import"./PadlockLockedFill-BddiA20c.js";import"./Buildings2-C_FVhRBN.js";import"./InboxFill-B6eVCR7Z.js";import"./MenuGrid-3DWra2SS.js";import"./PersonCircle-C3nIC3U_.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-DqrqTlox.js";import"./Archive-C71dF3LI.js";import"./Trash-CJ5RcE6N.js";import"./useAccountMenu-BWkVIsm5.js";import"./useAccountsToolbar-Bk9fVywH.js";import"./HeartFill-9bAGTslX.js";import"./accountDataFetchers-BHWNt8M1.js";import"./useIsDesktop-BFZhxv40.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
