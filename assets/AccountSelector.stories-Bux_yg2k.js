import{j as o,R as i}from"./iframe-BFO1Hsm7.js";import{A as n}from"./AccountSelector-BgiUgb5b.js";import{u as s}from"./useGlobalHeader-C9Ogs43f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-q4P8UESO.js";import"./tooltip-DUJ67ouq.js";import"./AccountMenu-DB3Kg0sC.js";import"./SearchField-BsaRMZXP.js";import"./MagnifyingGlass-BT5t3YH7.js";import"./useId-Bk4Ffxqs.js";import"./XMark-DHT-JiZe.js";import"./FieldBase-BLwJwwaJ.js";import"./Typography-Bd9N_lP-.js";import"./useHighlightedText-BBNMb3RU.js";import"./Skeleton-BRac3_14.js";import"./Label-D5tsUrXq.js";import"./Input-D60Cokb5.js";import"./Button-D67YnkXJ.js";import"./MenuListItem-DzO3mXQV.js";import"./MenuListHeading-D6MF194z.js";import"./MenuItem-C9MWQovM.js";import"./ItemMedia-C5bbkB29.js";import"./Avatar-KSmNIbNE.js";import"./AvatarGroup-V6EVtbEK.js";import"./Icon-B4PZu81w.js";import"./Checkmark-BeWey6nu.js";import"./Heading-BaJonbem.js";import"./ItemControls-Dko-TfIa.js";import"./ChevronRight-CdUbwk3C.js";import"./Badge-DsEojOp1.js";import"./Tooltip-rGuNyqhX.js";import"./useMenu-kKDgIapy.js";import"./index-CzpMp7Co.js";import"./InformationSquare-Csa1evZE.js";import"./Switch-CJtdm7zY.js";import"./useLocale-CKZ4LYg3.js";import"./globalMenu-DmuqYb_d.js";import"./PersonCircle-DLojyqEs.js";import"./Buildings2-DhoPF_ay.js";import"./InboxFill-CpT0xyOA.js";import"./MenuGrid-DN8Jqzbv.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CJbuW2m4.js";import"./Archive-CTVg4aGD.js";import"./Trash-BNKVyqtr.js";import"./useAccountMenu-BFW7uhgu.js";import"./HeartFill-CbK5EbXL.js";import"./accountDataFetchers-BuCFGo_M.js";import"./useIsDesktop-zysGFr7R.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
