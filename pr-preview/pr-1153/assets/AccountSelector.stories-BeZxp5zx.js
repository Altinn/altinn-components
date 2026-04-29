import{j as o,R as i}from"./iframe-CHILL5tZ.js";import{A as n}from"./AccountSelector-wcrObOw4.js";import{u as m}from"./useGlobalHeader-C-zla70X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0JdUEkn.js";import"./button-BIgBCVIC.js";import"./use-merge-refs-BXZnV1dm.js";import"./lite-DaUVFjkg.js";import"./heading-CGHXTt7C.js";import"./AccountMenu-oQh0DcVf.js";import"./SearchField-DpxDm5xW.js";import"./MagnifyingGlass-Z3jVe5X3.js";import"./useId-CxjMVxT3.js";import"./XMark-DQxCv5Yn.js";import"./FieldBase-DGrlYpX7.js";import"./Typography-BDbDV84g.js";import"./useHighlightedText-sycLCu80.js";import"./Skeleton-BX9QnUCy.js";import"./Label-BmNpXiOX.js";import"./index-ASxRsC3U.js";import"./Input-F-jc7mgY.js";import"./input-BiYbaGgt.js";import"./Button-BhP7fHb4.js";import"./MenuListItem-D8HsXFkE.js";import"./MenuListHeading-D8Av5awU.js";import"./MenuItem-DaU4SSfC.js";import"./ItemMedia-BDXURQdO.js";import"./Avatar-BEHn6hs3.js";import"./AvatarGroup-9Hd8MZfa.js";import"./Icon-DK0uLDnk.js";import"./Checkmark-nA2yaQnq.js";import"./Heading-B80Wap_u.js";import"./ItemControls-Okligr0R.js";import"./ChevronRight-C2HiJ5JV.js";import"./Badge-DHaboY8X.js";import"./Tooltip-gqkYQCXG.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CBS-gOUF.js";import"./InformationSquare-qW6C7jKR.js";import"./Switch-BLGSmnhn.js";import"./useLocale-CR2al_3e.js";import"./globalMenu-CBN3_-Kp.js";import"./PadlockLockedFill-C6yyEZiT.js";import"./Buildings2-tjbDAD09.js";import"./InboxFill-DjyyvXGx.js";import"./MenuGrid-vMpDdG9w.js";import"./PersonCircle-BfGPlfya.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BQ3ZYUl6.js";import"./Archive-D1KH-vpC.js";import"./Trash-DeMvNL0c.js";import"./useAccountMenu-1jVKCAcE.js";import"./useAccountsToolbar-x1be4tOl.js";import"./HeartFill-DB-9jMfH.js";import"./accountDataFetchers-C0odqBsP.js";import"./useIsDesktop-BR3A0ctr.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
