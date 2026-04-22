import{j as o,R as i}from"./iframe-Bs6hWG43.js";import{A as n}from"./AccountSelector-B9ncNyCV.js";import{u as m}from"./useGlobalHeader-D00saxOx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbNSDn3W.js";import"./button-BtRKSTW7.js";import"./use-merge-refs-CXrn4uAk.js";import"./lite-DaUVFjkg.js";import"./heading-CPUX60Y9.js";import"./AccountMenu-2CevzA1_.js";import"./SearchField-CTJqYruH.js";import"./MagnifyingGlass-ByFYxaCQ.js";import"./useId-eW1Sa_eP.js";import"./XMark-Cx14Anho.js";import"./FieldBase-BwWmF8XK.js";import"./Typography-4Wb6MR64.js";import"./useHighlightedText-ByR3-iok.js";import"./Skeleton-7NyHq6Da.js";import"./Label-CqwIAbNx.js";import"./index--1NR6hdE.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./Button-eHvnmE12.js";import"./MenuListItem-CaCKNFL_.js";import"./MenuListHeading-DBtCNSz-.js";import"./MenuItem-BL3nnmC3.js";import"./ItemMedia-B6-8h9P0.js";import"./Avatar-BN7VNN79.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Icon-DjH00Hl5.js";import"./Checkmark-YSQh9b-J.js";import"./Heading-C3DAZ3La.js";import"./ItemControls-CsoavSOP.js";import"./ChevronRight-Xe9lB9nu.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Be0b91uO.js";import"./InformationSquare-C3jahF3t.js";import"./Switch-Dn8rI5yW.js";import"./useLocale-OZYAWDhw.js";import"./globalMenu-CFB8jQ9A.js";import"./PadlockLockedFill-BXq9NBUs.js";import"./Buildings2-C_qK0eIC.js";import"./InboxFill-BK04Il4-.js";import"./MenuGrid-C79u-zFE.js";import"./PersonCircle-DLeV-T_K.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BgCDBriW.js";import"./Archive-9LOoqKn0.js";import"./Trash-DPxs7CFK.js";import"./useAccountMenu-BGeaA_Ts.js";import"./useAccountsToolbar--B4K0ilU.js";import"./HeartFill-CbmnLuuf.js";import"./accountDataFetchers-BUzTytCL.js";import"./useIsDesktop-DbymL6Pk.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
