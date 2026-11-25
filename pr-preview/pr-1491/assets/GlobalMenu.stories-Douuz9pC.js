var y=Object.defineProperty;var n=(e,a)=>y(e,"name",{value:a,configurable:!0});import{a6 as r}from"./iframe-CmRPDbOf.js";import{G as m}from"./GlobalMenu-CIdPDdza.js";import{l as p,d as b,b as h,g as x,m as f}from"./localeSwitcher-C3Jstk8I.js";import{H as l}from"./Heading-Bga8Ehqe.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-Dthlol8g.js";import"./Checkmark-BU8vtpH6.js";import"./SearchField-DPxFOcjN.js";import"./MagnifyingGlass-CwhdRafK.js";import"./MenuListItem-DYZsrCFE.js";import"./MenuListDivider-USarlITZ.js";import"./MenuItem-CP9JLIOX.js";import"./CheckboxUncheckedIcon-Dld9bvaz.js";import"./RadioUncheckedIcon-zMkD8-D_.js";import"./ItemMedia-BANum1kS.js";import"./Avatar-CwlqlX3p.js";import"./AvatarGroup-CLRHdYA5.js";import"./ItemLabel-S9If7Ew0.js";import"./ItemControls-CjzJ0cx0.js";import"./Badge-v2cVTzHM.js";import"./Tooltip-68erwe8G.js";import"./ChevronRight-DUgz5ktQ.js";import"./FieldBase-uTfpYKlO.js";import"./Typography-3Ni-pGxm.js";import"./useHighlightedText-DjvNujh0.js";import"./Field-BGZ86hwn.js";import"./Label-DME-k-qs.js";import"./Input-SsfERmB5.js";import"./InformationSquare-CWm2kkCA.js";import"./ArrowUndo-L8RPPon2.js";import"./Globe-uYgrsE93.js";import"./InboxFill-C-y88DAH.js";import"./PersonGroup-DT6ZT_45.js";import"./MenuGrid-CHOSeooe.js";import"./Buildings2-N07gQ7vJ.js";import"./Bell-CcxSUtBz.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Czt8xJzv.js";import"./Trash-BLtAnUoG.js";const me={title:"Layout/GlobalMenu",component:m,tags:["autodocs"],parameters:{},args:{...x}},M=n((e,a)=>{const d=n((g=[])=>g.map(o=>({...o,selected:o.id===a,items:Array.isArray(o.items)?d(o.items):o.items})),"select");return{...e,items:d(e.items)}},"selectItem"),c={display:"grid",alignContent:"start",gap:"0.5rem"},u=n(e=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:[r.jsxs("div",{"data-color":"person",style:c,children:[r.jsx(l,{size:"sm",children:"Personvisning"}),r.jsx(m,{...e})]}),r.jsxs("div",{"data-color":"company",style:c,children:[r.jsx(l,{size:"sm",children:"Selskapsvisning"}),r.jsx(m,{...e})]})]}),"PersonAndCompany"),t={args:{menu:b,localeSwitcher:p},render:u},s={args:{menu:M(f,"sent"),localeSwitcher:p},render:u},i={globals:{theme:"neutral"},args:{menu:h,logoutButton:void 0,localeSwitcher:p}},pe=["Desktop","Mobile","LoggedOut"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
