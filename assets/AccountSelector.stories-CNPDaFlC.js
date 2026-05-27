import{p as o,f as i}from"./iframe-WHERbRNQ.js";import{A as n}from"./AccountSelector-BT2GELq7.js";import{u as s}from"./useGlobalHeader-DN6YsRmx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPQpJFkN.js";import"./tooltip-C7TGaz5I.js";import"./SearchField-CjOGKjR9.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./useId-BfbJ7PbP.js";import"./XMark-5kXogJ_J.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./useHighlightedText-CCsQk8zm.js";import"./Skeleton-rNcUZaAx.js";import"./Label-DoBAei1C.js";import"./Input-D2AEap14.js";import"./Button-DkTjWAj1.js";import"./useMenu-DdbFwnvU.js";import"./MenuListItem-Gq-dCZ2a.js";import"./MenuListHeading-B72ED6_O.js";import"./MenuItem-BN2QDxa4.js";import"./ItemMedia-CZ4j0uoG.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Icon-jpLauUO9.js";import"./Checkmark-DwlfhjiK.js";import"./ItemLabel-CGpASln7.js";import"./Heading-POmwd9W2.js";import"./ItemControls-CXMEe70O.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./ChevronRight-HD9xUhWG.js";import"./index-Cy4S4a6-.js";import"./InformationSquare-DqU7vShm.js";import"./Switch-DwucQso5.js";import"./AccountMenu-CjEOexO1.js";import"./useLocale-BhAm75Aa.js";import"./globalMenu-k9i_bNnv.js";import"./PersonCircle-CbGRsB75.js";import"./Buildings2-Cxu8SLwv.js";import"./InboxFill-COhlx1Bw.js";import"./MenuGrid-xBvM-GYV.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-WSvH4AZu.js";import"./Archive-PwU0eenA.js";import"./Trash-C1kE2B-c.js";import"./useAccountMenu-u260JJSc.js";import"./HeartFill-D5kqlvfH.js";import"./accountDataFetchers-DmFfTMOJ.js";import"./useIsDesktop-CJvITts6.js";const io={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
}`,...c.parameters?.docs?.source}}};const po=["WithAccounts","NoAccounts","Loading"];export{c as Loading,e as NoAccounts,t as WithAccounts,po as __namedExportsOrder,io as default};
