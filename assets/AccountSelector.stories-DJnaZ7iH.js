import{p as o,f as i}from"./iframe-a6n42jIx.js";import{A as n}from"./AccountSelector-Bjg775ES.js";import{u as s}from"./useGlobalHeader-3hMBWokX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D2z1-3lt.js";import"./tooltip-D8RdZxwd.js";import"./SearchField-Cpk_dpFX.js";import"./MagnifyingGlass-CsfVCXI1.js";import"./useId-JsUrCC3L.js";import"./XMark-ENWUN_kz.js";import"./FieldBase-BOMRGuHX.js";import"./Typography-K_BS0H0I.js";import"./useHighlightedText-Bq-Ej33u.js";import"./Skeleton-BMznOa58.js";import"./Label-CP4RT8OS.js";import"./Input-BUxVKC9v.js";import"./Button-DYhT04-k.js";import"./useMenu-BnSKl7OB.js";import"./MenuListItem-BG5nT3q2.js";import"./MenuListHeading-Bp0V-0Ne.js";import"./MenuItem-DlDQtEmE.js";import"./ItemMedia-9TYJyMgm.js";import"./Avatar-DDS_Cv_Z.js";import"./AvatarGroup-BaunAvi6.js";import"./Icon-C2KYL6xM.js";import"./Checkmark-NdO0COsu.js";import"./Heading-Dza3pExo.js";import"./ItemControls-vHjq0nAG.js";import"./Badge-BmuPJ3WS.js";import"./Tooltip-CHTkUxru.js";import"./ChevronRight-DzQRiVjQ.js";import"./index-Bc5QqnLi.js";import"./InformationSquare-DAX_zw-n.js";import"./Switch-SU31XbhY.js";import"./AccountMenu-1G5b85NP.js";import"./useLocale-CqBxbhCd.js";import"./globalMenu-CjhK5C5P.js";import"./PersonCircle-ByuyFVIm.js";import"./Buildings2-BzaU70YA.js";import"./InboxFill-DdMqlU5A.js";import"./MenuGrid-CkS8F2ND.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BN9AQyZ7.js";import"./Archive-C-KNrort.js";import"./Trash-BiwQCIF6.js";import"./useAccountMenu-DmTvAoMW.js";import"./HeartFill-BZeQpE7w.js";import"./accountDataFetchers-Bx7zUnWh.js";import"./useIsDesktop-Dz8Xfx0T.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
