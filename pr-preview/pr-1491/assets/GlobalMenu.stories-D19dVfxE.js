var l=Object.defineProperty;var m=(s,i)=>l(s,"name",{value:i,configurable:!0});import{G as d}from"./GlobalMenu-BrdGem6M.js";import{l as a,d as u,g,m as b,b as h}from"./localeSwitcher-DQ-czMYR.js";import"./iframe-C0_zUbkp.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-DkMnEsls.js";import"./Checkmark-r_LW2Dwq.js";import"./SearchField-DNtOxHfE.js";import"./MagnifyingGlass-CzEj6Uz6.js";import"./MenuListItem-CH7aCagC.js";import"./MenuListDivider-BiU_kXeA.js";import"./MenuItem-DJSb-Ysu.js";import"./CheckboxUncheckedIcon-TiK1Utdf.js";import"./RadioUncheckedIcon-BOm3YJdr.js";import"./ItemMedia-Dqx0ptul.js";import"./Avatar-DKE26PJw.js";import"./AvatarGroup-BwefBp_5.js";import"./ItemLabel-9fWKgY8j.js";import"./Heading-DLwaSr_O.js";import"./useHighlightedText-BFDvP_rA.js";import"./ItemControls-DWFJyhPy.js";import"./Badge-SiuoHNvy.js";import"./Tooltip-IMKx06Nx.js";import"./ChevronRight-C6nH0agV.js";import"./FieldBase-BHBKFAe2.js";import"./Typography-CXAuaEKv.js";import"./Field-ze6C9QpL.js";import"./Label-BRVQ__pE.js";import"./Input-CmIpmweJ.js";import"./InformationSquare-CG3sxIst.js";import"./ArrowUndo-BzebLQMk.js";import"./Globe-CaMonKWF.js";import"./InboxFill-aFAE7ktP.js";import"./PersonGroup-nhG0hY5y.js";import"./MenuGrid-D5USsJgg.js";import"./Buildings2-DwPA8eJN.js";import"./Bell-D_-BbDHJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-C-7hLfu8.js";import"./Trash-1-5ygZCI.js";const se={title:"Layout/GlobalMenu",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"Design reference for how the main menu should look across all Altinn 3 applications."}}},args:{...g}},p=m((s,i)=>{const n=m((c=[])=>c.map(e=>({...e,selected:e.id===i,items:Array.isArray(e.items)?n(e.items):e.items})),"select");return{...s,items:n(s.items)}},"selectItem"),o={args:{menu:u,localeSwitcher:a}},r={args:{menu:p(b,"sent"),localeSwitcher:a}},t={globals:{theme:"neutral"},args:{menu:p(h,"forms"),logoutButton:void 0,localeSwitcher:a}},ie=["Desktop","Mobile","LoggedOut"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    menu: selectItem(loggedOutMenu, 'forms'),
    logoutButton: undefined,
    localeSwitcher
  }
}`,...t.parameters?.docs?.source},description:{story:"Before login (grey). Same on desktop and mobile.",...t.parameters?.docs?.description}}};export{o as Desktop,t as LoggedOut,r as Mobile,ie as __namedExportsOrder,se as default};
