import{j as o,R as i}from"./iframe-CULgtZWU.js";import{A as n}from"./AccountSelector-BIsIg5Yx.js";import{u as s}from"./useGlobalHeader-DvHc9IEV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvBdYXxj.js";import"./button-DZmMky1p.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";import"./heading-CQxdWFWT.js";import"./AccountMenu-CEVdyG7q.js";import"./SearchField-D5aR-gNH.js";import"./MagnifyingGlass-B-SEPcNi.js";import"./useId-COk2q28h.js";import"./XMark-BCb0_aBA.js";import"./FieldBase-DGffeSDz.js";import"./Typography-BrN0KsEX.js";import"./useHighlightedText-BLw72BO7.js";import"./Skeleton-B_F13Udl.js";import"./Label-TPhVVF1y.js";import"./index-DY3DIpTU.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./Button-EDUaKVqz.js";import"./MenuListItem-bQ_fc2Ge.js";import"./MenuListHeading-gj1aWH_N.js";import"./MenuItem-ByRPat9U.js";import"./ItemMedia-CstP66eQ.js";import"./Avatar-DIXtsktU.js";import"./AvatarGroup-C5aSOTjU.js";import"./Icon-G4wS9E1h.js";import"./Checkmark-DEc7m9Qo.js";import"./Heading-QgrsV_VA.js";import"./ItemControls-RibfoZmh.js";import"./ChevronRight-Q1coQceW.js";import"./Badge-CMQ7i3tF.js";import"./useMenu-Do_nneWd.js";import"./InformationSquare-C8Qq6I-D.js";import"./Switch-Bdau_C5W.js";import"./useLocale-r3gGlcZ8.js";import"./globalMenu-dHzwlIfY.js";import"./PadlockLockedFill-DmjIHQ_j.js";import"./Buildings2-CbfhaunH.js";import"./InboxFill-gdW-QKE2.js";import"./MenuGrid-Bg-3-RU6.js";import"./PersonCircle-BXrVN4F7.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-S-YXJnTw.js";import"./Archive-C10AizEf.js";import"./Trash-D7-j-WnU.js";import"./useAccountMenu-Ch9XZgGH.js";import"./useAccountsToolbar-CRMrejUj.js";import"./HeartFill-8__0yAQ7.js";import"./accountDataFetchers-CEaQo3YV.js";import"./useIsDesktop-BnaV_SOG.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
