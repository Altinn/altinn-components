import{j as o,R as i}from"./iframe-DxxW_Hah.js";import{A as n}from"./AccountSelector-D1K_AtQ5.js";import{u as s}from"./useGlobalHeader-CSGYsxSo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-pOAXHZ6n.js";import"./button-BBYE_PPH.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./heading-DEeIb41B.js";import"./AccountMenu-BAmeImH5.js";import"./SearchField-ptc2QeHn.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./useId-CckRU7I8.js";import"./XMark-ChXBbXGN.js";import"./FieldBase-ttSv04zw.js";import"./Typography-CfTPPq_a.js";import"./useHighlightedText-C9OLcmcP.js";import"./Skeleton-DiRARuJ9.js";import"./Label-YFmv6AXl.js";import"./index-D2WP85Bl.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./Button-CcwbSiKg.js";import"./MenuListItem-BWh93a_i.js";import"./MenuListHeading-CIz6aOLR.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./Avatar--rA6gsID.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Icon-Cf03fdWw.js";import"./Checkmark-pZi8btQa.js";import"./Heading-Bejow2zA.js";import"./ChevronRight-CqOTbusb.js";import"./Badge-CQ9EBUDZ.js";import"./useMenu-DMxEdeKU.js";import"./InformationSquare-CuO8i3VE.js";import"./Switch-Cl1wfjZx.js";import"./useLocale-B64NNVhT.js";import"./globalMenu-CHUXPI0D.js";import"./PadlockLockedFill-DjhGUlrA.js";import"./Buildings2-DqbPfXdH.js";import"./InboxFill-CZgZlZUi.js";import"./MenuGrid-XEpy1Ykj.js";import"./PersonCircle-DLHnaxgO.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-B8Ru0JCx.js";import"./Archive-DnNxZuyO.js";import"./Trash-CiL8T8GI.js";import"./useAccountMenu-C14uSFDv.js";import"./useAccountsToolbar-DfXqcE7r.js";import"./HeartFill-B6hLMDo_.js";import"./accountDataFetchers-DS5jULos.js";import"./useIsDesktop-B3tDsVL2.js";const mo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const uo=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,uo as __namedExportsOrder,mo as default};
