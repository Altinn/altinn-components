import{j as o,R as i}from"./iframe-D8UVhXtj.js";import{A as n}from"./AccountSelector-CnfkPvqh.js";import{u as s}from"./useGlobalHeader-iqO80yph.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZ6CWLt4.js";import"./button-BAeX-ygn.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./heading-CfT28zLm.js";import"./AccountMenu-wBGgCIwc.js";import"./SearchField-DrqRDMva.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./useId-B_5z_sER.js";import"./XMark-RzwOtF1Q.js";import"./FieldBase-DzrGcQVO.js";import"./Typography-n-xWt5s-.js";import"./useHighlightedText-CniNcpSk.js";import"./Skeleton-DuOqXwDT.js";import"./Label-b2Pkfnmh.js";import"./index-B_UnVtHx.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./Button-C1dDhU4f.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuListHeading-BCjwSnwp.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./Avatar-DcRqiXhT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Icon-DPTwfvyC.js";import"./Checkmark-DOivg6Pe.js";import"./Heading-BAduz1Vr.js";import"./ChevronRight-BBMrC_JJ.js";import"./Badge-FbSzRhwU.js";import"./useMenu-Bi-E8KDv.js";import"./InformationSquare-BUh6v1hF.js";import"./Switch-kNgrHrgD.js";import"./useLocale-zA5oYOt_.js";import"./globalMenu-CIw7eOzK.js";import"./PadlockLockedFill-BUDlb7K4.js";import"./Buildings2-DUmQJdLd.js";import"./InboxFill-CIHnSU58.js";import"./MenuGrid-CziDD6J5.js";import"./PersonCircle-BNtRxEHU.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BfgjtV9V.js";import"./Archive-yOskI6Ky.js";import"./Trash-CZH-fdX8.js";import"./useAccountMenu-C39NbMwX.js";import"./useAccountsToolbar-MJd7b_--.js";import"./HeartFill-B0BUtMFf.js";import"./accountDataFetchers-CQkDB073.js";import"./useIsDesktop-BHp6sORW.js";const mo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
