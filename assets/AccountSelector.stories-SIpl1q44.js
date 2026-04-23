import{j as o,R as i}from"./iframe-CK12xbO6.js";import{A as n}from"./AccountSelector-ZHXmIRFE.js";import{u as m}from"./useGlobalHeader-BzAO3-aL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DS2SSX1f.js";import"./button-D6lkouap.js";import"./use-merge-refs-D5gu3XYQ.js";import"./lite-DaUVFjkg.js";import"./heading-Blw3pIef.js";import"./AccountMenu-DGBd5fhe.js";import"./SearchField-CfLtnFna.js";import"./MagnifyingGlass-qxU1ofSJ.js";import"./useId-CIOYGEMY.js";import"./XMark-MadrIoK8.js";import"./FieldBase-NrhOHdDA.js";import"./Typography-PIwVlbiP.js";import"./useHighlightedText-DdOMnBlO.js";import"./Skeleton-CLQkeaUO.js";import"./Label-CQOYgwqz.js";import"./index-BCgvi17I.js";import"./Input-CN33OjmR.js";import"./input-CdhXBgWK.js";import"./Button-DTrhNbku.js";import"./MenuListItem-B_ethkwV.js";import"./MenuListHeading-CCkIOc1e.js";import"./MenuItem-DjmA2GJO.js";import"./ItemMedia-XHYq4GSc.js";import"./Avatar-CjYl4qzD.js";import"./AvatarGroup-DIAmYFyU.js";import"./Icon-BHUPQGzt.js";import"./Checkmark-DQBecNO6.js";import"./Heading-Drr-of_9.js";import"./ItemControls-B1M2j2tm.js";import"./ChevronRight-DxL2oOG5.js";import"./Badge-BBKRgbs4.js";import"./Tooltip-BdqmcG89.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BM6Zh5Qq.js";import"./InformationSquare-C5QsI1Pb.js";import"./Switch-CUp6PmYq.js";import"./useLocale-Cs8715pu.js";import"./globalMenu-BF138WxC.js";import"./PadlockLockedFill-mmgi_nLa.js";import"./Buildings2-D_uQXBhZ.js";import"./InboxFill-BI967Cf7.js";import"./MenuGrid-CeLJXZXs.js";import"./PersonCircle-CL0sX2Bw.js";import"./accountMenu-D55xwLeW.js";import"./getAccount-nlIneB7c.js";import"./Bookmark-Ccz7tqq2.js";import"./Archive-tl_Nekk2.js";import"./Trash-DK6LQCTJ.js";import"./useAccountMenu-B16QASVG.js";import"./useAccountsToolbar-BYBXXD7x.js";import"./HeartFill-zBQHnjrG.js";import"./accountDataFetchers-BG0x_ldD.js";import"./useIsDesktop-qZgXVmY_.js";const lo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=m({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
