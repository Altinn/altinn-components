var c=Object.defineProperty;var m=(s,i)=>c(s,"name",{value:i,configurable:!0});import{G as l}from"./GlobalMenu-BV-cJ0dn.js";import{l as a,d,b as u,g,m as b}from"./localeSwitcher-BCkn9Xx-.js";import"./iframe-BYGPhf7N.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-r2OQI4uO.js";import"./Checkmark-CWd8wRaj.js";import"./SearchField-BySPj-oD.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./MenuListItem-Er-de1vm.js";import"./MenuListDivider-C-25gy3r.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemMedia-ApKMdvQL.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./ItemLabel-KBN1Srj3.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./ItemControls-1sBh4pPD.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./ChevronRight-BckCGbec.js";import"./FieldBase-eqne-WwB.js";import"./Typography-BHNcIxxH.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";import"./InformationSquare-Cx25xyTl.js";import"./ArrowUndo-BhG5BbM5.js";import"./Globe-MPkG4s1s.js";import"./InboxFill-DWlAI5wH.js";import"./PersonGroup-Bxf-P3OI.js";import"./MenuGrid-CHEbnhS0.js";import"./Buildings2-BkCIy4EX.js";import"./Bell-BfrH_baH.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-wTNP5JWn.js";import"./Trash-Aw4yKrn_.js";const se={title:"Layout/GlobalMenu",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Design reference for how the main menu should look across all Altinn 3 applications."}}},args:{...g}},h=m((s,i)=>{const n=m((p=[])=>p.map(e=>({...e,selected:e.id===i,items:Array.isArray(e.items)?n(e.items):e.items})),"select");return{...s,items:n(s.items)}},"selectItem"),o={args:{menu:d,localeSwitcher:a}},r={args:{menu:h(b,"sent"),localeSwitcher:a}},t={globals:{theme:"neutral"},args:{menu:u,logoutButton:void 0,localeSwitcher:a}},ie=["Desktop","Mobile","LoggedOut"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
