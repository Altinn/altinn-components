var g=Object.defineProperty;var o=(m,p)=>g(m,"name",{value:p,configurable:!0});import{F as u}from"./FloatingDropdown-CMKJ4IEP.js";import{T as d}from"./iframe-DZEBeon6.js";import{S as i}from"./Plus-CVzkbDMT.js";import{S as c}from"./InformationSquare-YKe2AoWI.js";import{S as l}from"./ArrowLeft-CRlFcI1o.js";import"./useMenu-BVHVYpiB.js";import"./useClickOutside-g_SMN9G4.js";import"./ButtonIcon-BqERaHvl.js";import"./Avatar-D6PHcyLs.js";import"./AvatarGroup-BkVQ_49o.js";import"./preload-helper-Cc2_yIPf.js";const P={title:"Components/Dropdown/FloatingDropdown",component:u,tags:["autodocs"],parameters:{layout:"padded"},args:{icon:i,iconAltText:"Actions menu",items:[{icon:c,title:"Vis nye funksjoner",onClick:o(()=>console.log("Show new features"),"onClick")},{icon:l,title:"Ta meg tilbake",onClick:o(()=>console.log("Go back"),"onClick")}]}},n={args:{}},e={args:{color:"neutral"}},r={args:{color:"company"}},a={args:{color:"person"}},s={args:{items:[{icon:c,title:"Vis nye funksjoner",onClick:o(()=>console.log("Show new features"),"onClick")},{icon:l,title:"Ta meg tilbake",onClick:o(()=>console.log("Go back"),"onClick")},{icon:i,title:"Legg til",onClick:o(()=>console.log("Add"),"onClick")},{icon:c,title:"Informasjon",onClick:o(()=>console.log("Info"),"onClick")}]}},t={args:{icon:i,iconOpen:d,color:"company"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const T=["Default","Neutral","Company","Person","WithManyItems","WithDifferentIcon"];export{r as Company,n as Default,e as Neutral,a as Person,t as WithDifferentIcon,s as WithManyItems,T as __namedExportsOrder,P as default};
