import{j as o,R as i}from"./iframe-BDpWuaMs.js";import{A as n}from"./AccountSelector-BDaFLEcp.js";import{u as s}from"./useGlobalHeader-BOmPqFLi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVPUayQ0.js";import"./tooltip-DLcd2lCg.js";import"./AccountMenu-Cw03evOz.js";import"./SearchField-D16JUOzv.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./useId-BKmV9YxM.js";import"./XMark-Cx5Omj8e.js";import"./FieldBase-CGSHeWph.js";import"./Typography-DZRyPYmV.js";import"./useHighlightedText-B13W4IFy.js";import"./Skeleton-DC_TZb2p.js";import"./Label-7jR2lGh9.js";import"./Input-BoCHA0_0.js";import"./Button-m_FXpHGO.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuListHeading-XsWTeeVe.js";import"./MenuItem-BH8ygUTz.js";import"./ItemMedia-CHwsaJTx.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./Icon-4_NTN6mD.js";import"./Checkmark-DDYvLrrH.js";import"./Heading-D4nA4ZwT.js";import"./ItemControls-BtUdj5a9.js";import"./ChevronRight-BJTZ2o3o.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./useMenu-CniiHJSE.js";import"./index-BHwG3h0W.js";import"./InformationSquare-CS8D_BUZ.js";import"./Switch-BV6144DA.js";import"./useLocale-BNt2n01G.js";import"./globalMenu-LptG6wAG.js";import"./PersonCircle-CyxkM5ZM.js";import"./Buildings2-Dvc17tW1.js";import"./InboxFill-B713teYG.js";import"./MenuGrid--Q28e-Ic.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-Dead0XTp.js";import"./Archive-DFGbX-XR.js";import"./Trash-CUnIoKK5.js";import"./useAccountMenu-DMhKPCW-.js";import"./HeartFill-DH1096LK.js";import"./accountDataFetchers-TTZlzy7E.js";import"./useIsDesktop-BLdKrDcu.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
