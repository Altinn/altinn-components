import{F as l}from"./FloatingDropdown-Dykeo_Yy.js";import{T as m}from"./iframe-CsUY_6Pm.js";import{S as c}from"./Plus-BIbNWuxu.js";import{S as t}from"./InformationSquare-DR0XxH_N.js";import{S as i}from"./ArrowLeft-mTxgB8h9.js";import"./useMenu-C86uaFsI.js";import"./useClickOutside-B4CoGadG.js";import"./ButtonIcon-BS7n_J2G.js";import"./Avatar-CSJo9Is0.js";import"./AvatarGroup-YQCApjdS.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Components/Dropdown/FloatingDropdown",component:l,tags:["autodocs"],parameters:{layout:"padded"},args:{icon:c,iconAltText:"Actions menu",items:[{icon:t,title:"Vis nye funksjoner",onClick:()=>console.log("Show new features")},{icon:i,title:"Ta meg tilbake",onClick:()=>console.log("Go back")}]}},o={args:{}},n={args:{color:"neutral"}},e={args:{color:"company"}},r={args:{color:"person"}},a={args:{items:[{icon:t,title:"Vis nye funksjoner",onClick:()=>console.log("Show new features")},{icon:i,title:"Ta meg tilbake",onClick:()=>console.log("Go back")},{icon:c,title:"Legg til",onClick:()=>console.log("Add")},{icon:t,title:"Informasjon",onClick:()=>console.log("Info")}]}},s={args:{icon:c,iconOpen:m,color:"company"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'company'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'person'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: PlusIcon,
    iconOpen: XMarkIcon,
    color: 'company'
  }
}`,...s.parameters?.docs?.source}}};const D=["Default","Neutral","Company","Person","WithManyItems","WithDifferentIcon"];export{e as Company,o as Default,n as Neutral,r as Person,s as WithDifferentIcon,a as WithManyItems,D as __namedExportsOrder,h as default};
