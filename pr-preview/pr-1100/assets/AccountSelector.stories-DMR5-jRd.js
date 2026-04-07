import{j as o,R as i}from"./iframe-BTgHnb1V.js";import{A as n}from"./AccountSelector-BtVRf3AN.js";import{u as s}from"./useGlobalHeader-w7uBu4jy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-t_Anj6Qz.js";import"./button-DAOqBeHz.js";import"./use-merge-refs-8A0H_t2p.js";import"./lite-DaUVFjkg.js";import"./heading-Dg8Ur50F.js";import"./AccountMenu-DAKN4S5H.js";import"./SearchField-Dea1MzEn.js";import"./MagnifyingGlass-DQ3ccb4H.js";import"./useId-DWidDjIe.js";import"./XMark-DMQzhoj3.js";import"./FieldBase-B5jTEalp.js";import"./Typography-CR3zr5Vv.js";import"./useHighlightedText-DrZCsmQU.js";import"./Skeleton-B3M39f3D.js";import"./Label-DOnz6ye3.js";import"./index-3lpPu1ww.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./Button-Ccau3b8T.js";import"./MenuListItem-DKnhIWL6.js";import"./MenuListHeading-CfRWVBZN.js";import"./MenuItem-DLwUzMv1.js";import"./ItemMedia-BOGO8xTn.js";import"./Avatar-DpDT0aNa.js";import"./AvatarGroup-4I2zgroj.js";import"./Icon-PY6OftAR.js";import"./Checkmark-jKAH024b.js";import"./Heading-Ca71xFkp.js";import"./ChevronRight-DEDRS1St.js";import"./Badge-sZl2g-is.js";import"./useMenu-DSfKnhCX.js";import"./InformationSquare-BM_VTFR-.js";import"./Switch-DG17p5gU.js";import"./useLocale-BiVo51DP.js";import"./globalMenu-bwwbTL_p.js";import"./PadlockLockedFill-M37DBcyl.js";import"./Buildings2-CYlWigAS.js";import"./InboxFill-pgiUqnQz.js";import"./MenuGrid-ChmYNDLY.js";import"./PersonCircle-Dwiecph6.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-fKWwbmfi.js";import"./Archive-D54l5aI2.js";import"./Trash-CNgFJdUI.js";import"./useAccountMenu-CX97yYhQ.js";import"./useAccountsToolbar-h-ANj76k.js";import"./HeartFill-C9Siws5k.js";import"./accountDataFetchers-Df7KwWfd.js";import"./useIsDesktop-DJp9AwJx.js";const mo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const uo=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,uo as __namedExportsOrder,mo as default};
