import{j as o,R as i}from"./iframe-xsOFb0qB.js";import{A as n}from"./AccountSelector-CmriLCRY.js";import{u as m}from"./useGlobalHeader-ul0RA_Wr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2Njje4x.js";import"./button-_KGDSi7k.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./heading-CqwOf3GZ.js";import"./AccountMenu-CByUaCt_.js";import"./SearchField-CkGqv4yc.js";import"./MagnifyingGlass--8bC5kd2.js";import"./useId-BSkX16Wf.js";import"./XMark-CIyVPbna.js";import"./FieldBase-CVHmMMmY.js";import"./Typography-Bx2c3_US.js";import"./useHighlightedText-DlnkJmvJ.js";import"./Skeleton-DBfNAA4T.js";import"./Label-CiIlYW7w.js";import"./index-CZjeF-Ef.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./Button-BpTRR-R2.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuListHeading-DQRtBG1I.js";import"./MenuItem-Dd-G4Q8o.js";import"./ItemMedia-J6PAjnJS.js";import"./Avatar-n4A0Yiev.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Icon-Bfs0jdaJ.js";import"./Checkmark-Bxt0Ippd.js";import"./Heading-CKV0OzUJ.js";import"./ItemControls-a4lEiOE5.js";import"./ChevronRight-C-KQY4Ee.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Cuq0hoPZ.js";import"./index-D7qBukkQ.js";import"./InformationSquare-DdLgqmyX.js";import"./Switch-D_4hH0ed.js";import"./useLocale-ZIxXDciE.js";import"./globalMenu-7gz2NZeF.js";import"./PersonCircle-CQxK2wwo.js";import"./Buildings2-C62e6IVW.js";import"./InboxFill-D-JS-mTH.js";import"./MenuGrid-B4fGNlZg.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CORWw_ar.js";import"./Archive-B1CaQo-V.js";import"./Trash-CZXvsvHs.js";import"./useAccountMenu-S2tlqrVp.js";import"./HeartFill-BI770wDo.js";import"./accountDataFetchers-F0gbFX8k.js";import"./useIsDesktop-BOJmI6K-.js";const ao={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
