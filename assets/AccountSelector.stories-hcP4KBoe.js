import{j as o,R as i}from"./iframe-BqnZkKPi.js";import{A as n}from"./AccountSelector-hWy7QaqW.js";import{u as s}from"./useGlobalHeader-OvxfBSHF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAuAfjpD.js";import"./button-CeqU6--G.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./heading-DO439Ftr.js";import"./AccountMenu-B39lY3R_.js";import"./SearchField-ufWryraF.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./useId-9kVvsXig.js";import"./XMark-Y2_85_oc.js";import"./FieldBase-BELBUfOz.js";import"./Typography-DM76If-Q.js";import"./useHighlightedText-Clj8nPui.js";import"./Skeleton-1qnYSSLw.js";import"./Label-CWCdrO7p.js";import"./index-wnzGLxld.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./Button-BhHmd_Fm.js";import"./MenuListItem-AlO17G_F.js";import"./MenuListHeading-CYx60jB_.js";import"./MenuItem-kT58Bpcm.js";import"./ItemMedia-BIsU1ixF.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Icon-CnWjusVH.js";import"./Checkmark-BnBY066L.js";import"./Heading-BxNd6ZSD.js";import"./ItemControls-CZQ275uO.js";import"./ChevronRight-DE1wtPln.js";import"./Badge-wAZ__xuM.js";import"./useMenu-b_BS_LFk.js";import"./InformationSquare-BrOKqXok.js";import"./Switch-BBnTu_Uu.js";import"./useLocale-t45hRxiN.js";import"./globalMenu-BdhfA5so.js";import"./PadlockLockedFill-DWUZVu94.js";import"./Buildings2-CX0IGr76.js";import"./InboxFill-nxlzxk7U.js";import"./MenuGrid-DoGLOC2Q.js";import"./PersonCircle-De8axjJC.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-CBUJ6BTp.js";import"./Archive-BMrgF3IC.js";import"./Trash-CfRAqYTy.js";import"./useAccountMenu-DqzCHNG-.js";import"./useAccountsToolbar-BHxNgyxu.js";import"./HeartFill-BTUqspAB.js";import"./accountDataFetchers-DLC21WfL.js";import"./useIsDesktop-BGZ_Vqay.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
