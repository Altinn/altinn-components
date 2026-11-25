var c=Object.defineProperty;var m=(s,i)=>c(s,"name",{value:i,configurable:!0});import{G as l}from"./GlobalMenu-Dx6KsJmK.js";import{l as a,d,b as u,g,m as b}from"./localeSwitcher-BdJo1Izh.js";import"./iframe-CjTVLX0J.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-DyQl0UH7.js";import"./Checkmark-MZRBZVNG.js";import"./SearchField-BoWCGyO9.js";import"./MagnifyingGlass-DkbBbRdW.js";import"./MenuListItem-Db90m9cT.js";import"./MenuListDivider-D1F-iYgs.js";import"./MenuItem-BHJaEqQ5.js";import"./CheckboxUncheckedIcon-BI8H0dji.js";import"./RadioUncheckedIcon-BkjXdcpz.js";import"./ItemMedia-DnpNAz5S.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./ItemLabel-QKtbke7Z.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./ItemControls-DdDcRIJg.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./ChevronRight-B7WfXeCo.js";import"./FieldBase-C5zYRo5L.js";import"./Typography-D5LJyQSI.js";import"./Field-DCjNXD15.js";import"./Label-em-S6i9n.js";import"./Input-B0rqselK.js";import"./InformationSquare-DA1l9Dlv.js";import"./ArrowUndo-ButKzzqn.js";import"./Globe-xX74n395.js";import"./InboxFill-B1_bEVcP.js";import"./PersonGroup-BwCOL2Gz.js";import"./MenuGrid-F8C2h4Pq.js";import"./Buildings2-DbrN1Cg2.js";import"./Bell-BL9bPd5p.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BBOY_v7Z.js";import"./Trash-f0oxT1Hh.js";const se={title:"Layout/GlobalMenu",component:l,tags:["autodocs"],parameters:{},args:{...g}},M=m((s,i)=>{const p=m((n=[])=>n.map(e=>({...e,selected:e.id===i,items:Array.isArray(e.items)?p(e.items):e.items})),"select");return{...s,items:p(s.items)}},"selectItem"),o={args:{menu:d,localeSwitcher:a}},r={args:{menu:M(b,"sent"),localeSwitcher:a}},t={globals:{theme:"neutral"},args:{menu:u,logoutButton:void 0,localeSwitcher:a}},ie=["Desktop","Mobile","LoggedOut"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    menu: desktopMenu,
    localeSwitcher
  }
}`,...o.parameters?.docs?.source},description:{story:"Desktop: inbox folders live in the sidebar, so only primary items are shown. A primary item is selected.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    menu: selectItem(mobileMenu, 'sent'),
    localeSwitcher
  }
}`,...r.parameters?.docs?.source},description:{story:"Mobile: the inbox is expanded with its folders, since there is no sidebar. A folder is selected.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'neutral'
  },
  args: {
    menu: loggedOutMenu,
    logoutButton: undefined,
    localeSwitcher
  }
}`,...t.parameters?.docs?.source},description:{story:"Before login (grey). Same on desktop and mobile.",...t.parameters?.docs?.description}}};export{o as Desktop,t as LoggedOut,r as Mobile,ie as __namedExportsOrder,se as default};
