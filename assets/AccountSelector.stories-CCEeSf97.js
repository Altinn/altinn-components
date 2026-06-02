import{a7 as o,x as i}from"./iframe-DzC97elN.js";import{A as n}from"./AccountSelector-SPH3qZZ4.js";import{u as p}from"./useGlobalHeader-Dj-F66JW.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-D-nsUeta.js";import"./MagnifyingGlass-BRwTAYgV.js";import"./FieldBase-CCQqXbf-.js";import"./Typography-CtPp6NJn.js";import"./useHighlightedText-w8ugv_c2.js";import"./Field-B6KkaL6q.js";import"./Label-CsRR5HcT.js";import"./Input-DIyKL79r.js";import"./useMenu-BjgtGKwv.js";import"./MenuListItem-CXsNShPW.js";import"./MenuListHeading-BozM-APn.js";import"./MenuItem-D6uXh7L1.js";import"./ItemMedia-BZutnkw1.js";import"./Avatar-B0Bwnqej.js";import"./AvatarGroup-CKA1h7_5.js";import"./Checkmark-FE2XL59D.js";import"./ItemLabel-DpV5tQzf.js";import"./Heading-DiLLFIwR.js";import"./ItemControls-zCivkuXf.js";import"./Badge-XkpX5Mm7.js";import"./Tooltip-BXMPu0h3.js";import"./ChevronRight-DVYABLGR.js";import"./index-lcqP_0Eh.js";import"./InformationSquare-B8cGLTDj.js";import"./Switch-JfrAs-Bf.js";import"./AccountMenu-DqYEsx_-.js";import"./useLocale-Cgx6U3dX.js";import"./globalMenu-MDzG8fA_.js";import"./PersonCircle-CRIoDXsu.js";import"./Buildings2-1XYI9-k1.js";import"./InboxFill-DbXvtP7e.js";import"./MenuGrid-D_UEv0HQ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BA4EhbnL.js";import"./Archive-Dumd_ZmV.js";import"./Trash-CQFpGbne.js";import"./useAccountMenu-CVVAP7II.js";import"./HeartFill-Da683xUR.js";import"./accountDataFetchers-C344MTJ1.js";import"./useIsDesktop-CeAKLIl5.js";const oo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const s=p({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...s,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const ro=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,ro as __namedExportsOrder,oo as default};
