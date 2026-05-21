import{F as l}from"./FloatingDropdown-BUAWaMPb.js";import{S as t}from"./InformationSquare-CS8D_BUZ.js";import{S as i}from"./ArrowLeft-rXhQFn6h.js";import{S as c}from"./Plus-CPPR_4GW.js";import{S as m}from"./XMark-Cx5Omj8e.js";import"./iframe-BDpWuaMs.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonIcon-BKilWA_u.js";import"./index-DVPUayQ0.js";import"./Avatar-CT8r-oMP.js";import"./useId-BKmV9YxM.js";import"./Skeleton-DC_TZb2p.js";import"./AvatarGroup-C5RQzawa.js";import"./Icon-4_NTN6mD.js";import"./useMenu-CniiHJSE.js";import"./useClickOutside-DYOgnbCl.js";import"./Button-m_FXpHGO.js";import"./tooltip-DLcd2lCg.js";const L={title:"Components/Dropdown/FloatingDropdown",component:l,tags:["autodocs"],parameters:{layout:"padded"},args:{icon:c,iconAltText:"Actions menu",items:[{icon:t,title:"Vis nye funksjoner",onClick:()=>console.log("Show new features")},{icon:i,title:"Ta meg tilbake",onClick:()=>console.log("Go back")}]}},o={args:{}},r={args:{color:"neutral"}},n={args:{color:"company"}},e={args:{color:"person"}},a={args:{items:[{icon:t,title:"Vis nye funksjoner",onClick:()=>console.log("Show new features")},{icon:i,title:"Ta meg tilbake",onClick:()=>console.log("Go back")},{icon:c,title:"Legg til",onClick:()=>console.log("Add")},{icon:t,title:"Informasjon",onClick:()=>console.log("Info")}]}},s={args:{icon:c,iconOpen:m,color:"company"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'company'
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'person'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const M=["Default","Neutral","Company","Person","WithManyItems","WithDifferentIcon"];export{n as Company,o as Default,r as Neutral,e as Person,s as WithDifferentIcon,a as WithManyItems,M as __namedExportsOrder,L as default};
