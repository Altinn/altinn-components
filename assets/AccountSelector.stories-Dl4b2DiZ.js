import{j as o,R as i}from"./iframe-DolAyTrH.js";import{A as n}from"./AccountSelector-BGmqqq0U.js";import{u as s}from"./useGlobalHeader-BGk_f510.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGgdxP5s.js";import"./button-DvTcN5eG.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./heading-BYn_QqeZ.js";import"./AccountMenu-DZ4zTclY.js";import"./SearchField-O-g-s0at.js";import"./MagnifyingGlass-D6ZngSzY.js";import"./useId-CHjpN4lF.js";import"./XMark-DTdVjjyM.js";import"./FieldBase-Cd7L_EtW.js";import"./Typography-BxahTxrH.js";import"./useHighlightedText-DjzGplEp.js";import"./Skeleton-CgJZAB6S.js";import"./Label-B4hULeup.js";import"./index-Bcer_oBx.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./Button-BnKV4VN-.js";import"./MenuListItem-V7gZGQwh.js";import"./MenuListHeading-ktY8lirO.js";import"./MenuItem-BC8KVIYh.js";import"./ItemMedia-feu0z7mp.js";import"./Avatar-koXMFN1u.js";import"./AvatarGroup-B7A0z_e3.js";import"./Icon-DyTdluPS.js";import"./Checkmark-CMV0hymD.js";import"./Heading-ytdfVfHq.js";import"./ItemControls-B_Hdv8nx.js";import"./ChevronRight-Duke-dAu.js";import"./Badge-XZ4zcUXX.js";import"./useMenu-BNSqPiQU.js";import"./InformationSquare-B_X3Ih6E.js";import"./Switch-D5tSqIJ9.js";import"./useLocale-8P-WdJse.js";import"./globalMenu-DY8xVh7L.js";import"./PadlockLockedFill-cbk62fQu.js";import"./Buildings2-B33KlsSD.js";import"./InboxFill--d9QFoT2.js";import"./MenuGrid-CaWxxZsf.js";import"./PersonCircle-BIivelNm.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BO8iM9nq.js";import"./Archive-6i68OY6K.js";import"./Trash-BtLK7IU-.js";import"./useAccountMenu-CEqvZMOt.js";import"./useAccountsToolbar-CLVUcwRy.js";import"./HeartFill-CbEiIFG7.js";import"./accountDataFetchers-DEsRfJIf.js";import"./useIsDesktop-D-mQaJBC.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
