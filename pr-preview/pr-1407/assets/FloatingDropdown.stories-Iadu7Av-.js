var g=Object.defineProperty;var o=(m,p)=>g(m,"name",{value:p,configurable:!0});import{F as u}from"./FloatingDropdown-C1bmgwWM.js";import{Q as d}from"./iframe-BenRi1VF.js";import{S as i}from"./Plus-EZwUhJBV.js";import{S as c}from"./InformationSquare-g2viFsxF.js";import{S as l}from"./ArrowLeft-DLawS7NC.js";import"./useMenu-DrYFOky6.js";import"./useClickOutside-BWhXimOl.js";import"./ButtonIcon-DzVR_6eI.js";import"./Avatar-DXBUAkUc.js";import"./AvatarGroup-BAohrV6V.js";import"./preload-helper-Cc2_yIPf.js";const P={title:"Components/Dropdown/FloatingDropdown",component:u,tags:["autodocs"],parameters:{layout:"padded"},args:{icon:i,iconAltText:"Actions menu",items:[{icon:c,title:"Vis nye funksjoner",onClick:o(()=>console.log("Show new features"),"onClick")},{icon:l,title:"Ta meg tilbake",onClick:o(()=>console.log("Go back"),"onClick")}]}},n={args:{}},e={args:{color:"neutral"}},r={args:{color:"company"}},a={args:{color:"person"}},s={args:{items:[{icon:c,title:"Vis nye funksjoner",onClick:o(()=>console.log("Show new features"),"onClick")},{icon:l,title:"Ta meg tilbake",onClick:o(()=>console.log("Go back"),"onClick")},{icon:i,title:"Legg til",onClick:o(()=>console.log("Add"),"onClick")},{icon:c,title:"Informasjon",onClick:o(()=>console.log("Info"),"onClick")}]}},t={args:{icon:i,iconOpen:d,color:"company"}},v=["Default","Neutral","Company","Person","WithManyItems","WithDifferentIcon"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'company'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'person'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: InformationSquareIcon,
      title: 'Vis nye funksjoner',
      onClick: () => console.log('Show new features')
    }, {
      icon: ArrowLeftIcon,
      title: 'Ta meg tilbake',
      onClick: () => console.log('Go back')
    }, {
      icon: PlusIcon,
      title: 'Legg til',
      onClick: () => console.log('Add')
    }, {
      icon: InformationSquareIcon,
      title: 'Informasjon',
      onClick: () => console.log('Info')
    }]
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: PlusIcon,
    iconOpen: XMarkIcon,
    color: 'company'
  }
}`,...t.parameters?.docs?.source}}};export{r as Company,n as Default,e as Neutral,a as Person,t as WithDifferentIcon,s as WithManyItems,v as __namedExportsOrder,P as default};
