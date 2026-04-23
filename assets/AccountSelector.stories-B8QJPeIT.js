import{j as o,R as i}from"./iframe-DDirkHus.js";import{A as n}from"./AccountSelector-B0zHUHF5.js";import{u as m}from"./useGlobalHeader-EGPeNAti.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2YDfdyU.js";import"./button-CnVt3gpj.js";import"./use-merge-refs-CIAaUVpb.js";import"./lite-DaUVFjkg.js";import"./heading-B8ZS2Rso.js";import"./AccountMenu-57MaxCEA.js";import"./SearchField-CByF2bQh.js";import"./MagnifyingGlass-BGbR81wS.js";import"./useId-CVUrh2ea.js";import"./XMark-DldqIUES.js";import"./FieldBase-BNjKJDB0.js";import"./Typography-Do8CAd45.js";import"./useHighlightedText-CWfqHJQe.js";import"./Skeleton-0VOrezcL.js";import"./Label-9QWpQ8Bw.js";import"./index-F2gU6D0V.js";import"./Input-C9yDHhzX.js";import"./input-CQTkCXgP.js";import"./Button-CdMyOsNo.js";import"./MenuListItem-DoS1mSfo.js";import"./MenuListHeading-7XRfXaU1.js";import"./MenuItem-BsaYehiV.js";import"./ItemMedia-ZkVlWcbo.js";import"./Avatar-DMl0Fglw.js";import"./AvatarGroup-CxNYw_3L.js";import"./Icon-Cv1R39O2.js";import"./Checkmark-MQqJd3cN.js";import"./Heading-s9P5sHvn.js";import"./ItemControls-CqR56LSR.js";import"./ChevronRight-BUOZMhwy.js";import"./Badge-BMZjltw3.js";import"./Tooltip-Di80zHO_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DLxXpcV8.js";import"./InformationSquare-D3Ojtweu.js";import"./Switch-DcTcdqOA.js";import"./useLocale-Dhc60s5a.js";import"./globalMenu-DWKkIU6F.js";import"./PadlockLockedFill-fRPh4t0D.js";import"./Buildings2-CD5n5Krw.js";import"./InboxFill-jQHA7TdX.js";import"./MenuGrid-CJxX1hhk.js";import"./PersonCircle-D3LMTidX.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-DCuIhvEj.js";import"./Archive-CFZVdoBU.js";import"./Trash-D38buOH3.js";import"./useAccountMenu-mrcdllKs.js";import"./useAccountsToolbar-DyfwSo6S.js";import"./HeartFill--oR2ZcTj.js";import"./accountDataFetchers-DN9gTYUV.js";import"./useIsDesktop-Byt4gJYs.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
