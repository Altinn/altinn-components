import{j as o,R as i}from"./iframe-CpLxKnDM.js";import{A as n}from"./AccountSelector-Bibv_1fU.js";import{u as m}from"./useGlobalHeader-BA1mlqn5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZrYlxzi.js";import"./button-DZ9B7a50.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./heading-CJ3erF7t.js";import"./AccountMenu-C3jEvLzU.js";import"./SearchField-DF0MNejq.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./useId-Dk2QO8VQ.js";import"./XMark-BkFwP2BW.js";import"./FieldBase-zLQdXhmX.js";import"./Typography-jv3_dxzw.js";import"./useHighlightedText-De1FlINf.js";import"./Skeleton-B2kLb9z1.js";import"./Label-C0kuzyFW.js";import"./index-DjVenMls.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./Button-DKJNFoHr.js";import"./MenuListItem-D6BVyzxR.js";import"./MenuListHeading-CtFt3nNd.js";import"./MenuItem-Da2X9VsT.js";import"./ItemMedia-DT3PutY3.js";import"./Avatar-Bh6xe4Ys.js";import"./AvatarGroup-DwxSIihj.js";import"./Icon-xH6stteC.js";import"./Checkmark-DpqhZdZ_.js";import"./Heading-Dmt1Hp0l.js";import"./ItemControls-SBEzslTa.js";import"./ChevronRight-16z1B_cb.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CCk7NyHy.js";import"./index-B76D54i4.js";import"./InformationSquare-xpUpd4lr.js";import"./Switch-DtDZT1hR.js";import"./useLocale-C2WYZW11.js";import"./globalMenu-BKQnoocv.js";import"./PersonCircle-CA3B10fa.js";import"./Buildings2-CpGh8O8D.js";import"./InboxFill-DISyPVQO.js";import"./MenuGrid-_azA79nh.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BLr2Syot.js";import"./Archive-2zuUqDx-.js";import"./Trash-0aRAlmkw.js";import"./useAccountMenu-BlPdMQXq.js";import"./HeartFill-BQxUxVVL.js";import"./accountDataFetchers-C9ZLTTbE.js";import"./useIsDesktop-BFm1-w7T.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
