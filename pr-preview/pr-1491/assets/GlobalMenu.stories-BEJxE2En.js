var f=Object.defineProperty;var o=(e,u)=>f(e,"name",{value:u,configurable:!0});import{a6 as d}from"./iframe-CZm9Z2L_.js";import{S as h}from"./InboxFill-BUC9Wdwi.js";import{c as I,S as L,d as v}from"./PersonGroup-B8m6JoNP.js";import{S as k}from"./MenuGrid-lFBl4Ujw.js";import{S as x}from"./InformationSquare-C62nR7w8.js";import{S as y}from"./Buildings2-BTINRXJL.js";import{S as G}from"./Globe-CpZCrs52.js";import{a as P}from"./accountMenu-Bkkwt1bO.js";import{G as c}from"./GlobalMenu-KE6BDCkE.js";import{l as g,d as z,m as b,b as B,c as D,g as j}from"./localeSwitcher-CHBrcsab.js";import"./preload-helper-Cc2_yIPf.js";import"./getAccount-B6DocGW1.js";import"./useMenu-czaSJY_k.js";import"./Checkmark-CAMmZDSe.js";import"./SearchField-Cj8KK4lS.js";import"./MagnifyingGlass-DwPErScE.js";import"./MenuListItem-BwtayZGz.js";import"./MenuListDivider-CEL60lz2.js";import"./MenuItem-BBEZ09Ze.js";import"./CheckboxUncheckedIcon-B2FVZ7uO.js";import"./RadioUncheckedIcon-BajGCIeL.js";import"./ItemMedia-CpjA7nnT.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./ItemLabel-B3mLAUUV.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./ItemControls-1WPti-Pt.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./ChevronRight-MmDri0bt.js";import"./FieldBase-BiQdP4ez.js";import"./Typography-99BUGcV3.js";import"./Field-5TCcBbbM.js";import"./Label-BT4-swg_.js";import"./Input-BcwXpX3S.js";import"./ArrowUndo-Hp57fThJ.js";import"./Bell-DUB8E5rY.js";import"./Archive-BdlwK_O4.js";import"./Trash-D-r-J8J3.js";const w=[{id:"inbox",groupId:"apps",size:"lg",icon:h,title:"Innboks",selected:!0,badge:{label:"Beta",color:"neutral",variant:"base"}},{id:"access-control",groupId:"apps",size:"lg",icon:I,title:"Tilgangsstyring",badge:{label:"Beta",color:"neutral",variant:"base"}},{id:"forms",groupId:"apps",size:"lg",icon:k,title:"Alle skjema og tjenester"},{id:"about",groupId:"help",size:"sm",icon:x,title:"Om nye altinn"},{id:"startup",groupId:"help",size:"sm",icon:y,title:"Starte og drive bedrift"},{id:"help",groupId:"help",size:"sm",icon:L,title:"Trenger du hjelp?"},{id:"profile",groupId:"profile",size:"sm",icon:v,title:"Din profil"},{id:"language",groupId:"profile",size:"sm",icon:G,title:"Språk/language"}],R={groups:{apps:{divider:!0},help:{divider:!0},profile:{title:"Logget inn som: Akvarell Søvnig"}},items:w},A={accountMenu:{...P,virtualized:!0},menu:R,currentEndUserLabel:"Logget inn som: Akvarell Søvnig",menuLabel:"Meny",backLabel:"Tilbake",logoutButton:{label:"Logg ut"},changeLabel:"Endre"},ke={title:"Layout/GlobalMenu",component:c,tags:["autodocs"],parameters:{},args:{...j}},i=o(e=>d.jsx(c,{...e}),"Desktop"),l=o(e=>d.jsx(c,{...e,menu:b}),"MobileMenu"),m={args:{menu:D,logoutButton:void 0}},p=o(()=>d.jsx(c,{...A}),"DesignReference"),O=o((e,u)=>{const S=o((M=[])=>M.map(r=>({...r,selected:r.id===u,items:Array.isArray(r.items)?S(r.items):r.items})),"select");return{...e,items:S(e.items)}},"selectItem"),s={globals:{theme:"person"},args:{menu:z,localeSwitcher:g}},n={globals:{theme:"person"},args:{menu:b,localeSwitcher:g}},t={globals:{theme:"person"},args:{menu:O(b,"sent"),localeSwitcher:g}},a={globals:{theme:"neutral"},args:{menu:B,logoutButton:void 0,localeSwitcher:g}},xe=["Desktop","MobileMenu","Login","DesignReference","LoggedInPersonDesktop","LoggedInPersonMobile","LoggedInPersonMobileSubItemSelected","LoggedOut"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: GlobalMenuProps) => {
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
