import{j as o,R as i}from"./iframe-V8BRfBgT.js";import{A as n}from"./AccountSelector-K8BxGoPa.js";import{u as m}from"./useGlobalHeader-CNRMigVE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dg3z2A9f.js";import"./button-2-meUg78.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";import"./heading-DRHKTNUx.js";import"./AccountMenu-BEGmSxR4.js";import"./SearchField-D2AXVYp0.js";import"./MagnifyingGlass-DvXaPbUD.js";import"./useId-Cpax_hNq.js";import"./XMark-C45HvrEl.js";import"./FieldBase-DENJ-wBn.js";import"./Typography-BiIpQq_S.js";import"./useHighlightedText-DnT87ATC.js";import"./Skeleton-BQtaEJM-.js";import"./Label-DdQ1zxpY.js";import"./index-ByKBsU4r.js";import"./Input-zOuJx9ZS.js";import"./input-1VpPOyjR.js";import"./Button-BlxzDMPI.js";import"./MenuListItem-Ckqn-jsk.js";import"./MenuListHeading-nXDmyZ7G.js";import"./MenuItem-DQUORZa0.js";import"./ItemMedia-C3tA4Zzy.js";import"./Avatar-BDDvrYzF.js";import"./AvatarGroup-KHWc8S2T.js";import"./Icon-BWOTtVf8.js";import"./Checkmark-BKwfqVUb.js";import"./Heading-CGSCg4GY.js";import"./ItemControls-BctCfWNT.js";import"./ChevronRight-Cz_uty1S.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-D2cFOQcG.js";import"./index-84oeY8HP.js";import"./InformationSquare-Bxq9CYlT.js";import"./Switch-tNambPi0.js";import"./useLocale-y3YsWHEh.js";import"./globalMenu-Bx5X-jAf.js";import"./PersonCircle-cRtiAMfx.js";import"./Buildings2-jLJeRhKN.js";import"./InboxFill-CLQZBoZX.js";import"./MenuGrid-WBv5f01c.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CfrDm0KI.js";import"./Archive-DYvBW6Wd.js";import"./Trash-BZTx2yoj.js";import"./useAccountMenu-DhSj_npj.js";import"./HeartFill-YlZNLLsB.js";import"./accountDataFetchers-CnHq4Fcv.js";import"./useIsDesktop-Bl9_iylm.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
