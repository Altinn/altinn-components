import{a7 as o,x as i}from"./iframe-CAfDO4Rw.js";import{A as n}from"./AccountSelector-B8jaN2Sa.js";import{u as p}from"./useGlobalHeader-BFu58m4o.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchField-CVnH2ZZ_.js";import"./MagnifyingGlass-CAS5EVy6.js";import"./FieldBase-E5ODadVE.js";import"./Typography-CTt20h0e.js";import"./useHighlightedText-D1Egz4xv.js";import"./Field-CeOsIMBN.js";import"./Label-Dty_TUWJ.js";import"./Input-xoXFTL9F.js";import"./useMenu-BpN0JSlm.js";import"./MenuListItem-qxQn0xnV.js";import"./MenuListHeading-DQuMrLgT.js";import"./MenuItem-CDhdlBX8.js";import"./ItemMedia-C1xz5qH-.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./Checkmark-DWkR78Cr.js";import"./ItemLabel-CW9F7Ljc.js";import"./Heading-YvXsCKAz.js";import"./ItemControls-DVGHNPwh.js";import"./Badge-2r7QR-Ea.js";import"./Tooltip-CnjxI-as.js";import"./ChevronRight-CMD5YJ4n.js";import"./index-B1ZW1R_L.js";import"./InformationSquare-Dty64Wjx.js";import"./Switch-DrFSt_mm.js";import"./AccountMenu-BDuqlTQs.js";import"./useLocale-8OF1Ptip.js";import"./globalMenu-VEVJNeqL.js";import"./PersonCircle-Dj4mA6dY.js";import"./Buildings2-DzKODHh0.js";import"./InboxFill-C2zvonUT.js";import"./MenuGrid-Jyc8XERj.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CJ01N8xF.js";import"./Archive-DUqX-z_m.js";import"./Trash-BW5FxSER.js";import"./useAccountMenu-DhRCRgpb.js";import"./HeartFill-CH9OKaUe.js";import"./accountDataFetchers-DO8unIgR.js";import"./useIsDesktop-oe3Vmt84.js";const oo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const s=p({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...s,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
