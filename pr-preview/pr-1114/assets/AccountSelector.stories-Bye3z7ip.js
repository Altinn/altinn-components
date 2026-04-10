import{j as o,R as i}from"./iframe-bdb8MxAl.js";import{A as n}from"./AccountSelector-D4nv2p9a.js";import{u as s}from"./useGlobalHeader-CYGekq_U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-p3wA3m8m.js";import"./button-riuqcLff.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./lite-DaUVFjkg.js";import"./heading-sEJMbgb9.js";import"./AccountMenu-DtpSdk3c.js";import"./SearchField-Q9bTEqZH.js";import"./MagnifyingGlass-CUUYZIQ1.js";import"./useId-m2lwd_Ct.js";import"./XMark-ml8n1JcF.js";import"./FieldBase-DvRhg6xr.js";import"./Typography-BHyeW1q-.js";import"./useHighlightedText-BZip2xbp.js";import"./Skeleton-BMmeChMq.js";import"./Label-DBSC-MMD.js";import"./index-Bm_5QTlm.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./Button-CmmCg_X2.js";import"./MenuListItem-CqjGn-MF.js";import"./MenuListHeading-DgV7uPAe.js";import"./MenuItem-CkSmk6Ko.js";import"./ItemMedia-Bzsndyr0.js";import"./Avatar-Di5f2hN1.js";import"./AvatarGroup-DeyVKu-1.js";import"./Icon-DDIx0qrc.js";import"./Checkmark-YAJv3o3m.js";import"./Heading-BV-bgYII.js";import"./ItemControls-CoqYqtfq.js";import"./ChevronRight-Cnln8IKV.js";import"./Badge-CZZ-T3gy.js";import"./useMenu-Dc6Nz6rI.js";import"./InformationSquare-nixk64HR.js";import"./Switch-CdWboNxd.js";import"./useLocale-Cb5-MDTK.js";import"./globalMenu-DBD2J56Q.js";import"./PadlockLockedFill-BwVfO0bK.js";import"./Buildings2-B1r9EdpP.js";import"./InboxFill-CPonLW7E.js";import"./MenuGrid-Cui8KPfA.js";import"./PersonCircle-m8HXXjPs.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-CSyhbW3d.js";import"./Archive-DDiFiqWF.js";import"./Trash-D-U6L-Nc.js";import"./useAccountMenu-D9PFYEmS.js";import"./useAccountsToolbar-DMW0Q_Nw.js";import"./HeartFill-BSyi9w23.js";import"./accountDataFetchers-zKwIGe-9.js";import"./useIsDesktop-DMUmR05m.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const ao=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,ao as __namedExportsOrder,uo as default};
