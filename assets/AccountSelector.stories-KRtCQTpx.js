import{j as o,R as i}from"./iframe-Dj7Cj6th.js";import{A as n}from"./AccountSelector-C14m-YBO.js";import{u as m}from"./useGlobalHeader-Byt9YL1d.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CddsnUaU.js";import"./button-BKLxmUvr.js";import"./use-merge-refs-YImFlbky.js";import"./lite-DaUVFjkg.js";import"./heading-i_QgmUBR.js";import"./AccountMenu-BM2-kv7T.js";import"./SearchField-IAcAy2TF.js";import"./MagnifyingGlass-CkAWdXLw.js";import"./useId-ByPI58ip.js";import"./XMark-CFOHUWx0.js";import"./FieldBase-1wPahpAR.js";import"./Typography-NJpqcBZB.js";import"./useHighlightedText-BEM-o_8x.js";import"./Skeleton-D2EJPpRT.js";import"./Label-knK18nOg.js";import"./index-DyfHnAhP.js";import"./Input-xlo_b8Ui.js";import"./input-Dg3xXmgC.js";import"./Button-CSjIyK1w.js";import"./MenuListItem-DHv3z0ag.js";import"./MenuListHeading-BcZUdaLF.js";import"./MenuItem-jJDtIeVN.js";import"./ItemMedia-ClCn_Pwn.js";import"./Avatar-BthLZDba.js";import"./AvatarGroup-CKpZaMLG.js";import"./Icon-ClXNgiA2.js";import"./Checkmark-BGb3abOV.js";import"./Heading-CYqNNVt0.js";import"./ItemControls-Dm3s3qCz.js";import"./ChevronRight-DoyD_DMf.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CZ8hjrPb.js";import"./InformationSquare-BF5i3vGC.js";import"./Switch-CsETL5z-.js";import"./useLocale-Cc-EZgTa.js";import"./globalMenu-Bbbt_AAp.js";import"./PadlockLockedFill-DyKEGGIm.js";import"./Buildings2-RbNRYIPS.js";import"./InboxFill-Bdr_IoBv.js";import"./MenuGrid-CIIiRQec.js";import"./PersonCircle-DGunPqZp.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-D8nK4eWy.js";import"./Archive-fCDhiZwM.js";import"./Trash-BWaUzv09.js";import"./useAccountMenu-Be5qqc25.js";import"./useAccountsToolbar-8HoKFADG.js";import"./HeartFill-ByYTYDoa.js";import"./accountDataFetchers-s22h6CSm.js";import"./useIsDesktop-BKsQq4_B.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
