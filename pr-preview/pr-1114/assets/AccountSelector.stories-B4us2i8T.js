import{j as o,R as i}from"./iframe-BbAJh2l_.js";import{A as n}from"./AccountSelector-ECk_-4Qg.js";import{u as s}from"./useGlobalHeader-BFuKL_6L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4eFSvt3.js";import"./button-BOk0ljv4.js";import"./use-merge-refs-B0vn2eeh.js";import"./lite-DaUVFjkg.js";import"./heading-B6zctrux.js";import"./AccountMenu-BSgSTNnh.js";import"./SearchField-DsP_4HyY.js";import"./MagnifyingGlass-DGbwovi2.js";import"./useId-DlaeWOGU.js";import"./XMark-CBD09dy-.js";import"./FieldBase-DPxwAUyD.js";import"./Typography-Dc6esLAJ.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./Skeleton-DCAPmpFX.js";import"./Label-BPdBz656.js";import"./index-BNnwLbXZ.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./Button-MneWcYDg.js";import"./MenuListItem-DT3pt1_M.js";import"./MenuListHeading-CDqxI5H7.js";import"./MenuItem-CGPdVF_D.js";import"./ItemMedia-Cdf2Y2Gw.js";import"./Avatar-j2CMQG5s.js";import"./AvatarGroup-D7oFGG3U.js";import"./Icon-BPIDnrjf.js";import"./Checkmark-DCzlJj3W.js";import"./Heading-DtMkhgFU.js";import"./ItemControls-B5jsMXbN.js";import"./ChevronRight-C-emBdlp.js";import"./Badge-Bayw0f9c.js";import"./useMenu-YgVQ1Cwa.js";import"./InformationSquare-ina-Qzjq.js";import"./Switch-DAFxZsdg.js";import"./useLocale-CHL8SvaE.js";import"./globalMenu-CjU1AY1B.js";import"./PadlockLockedFill-C47DmXjH.js";import"./Buildings2-Bl-BhvZh.js";import"./InboxFill-Csrg5WBg.js";import"./MenuGrid-DDTUfaNs.js";import"./PersonCircle-PBPRNabp.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-B1ei_95V.js";import"./Archive-BnSuVF__.js";import"./Trash-CReBsH0T.js";import"./useAccountMenu-CAirZKnF.js";import"./useAccountsToolbar-1PpwFlHL.js";import"./HeartFill-CQaU9rEv.js";import"./accountDataFetchers-CzweeXJF.js";import"./useIsDesktop-CLdfxTOe.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
