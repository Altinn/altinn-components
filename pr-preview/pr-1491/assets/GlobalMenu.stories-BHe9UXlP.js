var y=Object.defineProperty;var n=(e,a)=>y(e,"name",{value:a,configurable:!0});import{a6 as r}from"./iframe-Df5nkPs8.js";import{G as m}from"./GlobalMenu-BQTKpuvH.js";import{l as p,d as b,b as h,g as x,m as f}from"./localeSwitcher-ChhKg0Ck.js";import{H as l}from"./Heading-CPiHedua.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-gk-Zv7NC.js";import"./Checkmark-DZ-Lmkux.js";import"./SearchField-C0Yxe_69.js";import"./MagnifyingGlass-3vGCvjJD.js";import"./MenuListItem-C4bbk3e4.js";import"./MenuListDivider-BMCtCld-.js";import"./MenuItem-9AmdLb1n.js";import"./CheckboxUncheckedIcon-DFwabWeH.js";import"./RadioUncheckedIcon-CNGez86b.js";import"./ItemMedia-B1kmhXWg.js";import"./Avatar-CUeqTW6a.js";import"./AvatarGroup-CtyhIC1k.js";import"./ItemLabel-DuyLbrJx.js";import"./ItemControls-Bd_Lnueh.js";import"./Badge-m24uQYgz.js";import"./Tooltip-KOhXDwFj.js";import"./ChevronRight-DJP358BJ.js";import"./FieldBase-C4nTzDS1.js";import"./Typography-W78b6WhV.js";import"./useHighlightedText-BM0MIdsX.js";import"./Field-DfhUv83u.js";import"./Label-D4wdB9xq.js";import"./Input-B9TaRlMe.js";import"./InformationSquare-CXwkU926.js";import"./ArrowUndo-BBF4w0in.js";import"./Globe-CJX2uVTf.js";import"./InboxFill-BWNa2-zj.js";import"./PersonGroup--rYaGh6g.js";import"./MenuGrid-jjE0xEq3.js";import"./Buildings2-Byf-KbZl.js";import"./Bell-CssGG3Qs.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BEIKmTLh.js";import"./Trash-_1KE3-4v.js";const me={title:"Layout/GlobalMenu",component:m,tags:["autodocs"],parameters:{},args:{...x}},M=n((e,a)=>{const d=n((g=[])=>g.map(o=>({...o,selected:o.id===a,items:Array.isArray(o.items)?d(o.items):o.items})),"select");return{...e,items:d(e.items)}},"selectItem"),c={display:"grid",alignContent:"start",gap:"0.5rem"},u=n(e=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:[r.jsxs("div",{"data-color":"person",style:c,children:[r.jsx(l,{size:"sm",children:"Personvisning"}),r.jsx(m,{...e})]}),r.jsxs("div",{"data-color":"company",style:c,children:[r.jsx(l,{size:"sm",children:"Selskapsvisning"}),r.jsx(m,{...e})]})]}),"PersonAndCompany"),t={args:{menu:b,localeSwitcher:p},render:u},s={args:{menu:M(f,"sent"),localeSwitcher:p},render:u},i={globals:{theme:"neutral"},args:{menu:h,logoutButton:void 0,localeSwitcher:p}},pe=["Desktop","Mobile","LoggedOut"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    menu: desktopMenu,
    localeSwitcher
  },
  render: PersonAndCompany
}`,...t.parameters?.docs?.source},description:{story:"Desktop: inbox folders live in the sidebar, so only primary items are shown. A primary item is selected.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    menu: selectItem(mobileMenu, 'sent'),
    localeSwitcher
  },
  render: PersonAndCompany
}`,...s.parameters?.docs?.source},description:{story:"Mobile: the inbox is expanded with its folders, since there is no sidebar. A folder is selected.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'neutral'
  },
  args: {
    menu: loggedOutMenu,
    logoutButton: undefined,
    localeSwitcher
  }
}`,...i.parameters?.docs?.source},description:{story:"Before login (grey). Same on desktop and mobile.",...i.parameters?.docs?.description}}};export{t as Desktop,i as LoggedOut,s as Mobile,pe as __namedExportsOrder,me as default};
