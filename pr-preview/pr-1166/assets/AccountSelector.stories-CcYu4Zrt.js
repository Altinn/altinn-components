import{j as o,R as i}from"./iframe-u1jxS1Oq.js";import{A as n}from"./AccountSelector-BvHpQi_k.js";import{u as s}from"./useGlobalHeader-DgPJbVGf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CuIYfQx6.js";import"./button-CanOz9MC.js";import"./use-merge-refs-DeN80SPN.js";import"./lite-DaUVFjkg.js";import"./heading-D19-APkd.js";import"./AccountMenu-a2z5uoQ3.js";import"./SearchField-BwnvpNr2.js";import"./MagnifyingGlass-5wf6qRdO.js";import"./useId-MxiBxM6f.js";import"./XMark-Bsujigqn.js";import"./FieldBase-BcXnInHB.js";import"./Typography-DJdlSKXp.js";import"./useHighlightedText-Cgx_Ij05.js";import"./Skeleton-vSjDGrjA.js";import"./Label-D4ujXpAq.js";import"./index-Cx6LUCQB.js";import"./Input-BNqEyP7x.js";import"./input-y4RbUeVJ.js";import"./Button-BY9-KzE0.js";import"./MenuListItem-BGYFPBt-.js";import"./MenuListHeading-BoIZ0dV_.js";import"./MenuItem-CRFWvbZF.js";import"./ItemMedia-Dn5ydfd9.js";import"./Avatar-DVgGPyAb.js";import"./AvatarGroup-B0Rqd5X-.js";import"./Icon-DjXLk3vD.js";import"./Checkmark-CapblMXW.js";import"./Heading-B6H8IHeT.js";import"./ItemControls-GTSartAy.js";import"./ChevronRight-Dx4m7R44.js";import"./Badge-DEnx77R3.js";import"./Tooltip-DbCog91V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CJJuJq3h.js";import"./InformationSquare-C97_OpNa.js";import"./Switch-D4bzAeVp.js";import"./useLocale-Ds4JjBvc.js";import"./globalMenu-C8ftNL2m.js";import"./PersonCircle-Ven-MPmt.js";import"./Buildings2-IWqBaOWK.js";import"./InboxFill-pvFhSAtv.js";import"./MenuGrid-DGfKdqUy.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Bookmark-BgKyw1UK.js";import"./Archive-D39xL0Dv.js";import"./Trash-DU2X0jmR.js";import"./useAccountMenu-DrPzkboV.js";import"./HeartFill--7goPbEq.js";import"./accountDataFetchers-BWO91ewG.js";import"./useIsDesktop-BUpuOEpy.js";const uo={title:"Layout/AccountSelector",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:"object"},forceOpenFullScreen:{control:"boolean"},loading:{control:"boolean"}}},t=r=>{const p=s({}).accountSelector;return o.jsx(i,{children:o.jsx(n,{...p,forceOpenFullScreen:r.forceOpenFullScreen})})},e=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=r=>o.jsx(i,{children:o.jsx(n,{...r,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
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
