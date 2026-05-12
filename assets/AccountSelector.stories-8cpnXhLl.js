import{j as o,R as i}from"./iframe-BUZW8AMM.js";import{A as n}from"./AccountSelector-BdLq9o7q.js";import{u as m}from"./useGlobalHeader-DmG-f7vE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDG5Qp_D.js";import"./button-Bzfkec0d.js";import"./use-merge-refs-Cq-TarIz.js";import"./lite-DaUVFjkg.js";import"./heading-yFKmy4mk.js";import"./AccountMenu-DzDo23pz.js";import"./SearchField-DOgIBcSC.js";import"./MagnifyingGlass-e5Ddvpo2.js";import"./useId-CoMggIDA.js";import"./XMark-N_5CtkVA.js";import"./FieldBase-D0VPfoZq.js";import"./Typography-DPxU9lqg.js";import"./useHighlightedText-Df1F8nSN.js";import"./Skeleton-2WT-jYKy.js";import"./Label-EV3PcI6g.js";import"./index-BxrYGQ_D.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./Button-gpqpzK6E.js";import"./MenuListItem-DOB3vVPI.js";import"./MenuListHeading-BbGKJ44d.js";import"./MenuItem-B9Qpze_W.js";import"./ItemMedia-lV46z_8W.js";import"./Avatar-VmI9f2FC.js";import"./AvatarGroup-BSpRcNGO.js";import"./Icon-pO_LYxKU.js";import"./Checkmark-B1cvuYYq.js";import"./Heading-BBJzhiZm.js";import"./ItemControls-CILw3fe6.js";import"./ChevronRight-Be2F8dIE.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DzfOGhde.js";import"./index-B1N1jCNu.js";import"./InformationSquare-D87nn8LZ.js";import"./Switch-CFAy6nJV.js";import"./useLocale-Di8vUl15.js";import"./globalMenu-DyKOSCyj.js";import"./PersonCircle-Dp7Qthqx.js";import"./Buildings2-B67cXEvc.js";import"./InboxFill-CTf7tvg-.js";import"./MenuGrid-gCFTtwbJ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BKPiN4UC.js";import"./Archive-BF40uVhW.js";import"./Trash-CBYCI39t.js";import"./useAccountMenu-aefej9YR.js";import"./HeartFill-swP0PXTG.js";import"./accountDataFetchers-DbJgDz9U.js";import"./useIsDesktop-B3Kf1_kp.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
