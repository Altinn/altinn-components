import{j as o,R as i}from"./iframe-C32LkOFR.js";import{A as n}from"./AccountSelector-2ay3anmC.js";import{u as s}from"./useGlobalHeader-BLGT4eD2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B41-Gq6i.js";import"./tooltip-C1z0ba6x.js";import"./AccountMenu-D13tDpE5.js";import"./SearchField-CSvKC2kE.js";import"./MagnifyingGlass-WQhuuXQl.js";import"./useId-C6VS968l.js";import"./XMark-CJ_7TJfx.js";import"./FieldBase-C4PiPQJY.js";import"./Typography-BtAt1mkJ.js";import"./useHighlightedText-TWz6a-kb.js";import"./Skeleton-BFp1Ns5z.js";import"./Label--g4FWuur.js";import"./Input-944JhKVs.js";import"./Button-DJyTPLgL.js";import"./MenuListItem-CpDZm8hJ.js";import"./MenuListHeading-DFXzzdQl.js";import"./MenuItem-B2ec7Awl.js";import"./ItemMedia-Bzb68dd0.js";import"./Avatar-Bfhk-MsW.js";import"./AvatarGroup-CngdFV9S.js";import"./Icon-ClcJ2Ugl.js";import"./Checkmark-Cohtyyf2.js";import"./Heading-C2AVc7ZV.js";import"./ItemControls-6sDFc5WV.js";import"./ChevronRight-BRam3foO.js";import"./Badge-B5rN9dZh.js";import"./Tooltip-D2U0c2nY.js";import"./useMenu-CglJcFc3.js";import"./index-DD5_FiA2.js";import"./InformationSquare-BqsScoMm.js";import"./Switch-6v-VyuZR.js";import"./useLocale-dH69KaSQ.js";import"./globalMenu-D8wHdbGP.js";import"./PersonCircle-NpZjwD6u.js";import"./Buildings2-DWFUVmyZ.js";import"./InboxFill-CFq9SYOT.js";import"./MenuGrid-CUkG-sMG.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BsIrq4-c.js";import"./Archive-DlpjqB3V.js";import"./Trash-C9CuwFFb.js";import"./useAccountMenu-1EjrHnhT.js";import"./HeartFill-C7oIvOKf.js";import"./accountDataFetchers-C_fLK9x5.js";import"./useIsDesktop-CuiebE6s.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
