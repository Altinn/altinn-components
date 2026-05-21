import{j as o,R as i}from"./iframe-CXxOXnma.js";import{A as n}from"./AccountSelector-BcrBLiy8.js";import{u as s}from"./useGlobalHeader-BRqhFoqu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvzmMrBu.js";import"./tooltip-F-8CLWbq.js";import"./AccountMenu-D-yy8Rg8.js";import"./SearchField-Bi4ovUnL.js";import"./MagnifyingGlass-D50FbQFC.js";import"./useId-CYy4MNIP.js";import"./XMark-DvGwYctt.js";import"./FieldBase-DpHGffp6.js";import"./Typography-4yj_ylkx.js";import"./useHighlightedText-Cggf4nMP.js";import"./Skeleton-DaZzKoDP.js";import"./Label-CsbjAOhP.js";import"./Input-jSu8pVt5.js";import"./Button-Dot-dF6F.js";import"./MenuListItem-Coun_kyi.js";import"./MenuListHeading-C-5Y0Jxa.js";import"./MenuItem-DUKdLPhz.js";import"./ItemMedia-BJW132yJ.js";import"./Avatar-De_JFqYW.js";import"./AvatarGroup-DdK_Ls54.js";import"./Icon-CyU2k-nr.js";import"./Checkmark-CEwGjLXr.js";import"./Heading-CD_Q6pfI.js";import"./ItemControls-D969--fk.js";import"./ChevronRight-fDr-lddl.js";import"./Badge-c48mXhtB.js";import"./Tooltip-CMWO30ox.js";import"./useMenu-B3yI9DRQ.js";import"./index-B9pxKBgX.js";import"./InformationSquare-C99f4nwm.js";import"./Switch-DRnJSCoi.js";import"./useLocale-rC46_dO4.js";import"./globalMenu-O_RxytJv.js";import"./PersonCircle-DFKIIohd.js";import"./Buildings2-DuyZ25dq.js";import"./InboxFill-DaHjssiG.js";import"./MenuGrid-esmDyTWh.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-CS27DoEi.js";import"./Archive-Ckj3Uw1e.js";import"./Trash-BwBqKSjv.js";import"./useAccountMenu-C-8yiJi6.js";import"./HeartFill-CfcGO9BY.js";import"./accountDataFetchers-Bpx1PFXF.js";import"./useIsDesktop-pfWHUBPv.js";const no={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const io=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,io as __namedExportsOrder,no as default};
