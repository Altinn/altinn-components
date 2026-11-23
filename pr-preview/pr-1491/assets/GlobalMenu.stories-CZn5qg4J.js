var f=Object.defineProperty;var o=(e,u)=>f(e,"name",{value:u,configurable:!0});import{a6 as d}from"./iframe-HroKCH1i.js";import{S as h}from"./InboxFill-Dwv2ZDno.js";import{c as I,S as L,d as v}from"./PersonGroup-WrhwV8_x.js";import{S as k}from"./MenuGrid-DMFQx4_O.js";import{S as x}from"./InformationSquare-uPdk22J8.js";import{S as y}from"./Buildings2-Isc-I77e.js";import{S as G}from"./Globe-BdekqIrA.js";import{a as P}from"./accountMenu-Bkkwt1bO.js";import{G as c}from"./GlobalMenu-B2C0Dikk.js";import{l as g,d as z,m as b,b as B,c as D,g as j}from"./localeSwitcher-PZoiL7mz.js";import"./preload-helper-Cc2_yIPf.js";import"./getAccount-B6DocGW1.js";import"./useMenu-DLxClmSr.js";import"./Checkmark-rGl1e__H.js";import"./SearchField-DdJVtzp5.js";import"./MagnifyingGlass-GwJB8-P4.js";import"./MenuListItem-DW9PJpJL.js";import"./MenuListDivider-DtrGkUUW.js";import"./MenuItem-CIYGtEiF.js";import"./CheckboxUncheckedIcon-HP_EJry3.js";import"./RadioUncheckedIcon-Ds8PcFs2.js";import"./ItemMedia-BGnaafVo.js";import"./Avatar-DknIY_wN.js";import"./AvatarGroup-CajaM-Bn.js";import"./ItemLabel-BExOJJ8K.js";import"./Heading-ButwX4Fz.js";import"./useHighlightedText-BR2lgM5a.js";import"./ItemControls-P_AZ0k9Y.js";import"./Badge-6DoOsqKK.js";import"./Tooltip-3zva_1pJ.js";import"./ChevronRight-CnU_-vpz.js";import"./FieldBase-Dy7F34xJ.js";import"./Typography-mUXdli5h.js";import"./Field-A9TpZ5Q4.js";import"./Label-3I9SdFhT.js";import"./Input-KntdUcqG.js";import"./ArrowUndo-D_aPg2Cn.js";import"./Bell-BbNhDS7V.js";import"./Archive-CzrN7IRQ.js";import"./Trash-CnguooS_.js";const w=[{id:"inbox",groupId:"apps",size:"lg",icon:h,title:"Innboks",selected:!0,badge:{label:"Beta",color:"neutral",variant:"base"}},{id:"access-control",groupId:"apps",size:"lg",icon:I,title:"Tilgangsstyring",badge:{label:"Beta",color:"neutral",variant:"base"}},{id:"forms",groupId:"apps",size:"lg",icon:k,title:"Alle skjema og tjenester"},{id:"about",groupId:"help",size:"sm",icon:x,title:"Om nye altinn"},{id:"startup",groupId:"help",size:"sm",icon:y,title:"Starte og drive bedrift"},{id:"help",groupId:"help",size:"sm",icon:L,title:"Trenger du hjelp?"},{id:"profile",groupId:"profile",size:"sm",icon:v,title:"Din profil"},{id:"language",groupId:"profile",size:"sm",icon:G,title:"Språk/language"}],R={groups:{apps:{divider:!0},help:{divider:!0},profile:{title:"Logget inn som: Akvarell Søvnig"}},items:w},A={accountMenu:{...P,virtualized:!0},menu:R,currentEndUserLabel:"Logget inn som: Akvarell Søvnig",menuLabel:"Meny",backLabel:"Tilbake",logoutButton:{label:"Logg ut"},changeLabel:"Endre"},ke={title:"Layout/GlobalMenu",component:c,tags:["autodocs"],parameters:{},args:{...j}},i=o(e=>d.jsx(c,{...e}),"Desktop"),l=o(e=>d.jsx(c,{...e,menu:b}),"MobileMenu"),m={args:{menu:D,logoutButton:void 0}},p=o(()=>d.jsx(c,{...A}),"DesignReference"),O=o((e,u)=>{const S=o((M=[])=>M.map(r=>({...r,selected:r.id===u,items:Array.isArray(r.items)?S(r.items):r.items})),"select");return{...e,items:S(e.items)}},"selectItem"),s={globals:{theme:"person"},args:{menu:z,localeSwitcher:g}},n={globals:{theme:"person"},args:{menu:b,localeSwitcher:g}},t={globals:{theme:"person"},args:{menu:O(b,"sent"),localeSwitcher:g}},a={globals:{theme:"neutral"},args:{menu:B,logoutButton:void 0,localeSwitcher:g}},xe=["Desktop","MobileMenu","Login","DesignReference","LoggedInPersonDesktop","LoggedInPersonMobile","LoggedInPersonMobileSubItemSelected","LoggedOut"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: GlobalMenuProps) => {
  return <GlobalMenu {...args} />;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: GlobalMenuProps) => {
  return <GlobalMenu {...args} menu={mobileMenu} />;
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    menu: loginMenu,
    logoutButton: undefined
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <GlobalMenu {...globalMenuDesignReference} />;
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'person'
  },
  args: {
    menu: desktopMenu,
    localeSwitcher
  }
}`,...s.parameters?.docs?.source},description:{story:"Logged in as a person (green), desktop. Inbox folders live in the sidebar, so only primary items are shown.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'person'
  },
  args: {
    menu: mobileMenu,
    localeSwitcher
  }
}`,...n.parameters?.docs?.source},description:{story:"Logged in as a person (green), mobile. The inbox is expanded with its folders, since there is no sidebar.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'person'
  },
  args: {
    menu: selectItem(mobileMenu, 'sent'),
    localeSwitcher
  }
}`,...t.parameters?.docs?.source},description:{story:"Logged in as a person (green), mobile. A folder in the inbox is selected.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'neutral'
  },
  args: {
    menu: loggedOutMenu,
    logoutButton: undefined,
    localeSwitcher
  }
}`,...a.parameters?.docs?.source},description:{story:"Before login (grey). Same on desktop and mobile.",...a.parameters?.docs?.description}}};export{p as DesignReference,i as Desktop,s as LoggedInPersonDesktop,n as LoggedInPersonMobile,t as LoggedInPersonMobileSubItemSelected,a as LoggedOut,m as Login,l as MobileMenu,xe as __namedExportsOrder,ke as default};
