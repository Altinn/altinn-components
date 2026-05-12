import{j as o,R as i}from"./iframe-CU9tIbvZ.js";import{A as n}from"./AccountSelector-DsAWvJxU.js";import{u as m}from"./useGlobalHeader-CNy7Skqo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bd_n44R2.js";import"./button-DfPuT9nv.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./heading-HMF_CCjH.js";import"./AccountMenu-BCXmoxcp.js";import"./SearchField-CWeqUa0W.js";import"./MagnifyingGlass-CpZlhX9q.js";import"./useId-BEikXtHv.js";import"./XMark-DTYd927G.js";import"./FieldBase-Bc5lvX-i.js";import"./Typography-w6SEqUo0.js";import"./useHighlightedText-okRrJvjD.js";import"./Skeleton-WB8_C3gk.js";import"./Label-BURQuXSo.js";import"./index-ByNurdCO.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./Button-DwluG-LJ.js";import"./MenuListItem-DwYyHEmE.js";import"./MenuListHeading-kMHXlGu4.js";import"./MenuItem-B01BWq_H.js";import"./ItemMedia-DuuCC0AM.js";import"./Avatar-CPYUWVLR.js";import"./AvatarGroup-D82OEK4D.js";import"./Icon-BBvHNxu7.js";import"./Checkmark-DOBFSC3X.js";import"./Heading-DKJvmFhb.js";import"./ItemControls-BgF8Asgd.js";import"./ChevronRight-XlyxhDjC.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CLh8gMuU.js";import"./index-DdmkzICU.js";import"./InformationSquare-Dq6QQdGV.js";import"./Switch-BFjqI2KQ.js";import"./useLocale-B5kfBcyL.js";import"./globalMenu-YOAoO2do.js";import"./PersonCircle-cYf_rPgC.js";import"./Buildings2-CD4MDmYA.js";import"./InboxFill-BuLZHBJP.js";import"./MenuGrid-DOhn-Lzt.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CwJlB6fo.js";import"./Archive-BDkPE7N1.js";import"./Trash-hYNo9HK3.js";import"./useAccountMenu-C2x3H5o4.js";import"./HeartFill-XWsxyGDr.js";import"./accountDataFetchers-CnrUnXcR.js";import"./useIsDesktop-CrKRXhnc.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
