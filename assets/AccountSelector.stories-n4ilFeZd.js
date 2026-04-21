import{j as o,R as i}from"./iframe-BNDruhPA.js";import{A as n}from"./AccountSelector-Cs57riHm.js";import{u as m}from"./useGlobalHeader-BaBiDdjY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JM42q3xD.js";import"./button-Bu4lXR2T.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./heading-UEb8yVFE.js";import"./AccountMenu-Bya8haLy.js";import"./SearchField-BS2BtTJs.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./useId-28rL4Hsl.js";import"./XMark-vbUnhqfT.js";import"./FieldBase-CqddQ4KB.js";import"./Typography-0VzQ_bGw.js";import"./useHighlightedText-Bss46XCz.js";import"./Skeleton-3vFplc_z.js";import"./Label-DEPud0Ho.js";import"./index-BuvBvGLs.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./Button-CaDKAluY.js";import"./MenuListItem-DJZ7kLfZ.js";import"./MenuListHeading-CJCU8c8j.js";import"./MenuItem-Zvnz-i4w.js";import"./ItemMedia-C5U6F78e.js";import"./Avatar-Bc7K3VQ6.js";import"./AvatarGroup-CBYJn5rG.js";import"./Icon-Ch0vKaKK.js";import"./Checkmark-BnLjHgWq.js";import"./Heading-C1Pb_LrU.js";import"./ItemControls-nx23Lp4C.js";import"./ChevronRight-Bcu8s-U3.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BrVLonhI.js";import"./InformationSquare-BrTKrkbD.js";import"./Switch-CRz5pM3y.js";import"./useLocale-CX_3bC68.js";import"./globalMenu-Cyd6DvA6.js";import"./PadlockLockedFill-fbKrvijm.js";import"./Buildings2-BreMs8ue.js";import"./InboxFill-fA1MI7fW.js";import"./MenuGrid-BXQJX2XF.js";import"./PersonCircle-DVq9OI9o.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-DzaXZGJ9.js";import"./Archive-2uQCDMcb.js";import"./Trash-dW9GgNZJ.js";import"./useAccountMenu-CGLd_608.js";import"./useAccountsToolbar-Bke35YwJ.js";import"./HeartFill-Dtg6NhVq.js";import"./accountDataFetchers-CsV6YsUL.js";import"./useIsDesktop-qJ8b0dW5.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
