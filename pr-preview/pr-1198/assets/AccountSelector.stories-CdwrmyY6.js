import{j as o,R as i}from"./iframe-DXwGEFZf.js";import{A as n}from"./AccountSelector-CQ_7NSi-.js";import{u as s}from"./useGlobalHeader-DgQLGuAL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpQTH4Pc.js";import"./tooltip-OQNLf2nv.js";import"./AccountMenu-9MAQjkAM.js";import"./SearchField-BCjbtpiQ.js";import"./MagnifyingGlass-CllD3bzP.js";import"./useId-Df52yuGg.js";import"./XMark-BspkucHC.js";import"./FieldBase-BwCMZAv_.js";import"./Typography-CegVoZkA.js";import"./useHighlightedText-NV3gg9HW.js";import"./Skeleton-CD7VUCi3.js";import"./Label-ChoE5xRO.js";import"./Input-CjRvyA41.js";import"./Button-BcOfKjgE.js";import"./MenuListItem-BMkFPPC3.js";import"./MenuListHeading-G6YR-18r.js";import"./MenuItem-COBQQf6N.js";import"./ItemMedia-C0bSIjdI.js";import"./Avatar-OxvpOCq4.js";import"./AvatarGroup-vB7eodsE.js";import"./Icon-DEVqj2eM.js";import"./Checkmark-DpC6lRZL.js";import"./Heading-D1SypAUR.js";import"./ItemControls-DXxKFox6.js";import"./ChevronRight-B7NrC3Rp.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./useMenu-DnVZQPIX.js";import"./index-BmZUBcCg.js";import"./InformationSquare-CathhXXw.js";import"./Switch-BjC1I4Sd.js";import"./useLocale-iT2UdDxz.js";import"./globalMenu-DlnfHF8i.js";import"./PersonCircle-bHcvGsix.js";import"./Buildings2-QgXuVD1-.js";import"./InboxFill-DWpspjSw.js";import"./MenuGrid-C5oGKC5O.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CfJzu2yo.js";import"./Archive-BSZ1HBnn.js";import"./Trash-Bhi8vMFl.js";import"./useAccountMenu-DpWjJla9.js";import"./HeartFill-Bx48nAIh.js";import"./accountDataFetchers-VR1cQsM8.js";import"./useIsDesktop-DryvnYFP.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const io=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,io as __namedExportsOrder,no as default};
