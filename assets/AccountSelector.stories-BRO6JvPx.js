import{j as o,R as i}from"./iframe-GJv3-kpe.js";import{A as n}from"./AccountSelector-C3yU2dxa.js";import{u as m}from"./useGlobalHeader-CwhimfCr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D19pPnAw.js";import"./button-5jjXov6B.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./heading-C_aN_g_L.js";import"./AccountMenu-sHkQdxNE.js";import"./SearchField-D4OrqN5V.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./useId-B1GQrjht.js";import"./XMark-D7blLnze.js";import"./FieldBase-D2hpNZAE.js";import"./Typography-XN79jGlV.js";import"./useHighlightedText-ClfYglU-.js";import"./Skeleton-dVNdeapn.js";import"./Label-Bx3ShTJ6.js";import"./index-OoPsm9QB.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./Button-XgEODhFb.js";import"./MenuListItem-BuleDevk.js";import"./MenuListHeading-w-EtPB4c.js";import"./MenuItem-CRhKMxAm.js";import"./ItemMedia-45ogcwRE.js";import"./Avatar-CGv-fnY8.js";import"./AvatarGroup-DxuzyW4n.js";import"./Icon-DKgAzIsH.js";import"./Checkmark-DXLqUvZZ.js";import"./Heading-CiHDuood.js";import"./ItemControls-3C4JbZ3m.js";import"./ChevronRight-C3wqtQo3.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-D_O6qRR4.js";import"./index-CNHiDjij.js";import"./InformationSquare-Crm3l9Sr.js";import"./Switch-DmKXGw5v.js";import"./useLocale-CyABlUyR.js";import"./globalMenu-B4GmlJBL.js";import"./PersonCircle-9EKdXSyZ.js";import"./Buildings2-Bfg_uNMu.js";import"./InboxFill-Cnv6fcar.js";import"./MenuGrid-B538mca7.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-B5mmMKvT.js";import"./Archive-CmHW744W.js";import"./Trash-CCKQd2Hf.js";import"./useAccountMenu-DIz_6x6q.js";import"./HeartFill-BWVbn9KR.js";import"./accountDataFetchers-DJAkqBqI.js";import"./useIsDesktop-B-Z1HFB-.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
