var g=Object.defineProperty;var o=(m,p)=>g(m,"name",{value:p,configurable:!0});import{F as u}from"./FloatingDropdown-BTtESSxo.js";import{Q as d}from"./iframe-zDfzPjQ-.js";import{S as i}from"./Plus-CbNnKwCf.js";import{S as c}from"./InformationSquare-DREHqyul.js";import{S as l}from"./ArrowLeft-COU6d2-g.js";import"./useMenu-D1ILj_Qw.js";import"./useClickOutside-QFl_DCWF.js";import"./ButtonIcon-Ck0HIEFU.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./preload-helper-Cc2_yIPf.js";const P={title:"Components/Dropdown/FloatingDropdown",component:u,tags:["autodocs"],parameters:{layout:"padded"},args:{icon:i,iconAltText:"Actions menu",items:[{icon:c,title:"Vis nye funksjoner",onClick:o(()=>console.log("Show new features"),"onClick")},{icon:l,title:"Ta meg tilbake",onClick:o(()=>console.log("Go back"),"onClick")}]}},n={args:{}},e={args:{color:"neutral"}},r={args:{color:"company"}},a={args:{color:"person"}},s={args:{items:[{icon:c,title:"Vis nye funksjoner",onClick:o(()=>console.log("Show new features"),"onClick")},{icon:l,title:"Ta meg tilbake",onClick:o(()=>console.log("Go back"),"onClick")},{icon:i,title:"Legg til",onClick:o(()=>console.log("Add"),"onClick")},{icon:c,title:"Informasjon",onClick:o(()=>console.log("Info"),"onClick")}]}},t={args:{icon:i,iconOpen:d,color:"company"}},v=["Default","Neutral","Company","Person","WithManyItems","WithDifferentIcon"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
