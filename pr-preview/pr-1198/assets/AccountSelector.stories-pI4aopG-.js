import{j as o,R as i}from"./iframe-YdRL1NzV.js";import{A as n}from"./AccountSelector-CBZe8-wp.js";import{u as s}from"./useGlobalHeader-ByO61eUH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SoIsie1y.js";import"./tooltip-D0NJwlFT.js";import"./AccountMenu-GRew5JA2.js";import"./SearchField-Cp2PZLrm.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./useId-DxHKrSZ4.js";import"./XMark-1l7ZvP46.js";import"./FieldBase-KNsWphki.js";import"./Typography-CYgzLoEf.js";import"./useHighlightedText-DI-ykGTt.js";import"./Skeleton-C3i9Ug5T.js";import"./Label-CoBwam8t.js";import"./Input-Co3wY2OB.js";import"./Button-BwQOxknK.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuListHeading-DregQKpB.js";import"./MenuItem-DdZPav2y.js";import"./ItemMedia-BNRd-cb6.js";import"./Avatar-02T2Z9c_.js";import"./AvatarGroup-B9OCrS5P.js";import"./Icon-B4-srULI.js";import"./Checkmark-Ple-kG_b.js";import"./Heading-56B0sdRG.js";import"./ItemControls-CMhfwURs.js";import"./ChevronRight-DrXpgbb_.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";import"./InformationSquare-C3wG0Qjz.js";import"./Switch-D1PNyCrc.js";import"./useLocale-fq-ByQjj.js";import"./globalMenu-Cqcpsk_z.js";import"./PersonCircle-BIq4InXd.js";import"./Buildings2-Bu8VfWPO.js";import"./InboxFill-Dhs0ejSb.js";import"./MenuGrid-TIfk-A40.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-COWjnrxW.js";import"./Archive-C1GJOqq_.js";import"./Trash-Bas2iEP8.js";import"./useAccountMenu-zHaDwVov.js";import"./HeartFill-xZwyoFnY.js";import"./accountDataFetchers-B2r5_Xvb.js";import"./useIsDesktop-DNaKtoN_.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
