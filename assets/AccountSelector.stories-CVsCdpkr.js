import{j as o,R as i}from"./iframe-DkQPO9ro.js";import{A as n}from"./AccountSelector-CK0TFOGZ.js";import{u as m}from"./useGlobalHeader-atZXRbJD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrTdOUlk.js";import"./button-Byovksc3.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./heading-Dzxt-Xj0.js";import"./AccountMenu-DFEyY2mN.js";import"./SearchField-BFSdJUV0.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./useId-CwF4wxTL.js";import"./XMark-5G2rqhrX.js";import"./FieldBase-BPqKon2e.js";import"./Typography-cgJeIGtL.js";import"./useHighlightedText-BlkM7iRt.js";import"./Skeleton-8DklmnzK.js";import"./Label-DNmTNqvr.js";import"./index-BCCMT4X2.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./Button-OKMeorO5.js";import"./MenuListItem-BEjobN4X.js";import"./MenuListHeading-DNdWEvDL.js";import"./MenuItem-BCrg9AvC.js";import"./ItemMedia-CHWY5IG3.js";import"./Avatar-DlrsSRUv.js";import"./AvatarGroup-DkXzBnSr.js";import"./Icon-Dao4TSf9.js";import"./Checkmark-JWLDNW8H.js";import"./Heading-Otl-Ib-S.js";import"./ItemControls-Czqw_jtP.js";import"./ChevronRight-Ddmldm4v.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";import"./InformationSquare-DS3QJ89x.js";import"./Switch-DagNs5eW.js";import"./useLocale-CkSteAqX.js";import"./globalMenu-BxtgWRIy.js";import"./PersonCircle-EOFyGUwS.js";import"./Buildings2-TPl-W-Aw.js";import"./InboxFill-CAHNcSmn.js";import"./MenuGrid-DLVVZ2an.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CKRc-mIU.js";import"./Archive-cVVZTQ-I.js";import"./Trash-C8jSETfh.js";import"./useAccountMenu-VhGFIA2t.js";import"./HeartFill-B2O-pGHr.js";import"./accountDataFetchers-BA-vKwMf.js";import"./useIsDesktop-Dz-OMeoK.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
