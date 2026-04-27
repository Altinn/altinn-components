import{j as o,R as i}from"./iframe-BJEbXdzo.js";import{A as n}from"./AccountSelector-Diri-ep2.js";import{u as m}from"./useGlobalHeader-DIRAQ92L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChGHkNNv.js";import"./button-3a31VMtF.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./heading-DXUZMSBu.js";import"./AccountMenu-Iz0jaDTX.js";import"./SearchField-C43D0Bvg.js";import"./MagnifyingGlass-Dp61EhHj.js";import"./useId-DgrNWXh_.js";import"./XMark-sTHnj54s.js";import"./FieldBase-s2kWEUm7.js";import"./Typography-D85R78i7.js";import"./useHighlightedText-Chj_Mw3b.js";import"./Skeleton-DWcIZ1wH.js";import"./Label-DQQXrne0.js";import"./index-THETCITG.js";import"./Input-BI0TJMod.js";import"./input-CnbiDkgl.js";import"./Button-DNsjk1zC.js";import"./MenuListItem-U3U1VVBg.js";import"./MenuListHeading-BxpAf7GB.js";import"./MenuItem-CIe0tXLI.js";import"./ItemMedia-CiNZWpX-.js";import"./Avatar-CcIuhVy2.js";import"./AvatarGroup-Cpo75nCB.js";import"./Icon-msEkDcFf.js";import"./Checkmark-DLPFtMmB.js";import"./Heading-1LBL0JVO.js";import"./ItemControls-CAq51EMf.js";import"./ChevronRight-CoSPx3Kv.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-9_PPaP-8.js";import"./InformationSquare-e9K9-Rpn.js";import"./Switch-ClunuO0T.js";import"./useLocale-D5J2raE1.js";import"./globalMenu-DSeJykYj.js";import"./PadlockLockedFill-D7xVoENA.js";import"./Buildings2-DfLVYGi2.js";import"./InboxFill-Mazck519.js";import"./MenuGrid-PacNmwSn.js";import"./PersonCircle-Cul-mrQE.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-DwjqcEwv.js";import"./Archive-dgyTBxhE.js";import"./Trash-C9Nxl2VC.js";import"./useAccountMenu-D1Be11yk.js";import"./useAccountsToolbar-enxMbprp.js";import"./HeartFill-4EROIPSJ.js";import"./accountDataFetchers-CP45aJCX.js";import"./useIsDesktop-DRdiko2E.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const So=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,So as __namedExportsOrder,lo as default};
