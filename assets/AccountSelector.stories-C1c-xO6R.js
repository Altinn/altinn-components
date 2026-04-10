import{j as o,R as i}from"./iframe-DRbAvM8B.js";import{A as n}from"./AccountSelector-D00iKOjQ.js";import{u as s}from"./useGlobalHeader-ByN-_qf4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dpt5RUeZ.js";import"./button-DB6SpB_q.js";import"./use-merge-refs-BRHMCtFk.js";import"./lite-DaUVFjkg.js";import"./heading-Mk4OWZA8.js";import"./AccountMenu-DK6t1yuC.js";import"./SearchField-Q4hKdicz.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./useId-p3Uu13R2.js";import"./XMark-BeNK6Eym.js";import"./FieldBase-_93TCpK5.js";import"./Typography-Da6zx1kt.js";import"./useHighlightedText-DaUYVTi5.js";import"./Skeleton-C6w0Fovi.js";import"./Label-Zr8dB_9-.js";import"./index-Vs8aUpKw.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./Button-DXRH0CtL.js";import"./MenuListItem-CLLuPs6D.js";import"./MenuListHeading-DYidFrGe.js";import"./MenuItem-GZbX5NAK.js";import"./ItemMedia-DLqoeXZM.js";import"./Avatar-DHw0Umd5.js";import"./AvatarGroup-BZTkgKpW.js";import"./Icon-BB196-C1.js";import"./Checkmark-BwvmX3W_.js";import"./Heading-aiLobBhZ.js";import"./ChevronRight-BIwAZUpi.js";import"./Badge-B0bOgxTq.js";import"./useMenu-BNYBCPCQ.js";import"./InformationSquare-Lr6VUhuh.js";import"./Switch-Wk8JvxKk.js";import"./useLocale-CalhqoQ-.js";import"./globalMenu-DHnDMiSf.js";import"./PadlockLockedFill-D8BKctec.js";import"./Buildings2-CmC2WHsf.js";import"./InboxFill-C89p-26o.js";import"./MenuGrid-BfVjhsXm.js";import"./PersonCircle-C4jGpZZ2.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-BjFdHmBW.js";import"./Archive-Can2FccB.js";import"./Trash-D6ryZk36.js";import"./useAccountMenu-DkneCUY7.js";import"./useAccountsToolbar-DsXxsXAF.js";import"./HeartFill-Wk84ovd5.js";import"./accountDataFetchers-DuqDwMnJ.js";import"./useIsDesktop-D-2cHSgo.js";const mo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
