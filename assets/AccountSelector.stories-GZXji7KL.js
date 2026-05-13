import{j as o,R as i}from"./iframe-aW2Ivac6.js";import{A as n}from"./AccountSelector-CaMR5UnS.js";import{u as m}from"./useGlobalHeader-C-AA-aTL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWa6FdCb.js";import"./button-CCQIf2kf.js";import"./use-merge-refs-CB7-Iow2.js";import"./lite-DaUVFjkg.js";import"./heading-CgRl8HZA.js";import"./AccountMenu-BtfjiIyK.js";import"./SearchField-uUwTRA3v.js";import"./MagnifyingGlass-CZzm3B-3.js";import"./useId-DH4aqM3h.js";import"./XMark-DUdkEKb2.js";import"./FieldBase-CdSvcvFX.js";import"./Typography-JHHWywcS.js";import"./useHighlightedText-ZQImmj57.js";import"./Skeleton-it7stJ0Q.js";import"./Label-UVt4ZlNT.js";import"./index-BzK4-cKk.js";import"./Input-S7hdVfLT.js";import"./input-DBhNK3CK.js";import"./Button-RX-ew4zS.js";import"./MenuListItem-Nc9dF1O6.js";import"./MenuListHeading-CkJcv2mm.js";import"./MenuItem-COYpbW6V.js";import"./ItemMedia-D2IPLDQS.js";import"./Avatar-C-j1g9mt.js";import"./AvatarGroup-Btn-kZJL.js";import"./Icon-CD7MnEv7.js";import"./Checkmark-BjMWNebU.js";import"./Heading-D9dg30ti.js";import"./ItemControls-BfAmDR5q.js";import"./ChevronRight-Bcq_DMzy.js";import"./Badge-WunB0MzM.js";import"./Tooltip-DYC812UO.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-ChK92nmD.js";import"./index-CSsgmh7M.js";import"./InformationSquare-BtbGMdWt.js";import"./Switch-T1wAkZbR.js";import"./useLocale-C9HjZW-J.js";import"./globalMenu-Dz4DXw-z.js";import"./PersonCircle-DPRH_llS.js";import"./Buildings2-D1hlYQo9.js";import"./InboxFill-qs4ohqzK.js";import"./MenuGrid-rA8vibJs.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CFgUuPha.js";import"./Archive-aCPoIJqz.js";import"./Trash-C236s4up.js";import"./useAccountMenu-B9zr0vSq.js";import"./HeartFill-DuQrzvmx.js";import"./accountDataFetchers-CdUnHLXS.js";import"./useIsDesktop-BJdF2eFD.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
