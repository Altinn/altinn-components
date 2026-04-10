import{j as o,R as i}from"./iframe-BmFIVBn_.js";import{A as n}from"./AccountSelector-Fp4QdO8s.js";import{u as s}from"./useGlobalHeader-dNaPZTrS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3BUTcXKg.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./heading-DDh33riJ.js";import"./AccountMenu-DkJxUI7S.js";import"./SearchField-BQQnPaDG.js";import"./MagnifyingGlass-B0C_9vni.js";import"./useId-ClegSKnE.js";import"./XMark-DPeWQ31a.js";import"./FieldBase-Cx6yKeh2.js";import"./Typography-CMiy0gec.js";import"./useHighlightedText-Dq-XqtYP.js";import"./Skeleton-DRn19mA6.js";import"./Label-D7uBca_a.js";import"./index-32OlLxJ9.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./Button-qEoy6ct0.js";import"./MenuListItem-INuSyNfv.js";import"./MenuListHeading-D4ZyNWhk.js";import"./MenuItem-BvPBRlig.js";import"./ItemMedia-CCYQNyqL.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Icon-zZDqlwOf.js";import"./Checkmark-DWNi5SDl.js";import"./Heading-D2Zb4ZMb.js";import"./ItemControls-B2xjI1HN.js";import"./ChevronRight-DcRWf4tm.js";import"./Badge-DoiHwmxA.js";import"./useMenu-BRAeQdeQ.js";import"./InformationSquare-Ct2wAfNF.js";import"./Switch-72xu8gyc.js";import"./useLocale-Bf-30zWK.js";import"./globalMenu-DAeZ48lp.js";import"./PadlockLockedFill-5oiKD1pI.js";import"./Buildings2-Bp7D6pSC.js";import"./InboxFill-ClSwJPih.js";import"./MenuGrid-Cjzb3ZQ-.js";import"./PersonCircle-C0o0J3NY.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-Bo5gTdE7.js";import"./Archive-kTBarS_a.js";import"./Trash-eorIYi8J.js";import"./useAccountMenu-BonKHbVL.js";import"./useAccountsToolbar-BQCyNlKc.js";import"./HeartFill-DTduOV9l.js";import"./accountDataFetchers-B-eQPWFR.js";import"./useIsDesktop-DRH7pKvW.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const ao=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,ao as __namedExportsOrder,uo as default};
