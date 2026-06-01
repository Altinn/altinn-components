import{a7 as o,x as i}from"./iframe-D3QbR5Le.js";import{A as n}from"./AccountSelector-BEMkPd7g.js";import{u as p}from"./useGlobalHeader-CWJU4CKy.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-C1oRwJ9X.js";import"./MagnifyingGlass-odaglt7B.js";import"./FieldBase-BVisqjo6.js";import"./Typography-Dc0CQRXO.js";import"./useHighlightedText-Cs6VCP7b.js";import"./Field-CmklkMP8.js";import"./Label-1ernyuR0.js";import"./Input-fbRgifOV.js";import"./useMenu-CKRyFifW.js";import"./MenuListItem-CIRSIckJ.js";import"./MenuListHeading-CUGWWC4c.js";import"./MenuItem-p2P7kMgy.js";import"./ItemMedia-By1N_mbL.js";import"./Avatar-0HMs51Xi.js";import"./AvatarGroup-BqAJnN7l.js";import"./Checkmark-DPa9YJ2d.js";import"./ItemLabel-D38lX0bX.js";import"./Heading-D807jdih.js";import"./ItemControls-UDFYeL-1.js";import"./Badge-D-6Sz0uL.js";import"./Tooltip-r3UZaGLO.js";import"./ChevronRight-CW8WMRnL.js";import"./index-1UUqftsp.js";import"./InformationSquare-B-kAc2gK.js";import"./Switch-BOPbfOkf.js";import"./AccountMenu-B24E_x6q.js";import"./useLocale-C1vAeR0e.js";import"./globalMenu-D3vwWk3G.js";import"./PersonCircle-DH8Tjd4S.js";import"./Buildings2-CAg99zbd.js";import"./InboxFill-D3jcRFuv.js";import"./MenuGrid-BBlfhuDg.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-B7-hL0VH.js";import"./Archive-BPPn0ndA.js";import"./Trash-BkS8tkBS.js";import"./useAccountMenu-CGBaYend.js";import"./HeartFill-DcbyeYdF.js";import"./accountDataFetchers-CJuATMqX.js";import"./useIsDesktop-CIdvrOYU.js";const oo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const s=p({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...s,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
