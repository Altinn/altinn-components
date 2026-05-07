import{j as o,R as i}from"./iframe-Cqj3AiBb.js";import{A as n}from"./AccountSelector-K6AFxsIB.js";import{u as m}from"./useGlobalHeader-YGPvkGat.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHG1hv9Q.js";import"./button-CcZ_KMhQ.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./heading-BCk6Lw7-.js";import"./AccountMenu-DDR4vCda.js";import"./SearchField-qenOIdRZ.js";import"./MagnifyingGlass-fMCV_alc.js";import"./useId-Bi-DL88I.js";import"./XMark-ReENydG3.js";import"./FieldBase-DDsWnoQi.js";import"./Typography-CV-E4tqG.js";import"./useHighlightedText-Cyl54eZj.js";import"./Skeleton-B33vAz-c.js";import"./Label-URmODKr6.js";import"./index-BZqr7PxG.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./Button-DYwdzfZG.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuListHeading-CixMX2n6.js";import"./MenuItem-BHtFBHA3.js";import"./ItemMedia-DihsrAKt.js";import"./Avatar-D1U6ps5a.js";import"./AvatarGroup-CmMUwf3A.js";import"./Icon-CHi77IUK.js";import"./Checkmark-BFwQvgMU.js";import"./Heading-CJiOkJPI.js";import"./ItemControls-eJMUKPOH.js";import"./ChevronRight-CxmxTIkT.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./InformationSquare-DK31GEUT.js";import"./Switch-Dd7wCyBA.js";import"./useLocale-BwYOMWnF.js";import"./globalMenu-CsbiSy3A.js";import"./PersonCircle-sKNvHz4D.js";import"./Buildings2-CW6Ln2Lr.js";import"./InboxFill-B-I70TLd.js";import"./MenuGrid-Dnrx8ipH.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-ykz9HJCL.js";import"./Archive-Brm_9A3i.js";import"./Trash-B8H25DCw.js";import"./useAccountMenu-BNVwIEiq.js";import"./HeartFill-DCHu72W2.js";import"./accountDataFetchers-BwiTeXHA.js";import"./useIsDesktop-BA5ox44l.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
