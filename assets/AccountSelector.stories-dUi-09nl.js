import{j as o,R as i}from"./iframe-B1AqnzaQ.js";import{A as n}from"./AccountSelector-BJzxParc.js";import{u as s}from"./useGlobalHeader-CF2T4B8N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ddi2Dmvi.js";import"./button-HgPz3r79.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./heading-B1eUioiz.js";import"./AccountMenu-Cm8YHXc8.js";import"./SearchField-BEy1JMqM.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./useId-D3sFZbtB.js";import"./XMark-COJVLPGF.js";import"./FieldBase-BfQZNQHG.js";import"./Typography-lvuy6SF3.js";import"./useHighlightedText-D6JE0bc4.js";import"./Skeleton-6Posg2tf.js";import"./Label-CufZoml2.js";import"./index-DvbpjXY1.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./Button-7DVHhPF2.js";import"./MenuListItem-D8LYIepd.js";import"./MenuListHeading-DjQ5LdsQ.js";import"./MenuItem-DJwKVNs9.js";import"./ItemMedia-D13Mes1V.js";import"./Avatar-Dhw0Atsj.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Icon-68Gi_xA8.js";import"./Checkmark-Ci7lq5dQ.js";import"./Heading-Rbp_06UC.js";import"./ChevronRight-BOPTtlba.js";import"./Badge-DUhzLQsC.js";import"./useMenu-5Lc1jfY6.js";import"./InformationSquare-DK3EJIq8.js";import"./Switch-CES7Axv9.js";import"./useLocale-BNDjzm9t.js";import"./globalMenu-CJJB8Q39.js";import"./PadlockLockedFill-wyntw034.js";import"./Buildings2-Dn31Fin1.js";import"./InboxFill-88oeaOtY.js";import"./MenuGrid-tIpDrGJL.js";import"./PersonCircle-BjQ8-HdB.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-PCr6gbaY.js";import"./Archive-BQ-4sTsA.js";import"./Trash-DvhW7kU1.js";import"./useAccountMenu-CB4ETM4w.js";import"./useAccountsToolbar-CnEYgc0z.js";import"./HeartFill-DxrYEi1K.js";import"./accountDataFetchers-C-JixksK.js";import"./useIsDesktop-DKxFqwuA.js";const mo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
