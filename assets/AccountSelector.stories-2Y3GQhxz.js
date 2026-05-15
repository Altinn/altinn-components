import{j as o,R as i}from"./iframe-CZMLD2fe.js";import{A as n}from"./AccountSelector-ScZw3yb8.js";import{u as m}from"./useGlobalHeader-CkZIlbXc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iGjPLQV7.js";import"./button-CZknkFMR.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./heading-BH75kNw6.js";import"./AccountMenu-CfO1iyk0.js";import"./SearchField-hPGSgF9W.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./useId-Dmu9AgSD.js";import"./XMark-BBRiAlI8.js";import"./FieldBase-bsYRos9m.js";import"./Typography-BegW4Ytw.js";import"./useHighlightedText-CmlayFSP.js";import"./Skeleton-D52MvI5U.js";import"./Label-C0JPWrbN.js";import"./index-DZ8nICMn.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./Button-z0ZioQWK.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./Avatar-DzGFAhDt.js";import"./AvatarGroup-sNwukvT8.js";import"./Icon-CbE8dCFV.js";import"./Checkmark-CgCD7cxb.js";import"./Heading-5rlhad8Q.js";import"./ItemControls-CSi2HZsx.js";import"./ChevronRight-7zRCvc5i.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./InformationSquare-BauCIT4L.js";import"./Switch-k_GymHg0.js";import"./useLocale-CbEV2YSF.js";import"./globalMenu-CThTZovX.js";import"./PersonCircle-Cnz-oc73.js";import"./Buildings2-Cd8pIexL.js";import"./InboxFill-dmJCO2GG.js";import"./MenuGrid-GwGTD_sm.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BvWd1gs8.js";import"./Archive-DXvpD1-K.js";import"./Trash-CFAM7fxG.js";import"./useAccountMenu-BUPU4Djz.js";import"./HeartFill-Bo9xq64m.js";import"./accountDataFetchers-IG_hDTRw.js";import"./useIsDesktop-DX1vl52f.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
